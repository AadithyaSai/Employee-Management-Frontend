import { useNavigate } from "react-router-dom";
import { EmployeeForm, SectionHeader } from "../../components";
import "./editEmployee.css";
import { useEffect, useState } from "react";
import type { EmployeeType } from "../../types/types";

const EditEmployee = () => {
  // const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({} as EmployeeType);

  const editClicked = () => alert("Edited");
  const cancelClicked = () => navigate(-1);

  useEffect(() => {
    setEmployee({
      id: 123,
      name: Math.random().toString(36).slice(2, 7) + " Doe",
      employeeId: `E${Math.floor(1000000 + Math.random() * 9999999)}`,
      dateOfJoining: new Date(),
      role: ["HR", "Full Stack", "Devops", "UI Engineer", "Backend"][
        Math.floor(Math.random() * 5)
      ],
      status: ["Active", "Inactive", "Probation"][
        Math.floor(Math.random() * 3)
      ],
      experience: Math.floor(Math.random() * 10),
    } as EmployeeType);
  }, []);

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
