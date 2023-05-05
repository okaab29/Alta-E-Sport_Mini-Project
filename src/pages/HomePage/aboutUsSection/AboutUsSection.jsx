import { Col, Row } from "antd";
import React from "react";
import Logo from "../../../assets/LogoVertical.svg";
import "./aboutUsSection.css";

const AboutUsSection = () => {
  return (
    <div
      style={{
        background: "#F37423",
        padding: "0 80px",
      }}
    >
      <Row className="container">
        <Col span={7} className="leftSide">
          <img src={Logo} alt="Logo Alta" className="logoStyle" />
        </Col>
        <Col span={17} className="rightSide">
          <h1 className="titleAbout">About Us</h1>
          <p className="textAbout">
            Alta E-Sport is a competitive gaming team based in Indonesia. The
            team consists of passionate and talented gamers who strive to excel
            in the world of esports. With a focus on strategy, teamwork, and
            individual skill, Alta E-Sport competes in various esports
            tournaments and leagues, including MOBA and FPS games.
          </p>
          <p className="textAbout">
            The team is known for its dedication to practice and improvement, as
            well as its commitment to sportsmanship and fair play. Members of
            Alta E-Sport are not only skilled gamers, but also positive role
            models in the gaming community. They regularly engage with fans and
            promote the growth and development of esports in Indonesia.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUsSection;
