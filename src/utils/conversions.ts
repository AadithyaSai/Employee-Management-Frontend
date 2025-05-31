import type { Address } from "../store/employee/employee.types";

const dateToString = (date: Date) => {
  return date.toLocaleDateString("en-CA");
};

const addressToString = (address: Address) => {
  return [
    address?.houseNo,
    address?.line1,
    address?.line2,
    address?.pincode,
  ].join(", ");
};

export { addressToString, dateToString };
