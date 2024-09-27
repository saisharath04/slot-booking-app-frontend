import React, { useEffect, useState } from "react";
import { Form, Select, DatePicker, Button, Divider, message, Spin } from "antd";
import { useForm } from "antd/lib/form/Form";
import { FiltersParamsType } from "../store/types";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  facilitiesListAsyncThunk,
  locationListAsyncThunk,
} from "../store/thunk";
import { RootState, AppDispatch } from "../store/store"; // Import RootState and AppDispatch types
import styles from "../styles/Filters.module.css";

const { Option } = Select;

const Filters = ({
  filters,
  setFilters,
  isSlotBooking,
}: {
  filters: FiltersParamsType;
  setFilters: (val: FiltersParamsType) => void;
  isSlotBooking?: boolean;
}) => {
  const [filtersForm] = useForm<FiltersParamsType>();
  const dispatch = useDispatch<AppDispatch>(); // Properly type useDispatch
  const [showSportFilter, setShowSportFilter] = useState<boolean>(false);

  useEffect(() => {
    dispatch(locationListAsyncThunk({})); // Dispatching the location list thunk
  }, [dispatch]);

  const {
    isLoadingForLocationList,
    isLoadingForFacilitiesList,
    locationList,
    facilitiesList,
  } = useSelector((state: RootState) => {
    const { locationListReducer, facilitiesListReducer } = state;
    return {
      isLoadingForLocationList: locationListReducer?.isLoading,
      isLoadingForFacilitiesList: facilitiesListReducer?.isLoading,
      locationList: locationListReducer?.data?.data,
      facilitiesList: facilitiesListReducer?.data?.data,
    };
  });

  const handleApply = (values: FiltersParamsType) => {
    if (
      values.date === null ||
      values.location_id === undefined ||
      values.sport === undefined
    ) {
      message.error("Please select all filters");
      return
    }
    setFilters({
      ...filters,
      location_id: values.location_id,
      sport: values.sport,
      date: values.date
    });
  };

  // const onChange = (_date: any, dateString: any) => {
  //   setFilters({
  //     ...filters,
  //     date: dateString,
  //   });
  // };

  const locationChangeHandler = (value?: number) => {
    filtersForm.setFieldsValue({ sport: undefined });
    if (value) {
      dispatch(facilitiesListAsyncThunk({ id: value }));
      setShowSportFilter(true);
    } else {
      setShowSportFilter(false);
    }
  };

  const isLoading = isLoadingForLocationList || isLoadingForFacilitiesList;

  return (
    <>
      {isLoading && <Spin />}
      <Form
        className={styles.form_container}
        form={filtersForm}
        layout="vertical"
        onFinish={handleApply}
      >
        <Form.Item
          className={styles.filter}
          label="Location"
          name="location_id"
        >
          <Select
            placeholder="Select a location"
            allowClear
            onChange={locationChangeHandler}
          >
            {locationList?.map((location: any) => (
              <Option key={location.id} value={location.id}>
                {location.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Date" name="date">
          <DatePicker
            allowClear
            className={styles.filter}
            // onChange={onChange}
            disabledDate={
              isSlotBooking
                ? (current) => current && current < moment().startOf("day")
                : undefined
            }
          />
        </Form.Item>

        {showSportFilter && (
          <Form.Item className={styles.filter} label="Sport" name="sport">
            <Select placeholder="Select a Sport" allowClear>
              {facilitiesList?.map((facility: any) => (
                <Option key={facility.id} value={facility.id}>
                  {facility.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        )}

        <Form.Item>
          <Button type="primary" onClick={filtersForm.submit}>
            Apply
          </Button>
        </Form.Item>
      </Form>
      <Divider />
    </>
  );
};

export default Filters;
