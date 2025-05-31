export type EmployeeType = {
  id?: number;
  email?: string;
  password?: string;
  name?: string;
  age?: number;
  role?: string;
  status?: string;
  dateOfJoining?: string;
  experience?: number;
  employeeId?: string;
  address?: {
    line1?: string;
    line2?: string;
    houseNo?: string;
    pincode?: string;
  };
  department?: {
    name?: string;
  };
};
