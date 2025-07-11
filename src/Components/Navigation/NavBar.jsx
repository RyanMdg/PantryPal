"use client";

import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineInventory2 } from "react-icons/md";
import { GiCampCookingPot } from "react-icons/gi";
import { BsCashStack } from "react-icons/bs";
import { MdOutlineManageAccounts } from "react-icons/md";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav className="fixed bottom-0 left-0 w-full shadow-lg drop-shadow-2xl rounded-t-[2rem] bg-white z-50">
        <ul className="flex w-full justify-around">
          <li>
            <Link to="/dashboard">
              <MdOutlineDashboard
              // className={`my-4 text-[1.5rem] transition-all duration-200 ${
              //   isActive("/Home")
              //     ? "text-[#3FC676] scale-110"
              //     : "text-[#9c9c9e] scale-100"
              // }`}
              />
            </Link>
          </li>
          <li>
            <Link to="/Stocks">
              <MdOutlineInventory2
              // className={`my-4 text-[1.5rem] transition-all duration-200 ${
              //   isActive("/stocks")
              //     ? "text-[#3FC676] scale-110"
              //     : "text-[#9c9c9e] scale-100"
              // }`}
              />
            </Link>
          </li>
          <li>
            <Link to="/CookWithMe">
              <GiCampCookingPot
              // className={`my-4 text-[1.5rem] transition-all duration-200 ${
              //   isActive("/cookwithme")
              //     ? "text-[#3FC676] scale-110"
              //     : "text-[#9c9c9e] scale-100"
              // }`}
              />
            </Link>
          </li>
          <li>
            <Link to="/BudgetTracking">
              <BsCashStack
              // className={`my-4 text-[1.5rem] transition-all duration-200 ${
              //   isActive("/BudgetTracking")
              //     ? "text-[#3FC676] scale-110"
              //     : "text-[#9c9c9e] scale-100"
              // }`}
              />
            </Link>
          </li>
          <li>
            <Link to="/account">
              <MdOutlineManageAccounts
              // className={`my-4 text-[1.5rem] transition-all duration-200 ${
              //   isActive("/account")
              //     ? "text-[#3FC676] scale-110"
              //     : "text-[#9c9c9e] scale-100"
              // }`}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
