import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MENU_ITEM } from "../constants";

const HeaderComponent = () => {
  const { Header } = Layout;
  const path = window.location.pathname;
  const [current, setCurrent] = useState(path);
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
      }}
    >
      <Link to="/home">
        <div
          style={{
            float: "left",
            width: 120,
            height: 31,
            margin: "16px 24px 16px 0",
            background: "rgba(255, 255, 255, 0.2)",
          }}
          onClick={() => setCurrent("")}
        />
      </Link>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        onClick={onClick}
        selectedKeys={[current]}
        items={MENU_ITEM}
        disabledOverflow
      />
    </Header>
  );
};

export default HeaderComponent;
