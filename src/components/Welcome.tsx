import React, { useContext } from "react";
import classNames from "classnames/bind";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import styles from '../styles/Welcome.module.css'
import { AuthContext } from "../Auth/AuthContext";

const cx = classNames.bind(styles);

const Welcome = () => {
  const navigation = useNavigate();

  // TypeScript expects userName and email to be of certain types. These should match the types defined in the UserContext.
  const { user } = useContext(AuthContext);

  const buttonHandler = () => {
    if (user) {
      navigation("/home");
    } else {
      navigation("/register");
    }
  };

  return (
    <div className={cx("background_container")}>
      <div className={cx("content")}>
        <h1>Welcome to Ahalya Sports Arena</h1>
        <Button type="primary" onClick={buttonHandler} className={cx("button")}>
          BOOK NOW !!!
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
