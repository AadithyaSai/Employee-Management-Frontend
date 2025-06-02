import { useNavigate, useParams } from "react-router-dom";
import { EmployeeForm, SectionHeader } from "../../components";
import "./editEmployee.css";
import { useState } from "react";
import { shallowEqual } from "react-redux";
import {
  useAppDispatch,
  useAppSelector,
  type RootState,
} from "../../store/store";
import { updateEmployee } from "../../store/employee/employeeReducer";

const EditEmployee = () => {
  const id = parseInt(useParams()["id"] ?? "NaN");
  const employeeDetails = useAppSelector(
    (state: RootState) => state.employees.find((e) => e.id === id),
    shallowEqual
  );

  if (!employeeDetails) {
    throw new Error("Bad ID");
  }

  const [employee, setEmployee] = useState(employeeDetails);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const editClicked = () => {
    dispatch(updateEmployee(employee));
    navigate(`/employees/${id}`);
  };

  const cancelClicked = () => navigate(-1);

  return (
    <main className="edit-employee-page-main">
      <SectionHeader title="Edit Employee" />
      <EmployeeForm
        employee={employee}
        setEmployee={setEmployee}
        handleCancel={cancelClicked}
        handleSave={editClicked}
      />
    </main>
  );
};

export default EditEmployee;
