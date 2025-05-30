import type { EmployeeType } from "../../types/types";
import { dateToString } from "../../utils/conversions";
import Button from "../button/Button";
import SelectInputField from "../selectInputField/selectInputField";
import TextInputField from "../textInputField/textInputField";
import "./employeeForm.css";

type EmployeeFormProps = {
  employee: EmployeeType;
  setEmployee: (employee: EmployeeType) => void;
  handleCancel: () => void;
  handleSave: () => void;
};

const EmployeeForm = ({
  employee,
  handleCancel,
  handleSave,
  setEmployee,
}: EmployeeFormProps) => {
  const isEdit = employee.id !== undefined;

  const departments = ["HR", "Developer", "UI", "UX"];
  const roles = ["HR", "Full Stack", "Devops", "UI Engineer", "Backend"];
  const statuses = ["Active", "Inactive", "Probation"];

  return (
    <form className="employee-form">
      <div className="employee-detail-input-section">
        <TextInputField
          label="Employee Name"
          placeholder="Employee Name"
          name="name"
          value={employee.name}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          }}
        />
        <TextInputField
          label="Email"
          placeholder="abc@example.com"
          name="email"
          value={employee.email}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          }}
        />
        <TextInputField
          label="Password"
          placeholder="Password"
          name="password"
          value={employee.password}
          // style={{ display: "none" }}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          }}
        />
        <TextInputField
          label="Age"
          placeholder="Age"
          name="age"
          value={employee.age?.toString()}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          }}
        />
        <TextInputField
          label="Joining Date"
          placeholder="Joining Date"
          name="dateOfJoining"
          value={
            employee.dateOfJoining
              ? `${dateToString(employee.dateOfJoining)}`
              : ""
          }
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          }}
        />
        <TextInputField
          label="Experience (Yrs)"
          placeholder="Experience"
          name="experience"
          value={employee.experience?.toString()}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          }}
        />
        <SelectInputField
          label="Department"
          placeholder="Choose Department"
          name="department"
          values={departments}
          value={employee.department?.name}
          onChange={(e) => {
            setEmployee({ ...employee, department: { name: e.target.value } });
          }}
        />
        <SelectInputField
          label="Role"
          placeholder="Choose Role"
          name="role"
          values={roles}
          value={employee.role}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          }}
        />
        <SelectInputField
          label="Status"
          placeholder="Status"
          name="status"
          values={statuses}
          value={employee.status}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          }}
        />

        <div className="multiline-input">
          <TextInputField
            label="Address"
            placeholder="Flat No./House No."
            name="houseNo"
            value={employee.address?.houseNo}
            onChange={(e) => {
              setEmployee({
                ...employee,
                address: {
                  ...employee.address,
                  [e.target.name]: e.target.value,
                },
              });
            }}
          />
          <TextInputField
            label=""
            placeholder="Address Line 1"
            name="line1"
            value={employee.address?.line1}
            onChange={(e) => {
              setEmployee({
                ...employee,
                address: {
                  ...employee.address,
                  [e.target.name]: e.target.value,
                },
              });
            }}
          />
          <TextInputField
            label=""
            placeholder="Address Line 2"
            name="line2"
            value={employee.address?.line2}
            onChange={(e) => {
              setEmployee({
                ...employee,
                address: {
                  ...employee.address,
                  [e.target.name]: e.target.value,
                },
              });
            }}
          />
        </div>
        <TextInputField
          label="Employee ID"
          disabled={isEdit}
          name="employeeId"
          placeholder="Employee ID"
          value={employee.employeeId}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          }}
        />
      </div>
      <div className="form-buttons">
        <Button
          label={isEdit ? "Edit" : "Create"}
          onClick={handleSave}
          variants="default"
        />
        <Button label="Cancel" onClick={handleCancel} variants="outline" />
      </div>
    </form>
  );
};

export default EmployeeForm;
