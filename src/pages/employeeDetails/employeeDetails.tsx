import { Link, useParams } from "react-router-dom";
import { PillboxButton, PillboxText, SectionHeader } from "../../components";
import "./employeeDetails.css";
import DetailField from "./components/detailField/detailField";
import { useState, useEffect } from "react";
import type { EmployeeType } from "../../types/types";
import { dateToString, addressToString } from "../../utils/conversions";

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({} as EmployeeType);

  const editIcon = (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.5161 1.19298C20.199 0.875647 19.8224 0.623915 19.408 0.452166C18.9935 0.280417 18.5493 0.192017 18.1006 0.192017C17.652 0.192017 17.2078 0.280417 16.7933 0.452166C16.3788 0.623915 16.0023 0.875647 15.6851 1.19298L2.14214 14.736C2.04701 14.8276 1.97798 14.9429 1.94214 15.07L0.166138 21.502C0.129969 21.6314 0.128879 21.7682 0.16298 21.8982C0.197081 22.0282 0.265145 22.1469 0.360196 22.2419C0.455248 22.337 0.573866 22.405 0.703892 22.4391C0.833917 22.4732 0.970672 22.4721 1.10014 22.436L7.53014 20.656C7.65727 20.6202 7.77256 20.5511 7.86414 20.456L21.4071 6.91498C22.0463 6.27357 22.4052 5.40498 22.4052 4.49948C22.4052 3.59397 22.0463 2.72538 21.4071 2.08398L20.5161 1.19298ZM3.79714 15.228L14.8841 4.14398L18.4541 7.71798L7.37114 18.802L3.79714 15.228ZM3.08414 16.661L5.93914 19.516L1.98914 20.61L3.08414 16.661ZM20.3341 5.83998L19.5291 6.64498L15.9541 3.07098L16.7591 2.26598C17.1153 1.91088 17.5977 1.71148 18.1006 1.71148C18.6036 1.71148 19.086 1.91088 19.4421 2.26598L20.3331 3.15698C20.6884 3.513 20.8879 3.99534 20.8881 4.49827C20.8883 5.0012 20.6891 5.48369 20.3341 5.83998Z"
        fill="white"
      />
    </svg>
  );

  const docIcon = (
    <svg
      width="14"
      height="18"
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.98 2.72701H12.48V14.942C12.4795 15.3322 12.3243 15.7063 12.0483 15.9823C11.7724 16.2582 11.3983 16.4135 11.008 16.414H1.96704V16.867C1.96731 17.116 2.06633 17.3546 2.24237 17.5307C2.41841 17.7067 2.65709 17.8057 2.90605 17.806H12.9771C13.226 17.8057 13.4647 17.7067 13.6407 17.5307C13.8168 17.3546 13.9158 17.116 13.916 16.867V3.667C13.9163 3.54382 13.8923 3.4218 13.8454 3.30789C13.7985 3.19399 13.7296 3.09044 13.6427 3.00315C13.5558 2.91586 13.4526 2.84655 13.3389 2.79917C13.2251 2.75179 13.1032 2.72727 12.98 2.72701Z"
        fill="#03AEEE"
      />
      <path
        d="M5.973 15.881H11.009C11.258 15.8807 11.4966 15.7817 11.6727 15.6057C11.8487 15.4296 11.9477 15.191 11.948 14.942V1.741C11.9477 1.49204 11.8487 1.25336 11.6727 1.07732C11.4966 0.901282 11.258 0.802267 11.009 0.802002L4.3 0.802002V1.113C4.30349 1.14622 4.30517 1.1796 4.305 1.213V3.785C4.30474 4.1358 4.16526 4.47216 3.91721 4.72021C3.66915 4.96827 3.3328 5.10774 2.982 5.108H0.407997C0.380997 5.108 0.352996 5.108 0.325996 5.108H0V14.942C0.000264707 15.191 0.099275 15.4296 0.275314 15.6057C0.451354 15.7817 0.690038 15.8807 0.938995 15.881H5.973ZM6.163 12.688H2.88C2.76224 12.688 2.64931 12.6412 2.56604 12.558C2.48277 12.4747 2.436 12.3618 2.436 12.244C2.436 12.1262 2.48277 12.0133 2.56604 11.93C2.64931 11.8468 2.76224 11.8 2.88 11.8H6.165C6.28276 11.8 6.39568 11.8468 6.47895 11.93C6.56222 12.0133 6.609 12.1262 6.609 12.244C6.609 12.3618 6.56222 12.4747 6.47895 12.558C6.39568 12.6412 6.28276 12.688 6.165 12.688H6.163ZM9.448 10.422H2.88C2.76224 10.422 2.64931 10.3752 2.56604 10.292C2.48277 10.2087 2.436 10.0958 2.436 9.978C2.436 9.86025 2.48277 9.74731 2.56604 9.66405C2.64931 9.58078 2.76224 9.534 2.88 9.534H9.448C9.56575 9.534 9.67869 9.58078 9.76196 9.66405C9.84522 9.74731 9.892 9.86025 9.892 9.978C9.892 10.0958 9.84522 10.2087 9.76196 10.292C9.67869 10.3752 9.56575 10.422 9.448 10.422ZM2.88 7.129H9.448C9.56575 7.129 9.67869 7.17578 9.76196 7.25905C9.84522 7.34231 9.892 7.45525 9.892 7.573C9.892 7.69076 9.84522 7.80369 9.76196 7.88696C9.67869 7.97022 9.56575 8.017 9.448 8.017H2.88C2.76224 8.017 2.64931 7.97022 2.56604 7.88696C2.48277 7.80369 2.436 7.69076 2.436 7.573C2.436 7.45525 2.48277 7.34231 2.56604 7.25905C2.64931 7.17578 2.76224 7.129 2.88 7.129Z"
        fill="#03AEEE"
      />
      <path
        d="M0.407964 4.57499H2.98797C3.19453 4.57317 3.39213 4.4903 3.5382 4.34423C3.68427 4.19815 3.76714 4.00056 3.76896 3.79399V1.21599C3.76896 1.10991 3.72682 1.00817 3.65181 0.933152C3.57679 0.858137 3.47505 0.815995 3.36896 0.815995C3.3173 0.815915 3.26616 0.826233 3.21857 0.846334C3.17098 0.866434 3.12792 0.895906 3.09196 0.932995L0.126966 3.89999C0.0737348 3.95618 0.0379449 4.0266 0.0239386 4.10272C0.00993227 4.17884 0.0183099 4.25738 0.0480551 4.32883C0.0778003 4.40029 0.127635 4.46157 0.191518 4.50527C0.255402 4.54896 0.330589 4.57318 0.407964 4.57499Z"
        fill="#03AEEE"
      />
    </svg>
  );

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
    <main className="employee-details-main">
      <SectionHeader
        title={`Employee details of ${id}`}
        endAdornment={
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="edit"
          >
            <PillboxButton icon={editIcon} text="Edit" />{" "}
          </Link>
        }
      ></SectionHeader>
      <div className="details-content">
        <DetailField header="Employee Name" data={employee.name} />
        <DetailField
          header="Joining Date"
          data={employee.dateOfJoining && dateToString(employee.dateOfJoining!)}
        />
        <DetailField header="Experience" data={employee.experience} />
        <DetailField header="Role" data={employee.role} />
        <DetailField
          header="Status"
          data={<PillboxText text={employee.status!} color="yellow" />}
        />
        <DetailField
          header="Address"
          data={
            employee.address
              ? addressToString(employee.address)
              : "Some place some time some pincode 121222"
          }
        />
        <DetailField
          header="Employee ID Proof"
          data={<div className="doc-icon">{docIcon}</div>}
        />
        <DetailField header="Employee ID" data={employee.employeeId} />
      </div>
    </main>
  );
};

export default EmployeeDetails;
