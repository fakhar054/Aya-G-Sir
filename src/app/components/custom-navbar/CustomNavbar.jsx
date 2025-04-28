"use client";
import React from "react";
import "./custom_navbar.css";
import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import Dropdown from "react-bootstrap/Dropdown";

export default function CustomNavbar() {
  return (
    <section className="navbar">
      <div className="container">
        <nav className="nav">
          <div className="logo_div">
            <img src="/assets/logo_header.png" alt="" className="logo" />
            <p id="head">AYA SIR G!</p>
            <p id="descri">YOUR TRUSTED EVERYWHERE</p>
          </div>
          <div className="nav_items d-flex ">
            <ul className="list-unstyled list">
              <li>
                <a href="#" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Register Yourself</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {
                  <span>
                    <CiGlobe className="web_globe_icon" /> EN
                    <IoIosArrowDown className="drop_arrow" />
                  </span>
                }
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="info_div d-flex align-items-center gap-2">
              <IoIosHeartEmpty className="icon_hearth ml_2" />
              <IoPersonCircle className="icon_person" />
              <div className="name_div">
                <p>Name</p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
