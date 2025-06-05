import {
  EmployeeRole,
  EmployeeStatus,
  type Employee,
} from "../../store/employee/employee.types";
import Button from "../button/Button";
import SelectInputField from "../selectInputField/selectInputField";
import TextInputField from "../textInputField/textInputField";
import "./employeeForm.css";
import { timestampToString } from "../../utils/conversions";
import { useListDepartmentQuery } from "../../api-service/departments/departments.api";
import Loader from "../loader/loader";

type EmployeeFormProps = {
  employee: Employee;
  setEmployee: (employee: Employee) => void;
  handleCancel: () => void;
  handleSave: (e?: React.FormEvent) => void;
};

const EmployeeForm = ({
  employee,
  handleCancel,
  handleSave,
  setEmployee,
}: EmployeeFormProps) => {
  const isEdit = employee.id !== -1;

  const { data: departments, isLoading } = useListDepartmentQuery();
  if (isLoading || !departments) return <Loader isVisible={true} />;

  const roles = Object.values(EmployeeRole);
  const statuses = Object.values(EmployeeStatus);

  return (
    <form className="employee-form" onSubmit={handleSave}>
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
          disabled={isEdit}
          placeholder={isEdit ? "Contact admin to change password" : "Password"}
          name="password"
          value={isEdit ? "" : employee.password || ""}
          // style={{ display: "none" }}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          }}
        />
        <TextInputField
          label="Age"
          placeholder="Age"
          name="age"
          value={employee.age !== undefined ? employee.age.toString() : ""}
          onChange={(e) => {
            setEmployee({
              ...employee,
              [e.target.name]: parseInt(e.target.value || "0"),
            });
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
          value={
            employee.experience !== undefined
              ? employee.experience.toString()
              : ""
          }
          onChange={(e) => {
            setEmployee({
              ...employee,
              [e.target.name]: parseInt(e.target.value || "0"),
            });
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
              employee.address && employee.address.pincode !== undefined
                ? employee.address.pincode
                : ""
            }
            onChange={(e) => {
              setEmployee({
                ...employee,
                address: {
                  ...employee.address,
                  [e.target.name]: parseInt(e.target.value || "0"),
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
          type="submit"
          variants="default"
        />
        <Button label="Cancel" onClick={handleCancel} variants="outline" />
      </div>
    </form>
  );
};

export default EmployeeForm;
