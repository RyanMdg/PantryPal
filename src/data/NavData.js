// Data/data.js
import {
  MdOutlineDashboard,
  MdOutlineInventory2,
  MdOutlineManageAccounts,
} from "react-icons/md";
import { GiCampCookingPot } from "react-icons/gi";
import { BsCashStack } from "react-icons/bs";

const NavData = [
  { icon: MdOutlineDashboard, link: "/dashboard", name: "/dashboard" },
  { icon: MdOutlineInventory2, link: "/Inventory", name: "/Inventory" },
  { icon: GiCampCookingPot, link: "/CookWithMe", name: "/CookWithMe" },
  { icon: BsCashStack, link: "/BudgetTracking", name: "/BudgetTracking" },
  { icon: MdOutlineManageAccounts, link: "/Account", name: "/Account" },
];

export default NavData;
