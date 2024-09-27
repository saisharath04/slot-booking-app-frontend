import { SelectedSlotsTypes } from "./types";

export const usersList = [
  {
    name: "Sai Sharath",
    email: "sharath@gmail.com",
    password: "1234",
  },
  {
    name: "Sai Thilak",
    email: "thilak@gmail.com",
    password: "1234",
  },
  {
    name: "Raji",
    email: "raji@gmail.com",
    password: "1234",
  },
  {
    name: "Ramana",
    email: "ramana@gmail.com",
    password: "1234",
  },
];

export const locationData = {
  data: [
    {
      name: "Marathahalli, Bangalore",
      id: "1",
    },
    {
      name: "Koramangala, Bangalore",
      id: "2",
    },
  ],
};

export const sportsData = {
  data: [
    {
      name: "Cricket",
      value: "Cricket",
    },
    {
      name: "Badminton",
      value: "Badminton",
    },
    {
      name: "FootBall",
      value: "FootBall",
    },
    {
      name: "Tennis",
      value: "Tennis",
    },
  ],
};

export const courtListData = {
  data: [
    {
      name: "Court 1",
      sport: "Cricket",
      court_id: 1,
    },
  ],
};

export const data: SelectedSlotsTypes[] = [
  { start_time: "12:00 AM", end_time: "1:00 AM", is_booked: false },
  { start_time: "1:00 AM", end_time: "2:00 AM", is_booked: true },
  { start_time: "2:00 AM", end_time: "3:00 AM", is_booked: false },
  { start_time: "3:00 AM", end_time: "4:00 AM", is_booked: true },
  { start_time: "4:00 AM", end_time: "5:00 AM", is_booked: false },
  { start_time: "5:00 AM", end_time: "6:00 AM", is_booked: false },
  { start_time: "6:00 AM", end_time: "7:00 AM", is_booked: true },
  { start_time: "7:00 AM", end_time: "8:00 AM", is_booked: true },
  { start_time: "8:00 AM", end_time: "9:00 AM", is_booked: false },
  { start_time: "9:00 AM", end_time: "10:00 AM", is_booked: true },
  { start_time: "10:00 AM", end_time: "11:00 AM", is_booked: false },
  { start_time: "11:00 AM", end_time: "12:00 PM", is_booked: true },
  { start_time: "12:00 PM", end_time: "1:00 PM", is_booked: false },
  { start_time: "1:00 PM", end_time: "2:00 PM", is_booked: true },
  { start_time: "2:00 PM", end_time: "3:00 PM", is_booked: false },
  { start_time: "3:00 PM", end_time: "4:00 PM", is_booked: false },
  { start_time: "4:00 PM", end_time: "5:00 PM", is_booked: true },
  { start_time: "5:00 PM", end_time: "6:00 PM", is_booked: true },
  { start_time: "6:00 PM", end_time: "7:00 PM", is_booked: false },
  { start_time: "7:00 PM", end_time: "8:00 PM", is_booked: true },
  { start_time: "8:00 PM", end_time: "9:00 PM", is_booked: false },
  { start_time: "9:00 PM", end_time: "10:00 PM", is_booked: true },
  { start_time: "10:00 PM", end_time: "11:00 PM", is_booked: false },
  { start_time: "11:00 PM", end_time: "12:00 AM", is_booked: true },
];

export const bookedData = {
  data: Array.from({ length: 24 }, (v, i) => {
    const startHour = i % 12 || 12; // To handle 12-hour format
    const endHour = (i + 1) % 12 || 12;
    const periodStart = i < 12 ? "AM" : "PM";
    const periodEnd = i + 1 < 12 ? "AM" : "PM";

    return {
      id: i + 1,
      name: `User ${i + 1}`,
      phone_number: `95506169${(i + 1).toString().padStart(2, "0")}`,
      date: "2024-09-27",
      location_id: 12,
      sport: "Cricket",
      start_time: `${startHour}:00 ${periodStart}`,
      end_time: `${endHour}:00 ${periodEnd}`,
      is_booked: true,
    };
  }),
};
