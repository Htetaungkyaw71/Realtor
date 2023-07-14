import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const data = {
  limit: 200,
  offset: 0,
  postal_code: "90004",
  status: ["for_sale", "ready_to_build"],
  sort: {
    direction: "desc",
    field: "list_date",
  },
};

export const houseApi = createApi({
  reducerPath: "houseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://realty-in-us.p.rapidapi.com/properties/v3",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json"),
        headers.set(
          "X-RapidAPI-Key",
          "323981dd4dmsh72808052c47bfcep155cdejsn254bd6f35f87",
        ),
        headers.set("X-RapidAPI-Host", "realty-in-us.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getHouse: builder.query({
      query: () => ({
        url: "list",
        method: "POST",
        body: JSON.stringify(data),
      }),
      transformResponse: (response) => response.data.home_search.results,
    }),
    getHouseDetail: builder.query({
      query: (id) => ({
        url: "detail",
        method: "GET",
        params: { property_id: id },
      }),
      transformResponse: (response) => response.data.home,
    }),
  }),
});

export const { useGetHouseQuery, useGetHouseDetailQuery } = houseApi;
