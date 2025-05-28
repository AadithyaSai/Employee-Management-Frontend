import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components";
import { SectionHeader } from "../../components";
import { SelectInputField } from "../../components";
import { TextInputField } from "../../components";
import "./editEmployee.css";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const editClicked = () => alert("Edited");
  const cancelClicked = () => navigate(`/employees/:${id}`);

  const departments = ["HR", "Developer", "UI", "UX"];
  const roles = ["HR", "Developer", "UI", "UX"];
  const statuses = ["Active", "Inactive", "Probation"];

  return (
    <main className="edit-employee-page-main">
      <SectionHeader title="Edit Employee" />
      <form className="employee-edit-form">
        <div className="employee-detail-input-section">
          <TextInputField
            label="Employee Name"
            placeholder="Employee Name"
            name="name"
          />
          <TextInputField
            label="Joining Date"
            placeholder="Joining Date"
            name="joiningDate"
          />
          <TextInputField
            label="Experience (Yrs)"
            placeholder="Experience"
            name="experience"
          />
          <SelectInputField
            label="Department"
            placeholder="Choose Department"
            name="department"
            values={departments}
          />
          <SelectInputField
            label="Role"
            placeholder="Choose Role"
            name="role"
            values={roles}
          />
          <SelectInputField
            label="Status"
            placeholder="Status"
            name="status"
            values={statuses}
          />
          <div className="multiline-input">
            <TextInputField
              label="Address"
              placeholder="Flat No./House No."
              name="houseNo"
            />
            <TextInputField
              label=""
              placeholder="Address Line 1"
              name="line1"
            />
            <TextInputField
              label=""
              placeholder="Address Line 2"
              name="line2"
            />
          </div>
          <TextInputField
            label="Employee ID"
            disabled
            value="E-001"
            name="employeeId"
          />
        </div>
        <div className="form-buttons">
          <Button label="Edit" onClick={editClicked} variants="default" />
          <Button label="Cancel" onClick={cancelClicked} variants="outline" />
        </div>
      </form>
    </main>
  );
};

export default EditEmployee;
