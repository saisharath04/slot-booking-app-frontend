import React from "react";
import { Tabs } from "antd";
import styles from "../styles/ViewSlots.module.css";
import BookingHistory from "./BookingHistory";
import SlotBooking from "./SlotBooking";

const { TabPane } = Tabs;

const TabLayout: React.FC = () => {
  return (
    <div className={styles.container}>
      <Tabs defaultActiveKey="1" centered>
        <TabPane
          tab={
            <span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>Slots</span>
          }
          key="1"
        >
          <div className={styles.tabContent}>
            <SlotBooking/>
          </div>
        </TabPane>
        <TabPane
          tab={
            <span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
              Booking History
            </span>
          }
          key="2"
        >
          <div className={styles.tabContent}>
            <BookingHistory/>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TabLayout;
