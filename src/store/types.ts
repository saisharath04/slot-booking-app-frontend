export type Location = {
  name: string;
  id: string;
};

export type FiltersParamsType = {
  date: any;
  location_id: string;
  sport?: SportType;
};

export type SportType = "Cricket" | "Football" | "Badminton" | "Tennis";

export type SelectedSlotsTypes = {
  start_time?: string;
  end_time?: string;
  is_booked: boolean;
};

export type LoginApiPayloadType = {
  email: string;
  password: string;
};

export type LoginApiResponseType = {
  success: boolean;
  message: string;
  user: User;
  token: string;
};

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: string;
}

export type RegisterApiPayloadType = {
  email: string;
  password: string;
  name: string;
};

export type RegisterApiResponseType = {
  success: boolean;
  message: string;
};

export type ErrorMessageType = {
  response: {
    data: {
      message: string;
    };
  };
};

export type LocationListPayloadType = {
  id?: number;
};

export type LocationListResponseType = {
  success: boolean;
  total_count: number;
  data: LocationDatumType[];
};

export interface LocationDatumType {
  id: number;
  name: string;
  address: string;
}

export type FacilitiesListPayloadType = {
  id: number;
};

export type FacilitiesListResponseType = {
  success: boolean;
  total_count: number;
  data: FacilitiesDatumType[];
};

export type FacilitiesDatumType = {
  id: number;
  name: string;
};
