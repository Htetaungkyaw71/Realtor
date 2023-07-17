import { configureStore } from "@reduxjs/toolkit";
import { houseApi } from "./src/api/houseApiService";
import { agencyApi } from "./src/api/agencyApiService";

const store = configureStore({
  reducer: {
    [houseApi.reducerPath]: houseApi.reducer,
    [agencyApi.reducerPath]: agencyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([houseApi.middleware, agencyApi.middleware]),
});

export default store;
