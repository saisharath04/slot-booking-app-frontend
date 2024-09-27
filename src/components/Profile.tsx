import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { Card, Row, Col } from "antd";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <Card
      style={{
        margin: 48,
        backgroundColor: "#eee",
      }}
      title={"Profile"}
    >
      <Row gutter={16}>
        <Col span={8}>ID: </Col>
        <Col span={16}>{user?.id}</Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>Email: </Col>
        <Col span={16}>{user?.email}</Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>Name: </Col>
        <Col span={16}>{user?.name}</Col>
      </Row>
    </Card>
  );
};

export default Profile;
