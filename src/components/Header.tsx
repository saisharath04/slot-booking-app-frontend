import React, { useContext } from "react";
import classNames from "classnames/bind";
import styles from "../styles/Header.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, Dropdown, Button, Avatar, Typography } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { AuthContext } from "../Auth/AuthContext";

const { Text } = Typography;
const cx = classNames.bind(styles);

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useContext(AuthContext);

  const jwt = localStorage.getItem("jwtToken");
  const userJson = localStorage.getItem("userDetails");
  let user;
  if (userJson) {
    user = JSON.parse(localStorage.getItem("userDetails") ?? "");
  }
  const isLogin = jwt !== null;
  const getButtonText = jwt ? user?.name : "Sign in / Sign up";

  const handleMenuClick = (e: { key: string }) => {
    if (e.key === "profile") {
      navigate("/profile");
    } else if (e.key === "logout") {
      navigate("/register");
      logout();
    }
  };

  const handleButtonClick = () => {
    if (!isLogin) {
      navigate("/register"); // Navigate to the registration page if not logged in
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  const shouldShowProfile =
    location.pathname !== "/register" && location.pathname !== "/";

  return (
    <header className={cx("container")}>
      <div className={cx("header_container")}>
        <h1 className={cx("title")}>Ahalya Sports</h1>
      </div>
      {shouldShowProfile && (
        <div className={cx("profile")}>
          {isLogin ? (
            <Dropdown overlay={menu} trigger={["hover"]}>
              <Button type="text" style={{ padding: 0 }}>
                <Avatar icon={<UserOutlined />} />
                <>
                  <Text className={cx("user_name")}>{getButtonText}</Text>
                  <DownOutlined />
                </>
              </Button>
            </Dropdown>
          ) : (
            <Button
              type="text"
              style={{ padding: 0 }}
              onClick={handleButtonClick}
            >
              <Avatar icon={<UserOutlined />} />
              <Text className={cx("user_name")}>{getButtonText}</Text>
            </Button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
