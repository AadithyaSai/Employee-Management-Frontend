import { useNavigate } from "react-router-dom";
import { EmployeeForm, SectionHeader } from "../../components";
import "./createEmployee.css";
import { useState } from "react";
import type { EmployeeType } from "../../types/types";

const CreateEmployee = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({} as EmployeeType);

  const createClicked = () => alert("Created");
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
