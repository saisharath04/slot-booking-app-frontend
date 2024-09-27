import { message as Toast } from "antd";
import axios from "axios";
import {
  ErrorMessageType,
  LocationListResponseType,
  LoginApiPayloadType,
  LoginApiResponseType,
  RegisterApiPayloadType,
  RegisterApiResponseType,
} from "./types";

const route = "http://localhost:25088/api";

export const loginApiHandler: (
  payload: LoginApiPayloadType
) => Promise<LoginApiResponseType | undefined> = async (
  payload: LoginApiPayloadType
) => {
  try {
    const { email, password } = payload;
    const response = await axios.post(
      `${route}/auth/login`,
      // `${process.env.REACT_APP_BACKEND_URL}/api/auth/login`,
      {
        email,
        password,
      }
    );

    const typedResponse = response.data as LoginApiResponseType;
    const { success, message } = typedResponse;

    if (success) {
      Toast.success(message);
      console.log("typedResponse", typedResponse);
      return typedResponse;
    }
  } catch (e) {
    const error = e as ErrorMessageType;
    Toast.error(error.response.data.message);
  }
};

export const registerApiHandler: (
  payload: RegisterApiPayloadType
) => Promise<RegisterApiResponseType> = async (
  payload: RegisterApiPayloadType
) => {
  try {
    const response = await axios.post(`${route}/auth/register`, payload);

    const typedResponse = response.data as RegisterApiResponseType;
    const { success, message } = typedResponse;

    if (success) {
      Toast.success(message);
    }
    return typedResponse;
  } catch (e) {
    const error = e as ErrorMessageType;
    Toast.error(error.response.data.message);
    return {
      success: false,
      message: "Failed to Register",
    };
  }
};

export const locationListInitialResponse: LocationListResponseType = {
  success: false,
  total_count: 0,
  data: [],
};

export const locationListApiHandler: () => Promise<LocationListResponseType> =
  async () => {
    try {
      const response = await axios.post(`${route}/location/list`);
      const typedResponse = response.data as LocationListResponseType;
      return typedResponse?.success
        ? typedResponse
        : locationListInitialResponse;
    } catch (e) {
      const error = e as ErrorMessageType;
      Toast.error(error.response.data.message);
      return locationListInitialResponse;
    }
  };
