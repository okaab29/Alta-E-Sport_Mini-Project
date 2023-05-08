import { Layout } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MENU_ITEM } from "../constants";
import { LogoOnly } from "../../../assets";
import './headerComponent.css'

const HeaderComponent = () => {
  const { Header } = Layout;
  const path = window.location.pathname;
  const [current, setCurrent] = useState(path);
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div className="navbar-header">
    <div className="navbar-logo">
      <Link>
        <img src={LogoOnly} alt="Logo Alta" />
      </Link>
    </div>
    <ul className="navbar-links">
      {MENU_ITEM.map((item) => (
        <li key={item.key}>
          {item.label}
        </li>
      ))}
    </ul>
  </div>
  );
};

export default HeaderComponent;
