import { useNavigate, useParams } from "react-router-dom";
import {
  DialogBox,
  EmployeeForm,
  Loader,
  SectionHeader,
} from "../../components";
import "./editEmployee.css";
import { useEffect, useRef, useState } from "react";
import {
  useGetOneEmployeeQuery,
  useUpdateEmployeeMutation,
} from "../../api-service/employees/employees.api";
import { timestampToString } from "../../utils/conversions";
import type { Employee } from "../../store/employee/employee.types";
import { jwtDecode } from "jwt-decode";
import useLocalStorage from "../../hooks/useLocalStorage";
import type { JWTPayload } from "../types";

const EditEmployee = () => {
  const id = parseInt(useParams()["id"] ?? "NaN");

  const dialogBoxRef = useRef<HTMLDialogElement>(null);

  const [employee, setEmployee] = useState<Employee>({} as Employee);
  const {
    data: employeeDetails,
    isLoading: employeeDetailsIsLoading,
    isFetching: employeeDetailsIsFetching,
  } = useGetOneEmployeeQuery(id);
  
  const [
    editEmployee,
    { isLoading: updateIsLoading, isError: updateIsError, error: updateError },
  ] = useUpdateEmployeeMutation();
  const navigate = useNavigate();

  const [token] = useLocalStorage("token", "");
  const tokenPayload = jwtDecode<JWTPayload>(token);

  if (!["ADMIN", "HR"].includes(tokenPayload.role) && id !== tokenPayload.id) {
    throw new Error("You dont have permission to access this page");
  }

  const editClicked = async (e?: React.FormEvent) => {
    if (!e) return;

    e.preventDefault();
    e.stopPropagation();

    await editEmployee({
      ...employee,
      dateOfJoining: timestampToString(employee.dateOfJoining),
      password: "",
    })
      .unwrap()
      .then(() => navigate(`/employees/${id}`));
  };

  const cancelClicked = () => navigate(-1);

  useEffect(() => {
    if (employeeDetails) setEmployee(employeeDetails);
  }, [employeeDetails]);

  useEffect(() => {
    if (updateIsError) {
      dialogBoxRef.current?.showModal();
    }
  }, [updateIsError]);

  if (
    employeeDetailsIsLoading ||
    employeeDetailsIsFetching ||
    !employee ||
    updateIsLoading
  )
    return <Loader isVisible={true} />;

  return (
    <>
      <DialogBox
        title="Uh Oh... Something went wrong"
        description={
          updateError && "data" in updateError
            ? Object.values(updateError.data as object).join("")
            : ""
        }
        onResponse={() => {}}
        ref={dialogBoxRef}
      />
      <main className="edit-employee-page-main">
        <SectionHeader title="Edit Employee" />
        <EmployeeForm
          employee={employee}
          setEmployee={setEmployee}
          handleCancel={cancelClicked}
          handleSave={editClicked}
        />
      </main>
    </>
  );
};

export default EditEmployee;
