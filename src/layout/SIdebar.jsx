import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AiOutlineSetting } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { BsBarChart } from "react-icons/bs";
import { RiNodeTree } from "react-icons/ri";
import { TfiViewListAlt } from "react-icons/tfi";
import { BiPlug } from "react-icons/bi";
const Sidebar = () => {
  return (
    <>
      <section className="siedebar">
        <Nav defaultActiveKey="/home" className="flex-column">
          <NavLink
            to="/setting"
            className={({ isActive, isPending }) =>
              isPending ? "nav-link" : isActive ? "nav-link active" : "nav-link"
            }
          >
            <AiOutlineSetting size={20} className="me-3" />
            setting
          </NavLink>
          <NavLink
            to="/customers"
            className={({ isActive, isPending }) =>
              isPending ? "nav-link" : isActive ? "nav-link active" : "nav-link"
            }
          >
            <BiUserCircle size={22} className="me-3" />
            team
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "nav-link" : isActive ? "nav-link active" : "nav-link"
            }
          >
            <MdDashboard size={20} className="me-3" />
            dashboard
          </NavLink>
          <NavLink
            to="/agents"
            className={({ isActive, isPending }) =>
              isPending ? "nav-link" : isActive ? "nav-link active" : "nav-link"
            }
          >
            <BsBarChart size={20} className="me-3" />
            campaigns
          </NavLink>
          <NavLink
            to="/properties"
            className={({ isActive, isPending }) =>
              isPending ? "nav-link" : isActive ? "nav-link active" : "nav-link"
            }
          >
            <RiNodeTree size={20} className="me-3" />
            flows
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive, isPending }) =>
              isPending ? "nav-link" : isActive ? "nav-link active" : "nav-link"
            }
          >
            <BiPlug size={22} className="me-3" />
            intigrations
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive, isPending }) =>
              isPending ? "nav-link" : isActive ? "nav-link active" : "nav-link"
            }
          >
            <TfiViewListAlt size={20} className="me-3" />
            customers
          </NavLink>
        </Nav>
        <div className="p-5"></div>
      </section>
    </>
  );
};

export default Sidebar;
