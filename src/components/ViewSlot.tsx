import { Col, Row } from "antd";
import { data } from "../store/mockData";
import styles from "../styles/SlotBooking.module.css";
import { SelectedSlotsTypes } from "../store/types";

const ViewSlot = ({
  selectedSlots,
  setSelectedSlots,
}: {
  selectedSlots: SelectedSlotsTypes[];
  setSelectedSlots: (val: SelectedSlotsTypes[]) => void;
}) => {
  const handleSlotClick = (slot: SelectedSlotsTypes) => {
    if (!slot.is_booked) {
      // Toggle slot selection
      if (selectedSlots.includes(slot)) {
        setSelectedSlots(selectedSlots.filter((s) => s !== slot));
      } else {
        setSelectedSlots([...selectedSlots, slot]);
      }
    }
  };

  return (
    <div className={styles.container}>
      <Row gutter={[24, 24]} justify="center" align="middle">
        {data.map((slot, index) => (
          <Col key={index} span={4}>
            <div
              className={styles.dataContainer}
              style={{
                backgroundColor: slot.is_booked
                  ? "green"
                  : selectedSlots.includes(slot)
                  ? "lightblue"
                  : "white",
                color: slot.is_booked ? "white" : "black",
                borderColor: slot.is_booked ? "green" : "black",
                borderWidth: "1px",
                borderStyle: "solid",
                padding: "10px",
                fontSize: 24,
                cursor: slot.is_booked ? "not-allowed" : "pointer",
              }}
              onClick={() => handleSlotClick(slot)}
            >
              {slot.start_time}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ViewSlot;
