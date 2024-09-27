import React, { useMemo, useState } from "react";
import Filters from "./Filters";
import { FiltersParamsType } from "../store/types";
import ViewBookingDetailsCard from "./ViewBookingDetailsCard";
import { FILTERS_INITIAL_VALUE } from "../constants";
import { Col, Modal, Row, Typography } from "antd";

const BookingHistory = () => {
  const [filters, setFilters] = useState<FiltersParamsType>(
    FILTERS_INITIAL_VALUE
  );

  const [editingDetails, setEditingDetails] = useState({ name: "", phone: "" });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showData: boolean = useMemo(
    () =>
      filters.date !== "" &&
      filters.location_id !== "" &&
      filters.sport !== undefined,
    [filters]
  );

  const handleOk = () => {
    console.log("Updated Details:", editingDetails);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Filters filters={filters} setFilters={setFilters} />
      {showData && (
        <ViewBookingDetailsCard
          setIsModalVisible={setIsModalVisible}
          editingDetails={editingDetails}
          setEditingDetails={setEditingDetails}
        />
      )}
      <Modal
        title="Edit Booking Details"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Row gutter={16}>
          <Col span={8}>Name: </Col>
          <Col span={16}>
            <input
              value={editingDetails.name}
              onChange={(e) =>
                setEditingDetails({
                  ...editingDetails,
                  name: e.target.value,
                })
              }
            />
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: 16 }}>
          <Col span={8}>Phone Number: </Col>
          <Col span={16}>
            <input
              value={editingDetails.phone}
              onChange={(e) =>
                setEditingDetails({
                  ...editingDetails,
                  phone: e.target.value,
                })
              }
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default BookingHistory;
