import { useState } from "react";
import Logo from "../images/logo.svg";
import { BsPeopleFill, BsFillPencilFill, BsGraphUpArrow } from "react-icons/bs";
import {
  FaWarehouse,
  FaClipboardList,
  FaShoppingCart,
  FaWrench,
  FaWindowClose,
} from "react-icons/fa";
import { VscTable } from "react-icons/vsc";
import { AiOutlineDatabase } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Human Resources", shortTitle: "HR", group: true },
    { title: "Manage employe", icon: BsPeopleFill },
    { title: "List of data", icon: AiOutlineDatabase },
    { title: "Reasume", icon: VscTable },
    { title: "Logistic", shortTitle: "LG", group: true, gap: true },
    { title: "Manage warehouse", icon: FaWarehouse },
    { title: "Items list", icon: FaClipboardList },
    { title: "Order items", icon: FaShoppingCart },
    { title: "Maintanance", shortTitle: "MT", group: true, gap: true },
    { title: "New request", icon: FaWrench },
    { title: "Open requests", icon: BsFillPencilFill },
    { title: "Close request", icon: FaWindowClose },
    { title: "KPI", icon: BsGraphUpArrow },
    { title: "Settings", shortTitle: "ST", group: true, gap: true },
    { title: "App settings", icon: FiSettings },
  ];

  return (
    <div
      className={`min-h-screen ${
        open ? "w-72" : "w-20 "
      } bg-indigo-950 px-4 relative duration-300`}
    >
      <img
        src="./src/images/control.png"
        className={`absolute cursor-pointer -right-3 top-12 w-8 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex pt-6 gap-x-4 items-center">
        <img
          src={Logo}
          width="50"
          height="50"
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Pro Manage 360
        </h1>
      </div>
      <ul className="pt-6  bg-indigo-950">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2  ${
              Menu.group ? "" : "hover:bg-indigo-800 cursor-pointer"
            } text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === 0 && "bg-light-white"
            } `}
          >
            {Menu.group ? (
              <>
                <div className={`${!open && "hidden"} font-black text-lg`}>
                  {Menu.title}
                </div>
                <div className={`${open && "hidden"} font-black text-lg`}>
                  {Menu.shortTitle}
                </div>
              </>
            ) : (
              <>
                <Menu.icon />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
