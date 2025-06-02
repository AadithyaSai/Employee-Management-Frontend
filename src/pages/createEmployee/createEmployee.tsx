import { useNavigate } from "react-router-dom";
import { EmployeeForm, SectionHeader } from "../../components";
import "./createEmployee.css";
import { useState } from "react";
import { type Employee } from "../../store/employee/employee.types";
import { useAppDispatch } from "../../store/store";
import { addEmployee } from "../../store/employee/employeeReducer";

const CreateEmployee = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [employee, setEmployee] = useState<Employee>({ id: -1 } as Employee);

  const createClicked = () => {
    employee.id = Math.floor(1000 + Math.random() * 8999);
    dispatch(addEmployee(employee));
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
