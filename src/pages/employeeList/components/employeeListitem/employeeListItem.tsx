import { PillboxText } from "../../../../components";
import type { Employee } from "../../../../store/employee/employee.types";
import { timestampToString } from "../../../../utils/conversions";
import "./employeeListItem.css";

type ActionType = {
  icon: React.ReactNode;
  actionFn: () => void;
};

type EmployeeListItemProps = {
  employee: Employee;
  actionEnabled: boolean;
  action1: ActionType;
  action2: ActionType;
};

const EmployeeListItem = ({
  employee,
  action1,
  action2,
  actionEnabled,
}: EmployeeListItemProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "ACTIVE":
        return "green";
      case "INACTIVE":
        return "red";
      case "PROBATION":
        return "yellow";
      default:
        return "none";
    }
  };

  return (
    <div className="employee-row">
      <div>{employee.name}</div>
      <div>{employee.employeeId}</div>
      <div>{timestampToString(employee.dateOfJoining)}</div>
      <div>{employee.role}</div>
      <div>
        {
          <PillboxText
            text={employee.status!}
            color={getStatusColor(employee.status!)}
          />
        }
      </div>
      <div>{`${employee.experience} ${
        employee.experience === 1 ? "Year" : "Years"
      }`}</div>
      <div className="actions">
        <div
          style={{ display: !actionEnabled ? "none" : "block" }}
          className="action-icon"
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            action1.actionFn();
          }}
        >
          {action1 && action1.icon}
        </div>
        <div
          className="action-icon"
          style={{ display: !actionEnabled ? "none" : "block" }}
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            action2.actionFn();
          }}
        >
          {action2 && action2.icon}
        </div>
      </div>
    </div>
  );
};

export default EmployeeListItem;
