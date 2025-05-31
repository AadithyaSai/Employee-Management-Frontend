import { useNavigate, useParams } from "react-router-dom";
import { EmployeeForm, SectionHeader } from "../../components";
import "./editEmployee.css";
import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { EMPLOYEE_ACTION_TYPES } from "../../store/employee/employee.types";
import type { rootState } from "../../store/store";

const EditEmployee = () => {
  const id = parseInt(useParams()["id"] ?? "NaN");
  const employeeDetails = useSelector(
    (state: rootState) => state.employees.find((e) => e.id === id),
    shallowEqual
  );

  if (!employeeDetails) {
    throw new Error("Bad ID");
  }

  const [employee, setEmployee] = useState(employeeDetails);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editClicked = () => {
    dispatch({
      type: EMPLOYEE_ACTION_TYPES.UPDATE,
      payload: employee,
    });
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
