import { useNavigate } from "react-router-dom";
import { EmployeeForm, SectionHeader } from "../../components";
import "./createEmployee.css";
import { useState } from "react";
import {
  EMPLOYEE_ACTION_TYPES,
  type Employee,
} from "../../store/employee/employee.types";
import { useDispatch } from "react-redux";

const CreateEmployee = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [employee, setEmployee] = useState<Employee>({ id: -1 } as Employee);

  const createClicked = () => {
    dispatch({
      type: EMPLOYEE_ACTION_TYPES.ADD,
      payload: employee,
    });
    navigate("/employees");
  };
  const cancelClicked = () => navigate(-1);

  return (
    <main className="create-employee-page-main">
      <SectionHeader title="Create Employee" />
      <EmployeeForm
        employee={employee}
        setEmployee={setEmployee}
        handleCancel={cancelClicked}
        handleSave={createClicked}
      />
    </main>
  );
};

export default CreateEmployee;
