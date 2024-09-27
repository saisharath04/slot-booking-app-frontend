import React, { useMemo, useState } from "react";
import Filters from "./Filters";
import { FiltersParamsType, SelectedSlotsTypes } from "../store/types";
import { Button, Modal, Input, message, Typography } from "antd";
import ViewSlot from "./ViewSlot";
import styles from "../styles/SlotBooking.module.css";

const SlotBooking = () => {
  const [selectedSlots, setSelectedSlots] = useState<SelectedSlotsTypes[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(""); // Replace email with phone
  const [filters, setFilters] = useState<FiltersParamsType>({
    date: "",
    location_id: "",
    sport: undefined,
  });

  const applyHandler = (values: FiltersParamsType) => {
    console.log("Filters applied:", values);
    setFilters(values);
  };

  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleBookClick = () => {
    if (selectedSlots.length === 0) {
      message.error("Please select at least one slot.");
      return;
    }
    setIsModalVisible(true); // Open confirmation modal
  };

  const handleModalOk = () => {
    if (!name || !phone) {
      message.error("Please fill in your name and phone number.");
      return;
    }

    if (!validatePhoneNumber(phone)) {
      message.error("Please enter a valid 10-digit phone number.");
      return;
    }

    // Send booking data to backend
    const bookingData = {
      name,
      phone, // Use phone instead of email
      selectedSlots,
      filters,
    };

    console.log("Booking Data:", bookingData);

    // Example API call (replace with actual API call)
    // axios.post('/api/book-slot', bookingData).then(response => {
    //   message.success("Booking successful!");
    // }).catch(error => {
    //   message.error("Booking failed.");
    // });

    // Reset state
    setSelectedSlots([]);
    setName("");
    setPhone(""); // Clear phone input
    setIsModalVisible(false);
    message.success("Booking data submitted!");
  };

  const handleModalCancel = () => {
    setIsModalVisible(false); // Close modal
  };

  const isEmptyFilters = useMemo(() => {
    return (
      filters.date === "" ||
      filters.location_id === "" ||
      filters.sport === undefined
    );
  }, [filters]);

  console.log("filters", filters);

  return (
    <div className={styles.container}>
      <Filters filters={filters} setFilters={setFilters} isSlotBooking={true}/>
      {!isEmptyFilters ? (
        <>
          <ViewSlot
            selectedSlots={selectedSlots}
            setSelectedSlots={setSelectedSlots}
          />

          <Button
            type="primary"
            onClick={handleBookClick}
            style={{ marginTop: "20px" }}
          >
            Book Slot
          </Button>
        </>
      ) : (
        <Typography.Title>Select all filters to get data</Typography.Title>
      )}
      <Modal
        title="Confirm Booking"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        {/* Show selected date and slots */}
        <div style={{ marginBottom: "10px" }}>
          <strong>Selected Date:</strong> {filters.date || "Not selected"}{" "}
          <br />
          <strong>Selected Slots:</strong>
          {selectedSlots.length > 0
            ? selectedSlots.map((slot: any, index) => (
                <span key={index}>
                  {slot.start_time}
                  {index < selectedSlots.length - 1 ? ", " : ""}
                </span>
              ))
            : "None"}
        </div>

        <Input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginBottom: "10px" }}
        />
        <Input
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          maxLength={10}
        />
      </Modal>
    </div>
  );
};

export default SlotBooking;
