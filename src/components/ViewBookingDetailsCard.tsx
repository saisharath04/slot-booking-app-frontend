import { Row, Col, Card, Button, Modal, Tag } from "antd";
import React, { useState } from "react";
import moment from "moment";
import { bookedData } from "../store/mockData";

type EditingDetailsType = {
  name: string;
  phone: string;
};

const ViewBookingDetailsCard = ({
  setIsModalVisible,
  editingDetails,
  setEditingDetails,
}: {
  setIsModalVisible: (val: boolean) => void;
  editingDetails: EditingDetailsType;
  setEditingDetails: (val: EditingDetailsType) => void;
}) => {
  const showEditModal = (datum: { id?: number; name: any; phone_number: any; date?: string; location_id?: number; sport?: string; start_time?: string; end_time?: string; is_booked?: boolean; }) => {
    setEditingDetails({ name: datum.name, phone: datum.phone_number });
    setIsModalVisible(true);
  };

  const confirmCancelBooking = (datum: {
    id: number;
    name: string;
    phone_number: string;
    date: string;
    location_id: number;
    sport: string;
    start_time: string;
    end_time: string;
    is_booked: boolean;
  }) => {
    Modal.confirm({
      title: "Are you sure you want to cancel this booking?",
      onOk() {
        console.log("Booking canceled:", datum);
        // Add your cancel booking logic here
      },
    });
  };

  return (
    <>
      {bookedData.data.map((datum) => {
        const isPast = moment(`${datum.date} ${datum.end_time}`).isBefore(
          moment()
        );

        return (
          <>
            <Card
              style={{
                margin: 48,
                backgroundColor: "#eee",
              }}
              title={`Time: ${datum.start_time} to ${datum.end_time}`}
              bordered={false}
              extra={
                <>
                  <Button
                    type="primary"
                    danger
                    disabled={isPast}
                    onClick={() => confirmCancelBooking(datum)}
                    style={{ marginRight: 8 }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="default"
                    disabled={isPast}
                    onClick={() => showEditModal(datum)}
                  >
                    Edit
                  </Button>
                </>
              }
            >
              <Row gutter={16}>
                <Col span={8}>Name: </Col>
                <Col span={16}>{datum.name}</Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}>Phone Number: </Col>
                <Col span={16}>{datum.phone_number}</Col>
              </Row>
            </Card>
          </>
        );
      })}
    </>
  );
};

export default ViewBookingDetailsCard;
