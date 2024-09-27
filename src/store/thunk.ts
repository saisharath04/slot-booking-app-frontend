import { createAsyncThunk } from "@reduxjs/toolkit";
import { notification } from "antd";
// import axios from "axios";
import { FACILITIES_LIST_LIST_LIST_THUNK, LOCATION_LIST_LIST_LIST_THUNK } from "./actions";
import {
  FacilitiesListPayloadType,
  FacilitiesListResponseType,
  LocationListPayloadType,
  LocationListResponseType,
} from "./types";
import axiosInstance from "../axiosInstance";

const route = "http://localhost:25088/api"; //locations/:id/facilities

export const locationListAsyncThunk = createAsyncThunk(
  LOCATION_LIST_LIST_LIST_THUNK,
  async (payload: LocationListPayloadType) => {
    try {
      const response = await axiosInstance.get(
        `${route}/centers`,
        {
          params: payload,
        }
      );
      const typedResponse = response.data as LocationListResponseType;
      return typedResponse;
    } catch (e) {
      const error = e as Error;
      notification.error({
        message: error.message,
        placement: "top",
      });
    }
  }
);

export const facilitiesListAsyncThunk = createAsyncThunk(
  FACILITIES_LIST_LIST_LIST_THUNK,
  async (payload: FacilitiesListPayloadType) => {
    try {
      const response = await axiosInstance.get(
        `${route}/centers/${payload.id}/facilities`,
        {
          params: payload,
        }
      );
      const typedResponse = response.data as FacilitiesListResponseType;
      return typedResponse;
    } catch (e) {
      const error = e as Error;
      notification.error({
        message: error.message,
        placement: "top",
      });
    }
  }
);
