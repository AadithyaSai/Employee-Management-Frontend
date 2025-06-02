import {
  EmployeeRole,
  EmployeeStatus,
  type Employee,
} from "../../store/employee/employee.types";
import Button from "../button/Button";
import SelectInputField from "../selectInputField/selectInputField";
import TextInputField from "../textInputField/textInputField";
import "./employeeForm.css";
import { useAppSelector } from "../../store/store";
import { timestampToString } from "../../utils/conversions";

type EmployeeFormProps = {
  employee: Employee;
  setEmployee: (employee: Employee) => void;
  handleCancel: () => void;
  handleSave: () => void;
};

const EmployeeForm = ({
  employee,
  handleCancel,
  handleSave,
  setEmployee,
}: EmployeeFormProps) => {
  const isEdit = employee.id !== -1;

  const departments = useAppSelector((state) => state.departments);
  const roles = Object.values(EmployeeRole);
  const statuses = Object.values(EmployeeStatus);

  return (
    <form className="employee-form">
      <div className="employee-detail-input-section">
        <TextInputField
          label="Employee Name"
          placeholder="Employee Name"
          name="name"
          value={employee.name || ""}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          }}
        />
        <TextInputField
          label="Email"
          placeholder="abc@example.com"
          name="email"
          value={employee.email || ""}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          }}
        />
        <TextInputField
          label="Password"
          placeholder="Password"
          name="password"
          value={employee.password || ""}
          // style={{ display: "none" }}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          }}
        />
        <TextInputField
          label="Age"
          placeholder="Age"
          name="age"
          value={employee.age ? employee.age.toString() : ""}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          }}
        />
        <TextInputField
          label="Joining Date"
          placeholder="Joining Date"
          name="dateOfJoining"
          type="date"
          value={
            employee.dateOfJoining
              ? timestampToString(employee.dateOfJoining)
              : ""
          }
          onChange={(e) => {
            setEmployee({
              ...employee,
              [e.target.name]: e.target.valueAsDate?.getTime(),
            });
          }}
        />
        <TextInputField
          label="Experience (Yrs)"
          placeholder="Experience"
          name="experience"
          value={employee.experience ? employee.experience.toString() : ""}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          }}
        />
        <SelectInputField
          label="Department"
          placeholder="Choose Department"
          name="department"
          optionValues={departments.map(
            (dept) => [dept.id.toString(), dept.name] as const
          )}
          value={employee.department ? employee.department.id.toString() : ""}
          onChange={(e) => {
            setEmployee({
              ...employee,
              department: {
                id: parseInt(e.target.value),
                name: e.target.options[e.target.selectedIndex].text,
              },
            });
          }}
        />
        <SelectInputField
          label="Role"
          placeholder="Choose Role"
          name="role"
          optionValues={roles}
          value={employee.role || ""}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          }}
        />
        <SelectInputField
          label="Status"
          placeholder="Status"
          name="status"
          optionValues={statuses}
          value={employee.status || ""}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          }}
        />

        <div className="multiline-input">
          <TextInputField
            label="Address"
            placeholder="Flat No./House No."
            name="houseNo"
            value={
              employee.address && employee.address.houseNo
                ? employee.address.houseNo
                : ""
            }
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
            value={
              employee.address && employee.address.line1
                ? employee.address.line1
                : ""
            }
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
            value={
              employee.address && employee.address.line2
                ? employee.address.line2
                : ""
            }
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
            placeholder="Pincode"
            name="pincode"
            value={
              employee.address && employee.address.pincode
                ? employee.address.pincode
                : ""
            }
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
          value={employee.employeeId || ""}
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
