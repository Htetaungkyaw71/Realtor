import { configureStore } from "@reduxjs/toolkit";
import { houseApi } from "./src/api/houseApiService";

const store = configureStore({
  reducer: {
    [houseApi.reducerPath]: houseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(houseApi.middleware),
});

export default store;
