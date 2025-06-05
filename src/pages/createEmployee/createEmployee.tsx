import { useNavigate } from "react-router-dom";
import {
  DialogBox,
  EmployeeForm,
  Loader,
  SectionHeader,
} from "../../components";
import "./createEmployee.css";
import { useEffect, useRef, useState } from "react";
import { type Employee } from "../../store/employee/employee.types";
import { useCreateEmployeeMutation } from "../../api-service/employees/employees.api";
import { timestampToString } from "../../utils/conversions";

const CreateEmployee = () => {
  const dialogBoxRef = useRef<HTMLDialogElement>(null);

  const navigate = useNavigate();
  const [employee, setEmployee] = useState<Employee>({ id: -1 } as Employee);
  const [createEmployee, { isLoading, isError, error }] =
    useCreateEmployeeMutation();

  const createClicked = async (e?: React.FormEvent) => {
    if (!e) return;
    e.preventDefault();
    e.stopPropagation();
    await createEmployee({
      ...employee,
      dateOfJoining: timestampToString(employee.dateOfJoining),
    })
      .unwrap()
      .then(() => navigate("/employees"));
  };
  const cancelClicked = () => navigate(-1);

  useEffect(() => {
    if (isError) {
      dialogBoxRef.current?.showModal();
    }
  }, [isError]);

  if (isLoading) return <Loader isVisible={true} />;
  return (
    <>
      <DialogBox
        title="Uh Oh... Something went wrong"
        description={
          error && "data" in error
            ? Object.values(error.data as object).join("")
            : ""
        }
        onResponse={() => {}}
        ref={dialogBoxRef}
      />
      <main className="create-employee-page-main">
        <SectionHeader title="Create Employee" />
        <EmployeeForm
          employee={employee}
          setEmployee={setEmployee}
          handleCancel={cancelClicked}
          handleSave={createClicked}
        />
      </main>
    </>
  );
};

export default CreateEmployee;
