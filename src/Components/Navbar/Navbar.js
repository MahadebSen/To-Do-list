import React from "react";
import logo from "../../images/logo 1.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="sticky z-50 top-0 bg-white shadow-md">
      <div className="flex justify-between items-center pl-3 pr-5 py-[3px] max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="flex justify-center items-center">
            <img className="w-[77px]" src={logo} alt="" />
            <p className="text-2xl font-semibold text-[#575e66]">To-Do List</p>
          </div>
        </NavLink>

        <div>
          <ul className="flex flex-row gap-2 justify-center items-center">
            <li className=" text-lg font-medium px-3 py-[8px] rounded-md hover:bg-[rgb(159,232,132)]">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className=" text-lg font-medium px-3 py-[8px] rounded-md hover:bg-[rgb(159,232,132)]">
              <NavLink to="/completedtasks">Completed Tasks</NavLink>
            </li>
            <li className=" text-lg font-medium px-3 py-[8px] rounded-md hover:bg-[rgb(159,232,132)]">
              <NavLink to="/todo">To-Do</NavLink>
            </li>
            <li className=" text-lg font-medium px-3 py-[8px] rounded-md hover:bg-[rgb(159,232,132)]">
              <NavLink to="/calendar">Calendar</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
