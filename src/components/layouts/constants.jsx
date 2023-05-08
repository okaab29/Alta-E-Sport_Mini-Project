import { Button } from "antd";
import { Link } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";

export const MENU_ITEM = [
  {
    label: <Link to="/home">Home</Link>,
    key: "/home",
  },
  {
    label: <Link to="/forum">Forum</Link>,
    key: "/forum",
  },
  {
    label: (
      <Link to="/">
        <Button
          type="secondary"
          onClick={() => {
            localStorage.removeItem("token");
          }}
          danger
          style={{
            backgroundColor: "#A5402D",
            ':hover': {
                cursor: 'pointer'
              },
          }}
        >
          <LogoutOutlined />
        </Button>
      </Link>
    ),
    key: "3",
  },
];
