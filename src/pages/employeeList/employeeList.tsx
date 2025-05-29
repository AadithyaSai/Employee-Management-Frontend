import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  DialogBox,
  PillboxButton,
  SectionHeader,
  SelectInputField,
} from "../../components";
import "./employeeList.css";
import EmployeeListItem from "./components/employeeListitem/employeeListItem";
import type { EmployeeType } from "../../types/types";
import { useEffect, useMemo, useRef, useState } from "react";

const EmployeeList = () => {
  const [allEmployees, setAllEmployees] = useState<EmployeeType[]>([]);
  const deleteDialogRef = useRef<HTMLDialogElement | null>(null);
  const [employeeIdToDelete, setEmployeeIdToDelete] = useState(-1);

  const [searchParams, setSearchParams] = useSearchParams();

  const filterStatus = searchParams.get("status") ?? "all";
  const visibleEmployees = useMemo(() => {
    if (filterStatus === "all") return allEmployees;

    return allEmployees.filter((emp) => emp.status === filterStatus);
  }, [allEmployees, filterStatus]);

  const navigate = useNavigate();

  const createIcon = (
    <svg
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.088 7.816H17.064V9.992H10.088V17H7.91199V9.992H0.935994V7.816H7.91199V0.807999H10.088V7.816Z"
        fill="white"
      />
    </svg>
  );

  const deleteIcon = (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5888 16.653C11.3233 16.6303 12.0198 16.3217 12.53 15.7928C13.0401 15.264 13.3236 14.5568 13.3198 13.822L13.6318 3.461H15.0948C15.2 3.4521 15.2979 3.40405 15.3693 3.32636C15.4407 3.24867 15.4803 3.14701 15.4803 3.0415C15.4803 2.93599 15.4407 2.83433 15.3693 2.75664C15.2979 2.67895 15.2 2.6309 15.0948 2.622H10.9948V1.678C11.0086 1.24944 10.8527 0.832753 10.561 0.518532C10.2692 0.20431 9.86522 0.0179617 9.43682 0H6.47182C6.04288 0.017192 5.63813 0.203206 5.34573 0.517512C5.05334 0.831818 4.89702 1.24894 4.91082 1.678V2.622H0.793818C0.688684 2.6309 0.590725 2.67895 0.519334 2.75664C0.447943 2.83433 0.408325 2.93599 0.408325 3.0415C0.408325 3.14701 0.447943 3.24867 0.519334 3.32636C0.590725 3.40405 0.688684 3.4521 0.793818 3.461H2.25682L2.56882 13.822C2.56511 14.5575 2.84907 15.2652 3.36009 15.7942C3.8711 16.3231 4.56866 16.6313 5.30382 16.653H10.5888ZM5.68882 1.678C5.68205 1.46359 5.76019 1.25517 5.90625 1.09806C6.05231 0.940955 6.25448 0.847853 6.46882 0.839H9.43482C9.64915 0.847853 9.85133 0.940955 9.99739 1.09806C10.1434 1.25517 10.2216 1.46359 10.2148 1.678V2.622H5.69082L5.68882 1.678ZM3.36682 13.778L3.05482 3.438H12.8688L12.5368 13.778C12.5383 14.3037 12.3357 14.8094 11.9718 15.1888C11.6079 15.5681 11.1111 15.7915 10.5858 15.812H5.32082C4.79471 15.795 4.29609 15.573 3.93153 15.1933C3.56696 14.8136 3.36537 14.3064 3.36982 13.78L3.36682 13.778Z"
        fill="#FA4242"
      />
      <path
        d="M7.87582 13.682C8.00925 13.6842 8.1381 13.6334 8.23422 13.5408C8.33035 13.4483 8.38593 13.3214 8.38882 13.188V5.80402C8.38298 5.67175 8.32632 5.54683 8.23066 5.4553C8.135 5.36377 8.00771 5.31268 7.87532 5.31268C7.74292 5.31268 7.61563 5.36377 7.51997 5.4553C7.42431 5.54683 7.36765 5.67175 7.36182 5.80402V13.188C7.36471 13.3216 7.42042 13.4486 7.51676 13.5412C7.6131 13.6338 7.74222 13.6844 7.87582 13.682Z"
        fill="#FA4242"
      />
      <path
        d="M5.59982 13.682C5.73324 13.6842 5.8621 13.6334 5.95822 13.5408C6.05435 13.4483 6.10993 13.3214 6.11282 13.188V5.80402C6.10698 5.67175 6.05032 5.54683 5.95466 5.4553C5.859 5.36377 5.73171 5.31268 5.59932 5.31268C5.46692 5.31268 5.33963 5.36377 5.24397 5.4553C5.1483 5.54683 5.09165 5.67175 5.08582 5.80402V13.188C5.0887 13.3216 5.14442 13.4486 5.24076 13.5412C5.3371 13.6338 5.46621 13.6844 5.59982 13.682Z"
        fill="#FA4242"
      />
      <path
        d="M10.1508 13.682C10.2843 13.6842 10.4131 13.6334 10.5092 13.5408C10.6054 13.4483 10.6609 13.3214 10.6638 13.188V5.80402C10.658 5.67175 10.6013 5.54683 10.5057 5.4553C10.41 5.36377 10.2827 5.31268 10.1503 5.31268C10.0179 5.31268 9.89064 5.36377 9.79498 5.4553C9.69931 5.54683 9.64266 5.67175 9.63683 5.80402V13.188C9.63971 13.3216 9.69543 13.4486 9.79177 13.5412C9.88811 13.6338 10.0172 13.6844 10.1508 13.682Z"
        fill="#FA4242"
      />
    </svg>
  );

  const editIcon = (
    <svg
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.1838 0.748037C15.9466 0.510592 15.665 0.322222 15.3551 0.193699C15.0451 0.0651766 14.7128 -0.000976563 14.3772 -0.000976562C14.0417 -0.000976563 13.7094 0.0651766 13.3994 0.193699C13.0895 0.322222 12.8079 0.510592 12.5708 0.748037L2.44375 10.876C2.37386 10.945 2.32349 11.0313 2.29775 11.126L0.966751 15.934C0.939273 16.0311 0.93819 16.1337 0.963614 16.2314C0.989038 16.329 1.04005 16.4181 1.11138 16.4894C1.18272 16.5607 1.27179 16.6117 1.36942 16.6372C1.46704 16.6626 1.56968 16.6615 1.66675 16.634L6.47475 15.303C6.56951 15.2773 6.65577 15.2269 6.72475 15.157L16.8508 5.02704C17.3288 4.54738 17.5973 3.89776 17.5973 3.22054C17.5973 2.54331 17.3288 1.8937 16.8508 1.41404L16.1838 0.748037ZM3.68375 11.248L11.9718 2.95904L14.6418 5.62804L6.35475 13.917L3.68375 11.248ZM3.15075 12.319L5.28375 14.45L2.33075 15.268L3.15075 12.319ZM16.0507 4.22704L15.4508 4.82704L12.7727 2.15304L13.3728 1.55304C13.6388 1.28716 13.9996 1.13781 14.3758 1.13781C14.7519 1.13781 15.1127 1.28716 15.3788 1.55304L16.0448 2.21904C16.31 2.48507 16.4592 2.84525 16.4597 3.22092C16.4603 3.59659 16.3122 3.95721 16.0478 4.22404L16.0507 4.22704Z"
        fill="#10AAC0"
      />
    </svg>
  );

  useEffect(() => {
    const employees: EmployeeType[] = [];
    for (let i = 0; i < 120; i++) {
      employees.push({
        id: i + 1,
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
      });
    }

    setAllEmployees(employees);
  }, []);

  return (
    <>
      <DialogBox
        title="Are you sure?"
        description="Do you really want to delete employee?"
        ref={deleteDialogRef}
        onResponse={(val) => console.log(val, employeeIdToDelete)}
      ></DialogBox>
      <main className="employee-list-main">
        <SectionHeader
          title={`Employee List`}
          endAdornment={
            <div className="list-end-adornment">
              <SelectInputField
                label="Filter By"
                placeholder={filterStatus}
                name="status"
                values={["All", "Active", "Inactive", "Probation"]}
                variant="inline"
                onChange={(e) => {
                  setSearchParams({ status: e.target.value });
                }}
              />
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/employees/create"
              >
                <PillboxButton icon={createIcon} text="Create employee" />
              </Link>
            </div>
          }
        ></SectionHeader>
        <div className="employee-list-content">
          <div className="list-header">
            <p>Employee Name</p>
            <p>Employee ID</p>
            <p>Joining Date</p>
            <p>Role</p>
            <p>Status</p>
            <p>Experience</p>
            <p>Action</p>
          </div>
          <div className="list-items">
            {visibleEmployees.map((employee) => {
              return (
                <Link
                  key={employee.id}
                  to={`${employee.employeeId}`}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <EmployeeListItem
                    employee={employee}
                    action1={{
                      icon: deleteIcon,
                      actionFn: () => {
                        setEmployeeIdToDelete(employee.id!);
                        deleteDialogRef.current?.showModal();
                      },
                    }}
                    action2={{
                      icon: editIcon,
                      actionFn: () => {
                        navigate(`/employees/${employee.employeeId}/edit`);
                      },
                    }}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default EmployeeList;
