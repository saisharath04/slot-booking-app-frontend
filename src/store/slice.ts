import { createSlice } from "@reduxjs/toolkit";
import { FacilitiesListResponseType, LocationListResponseType } from "./types";
import { FACILITIES_LIST_LIST_SLICE, LOCATION_LIST_LIST_SLICE } from "./actions";
import { locationListAsyncThunk, facilitiesListAsyncThunk } from "./thunk";

const locationListInitialResponse: LocationListResponseType = {
  success: false,
  total_count: 0,
  data: [],
};

const locationListSlice = createSlice({
  name: LOCATION_LIST_LIST_SLICE,
  initialState: {
    isLoading: false,
    isError: false,
    data: locationListInitialResponse,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(locationListAsyncThunk.pending, (state) => {
      state.data = locationListInitialResponse;
      state.isLoading = true;
      state.isError = false;
    });

    builder.addCase(locationListAsyncThunk.fulfilled, (state, action) => {
      state.data = {
        ...state.data,
        ...action?.payload,
      };
      state.isLoading = false;
      state.isError = false;
    });

    builder.addCase(locationListAsyncThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.data = locationListInitialResponse;
      console.error(action.payload);
    });
  },
});

const facilitiesListInitialResponse: FacilitiesListResponseType = {
  success: false,
  total_count: 0,
  data: [],
};

const facilitiesListSlice = createSlice({
  name: FACILITIES_LIST_LIST_SLICE,
  initialState: {
    isLoading: false,
    isError: false,
    data: facilitiesListInitialResponse,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(facilitiesListAsyncThunk.pending, (state) => {
      state.data = facilitiesListInitialResponse;
      state.isLoading = true;
      state.isError = false;
    });

    builder.addCase(facilitiesListAsyncThunk.fulfilled, (state, action) => {
      state.data = {
        ...state.data,
        ...action?.payload,
      };
      state.isLoading = false;
      state.isError = false;
    });

    builder.addCase(facilitiesListAsyncThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.data = facilitiesListInitialResponse;
      console.error(action.payload);
    });
  },
});

export const locationListReducer = locationListSlice.reducer;
export const facilitiesListReducer = facilitiesListSlice.reducer;
