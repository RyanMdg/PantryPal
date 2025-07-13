"use client";

import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineInventory2 } from "react-icons/md";
import { GiCampCookingPot } from "react-icons/gi";
import { BsCashStack } from "react-icons/bs";
import { MdOutlineManageAccounts } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import NavData from "../../data/NavData";

const Nav = () => {
  const location = useLocation();
  return (
    <>
      <nav className="fixed bottom-0 left-0 w-full shadow-lg drop-shadow-2xl rounded-t-[2rem] bg-white z-50">
        <ul className="flex w-full justify-around">
          {NavData.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.link}>
                  <item.icon
                    className={`my-4 text-[1.5rem] transition-all duration-200 ${
                      location.pathname === item.link
                        ? "text-[#3FC676] scale-110"
                        : "text-[#9c9c9e] scale-100"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
