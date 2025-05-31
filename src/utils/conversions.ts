import type { EmployeeType } from "../types/types";

const dateToString = (date: Date) => {
  return date.toLocaleDateString("en-CA");
};

const addressToString = (address: EmployeeType["address"]) => {
  return [
    address?.houseNo,
    address?.line1,
    address?.line2,
    address?.pincode,
  ].join(", ");
};

export { addressToString, dateToString };
