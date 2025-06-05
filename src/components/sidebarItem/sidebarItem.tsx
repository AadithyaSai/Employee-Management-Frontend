import { Link } from "react-router-dom";
import "./sidebarItem.css";

type SidebarItemType = {
  name: string;
  icon: string;
  href: string;
};

const SidebarItem = ({ name, icon, href }: SidebarItemType) => {
  return (
    <Link className="nav-item" to={href}>
      <img className="nav-item-icon" src={icon} alt="employee list icon" />
      <p>{name}</p>
    </Link>
  );
};

export default SidebarItem;
