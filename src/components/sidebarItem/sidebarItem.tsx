import { Link } from "react-router-dom";
import "./sidebarItem.css";

type SidebarItemType = {
  name: string;
  icon: string;
};

const SidebarItem = ({ name, icon }: SidebarItemType) => {
  return (
    <Link className="nav-item" to="/employees">
      <img className="nav-item-icon" src={icon} alt="employee list icon" />
      <p>{name}</p>
    </Link>
  );
};

export default SidebarItem;
