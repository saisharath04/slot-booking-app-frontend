import { configureStore } from "@reduxjs/toolkit";
import { locationListReducer, facilitiesListReducer } from "./slice";

const store = configureStore({
  reducer: {
    locationListReducer,
    facilitiesListReducer,
  },
});

export default store;

// Export these types for use throughout your app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
