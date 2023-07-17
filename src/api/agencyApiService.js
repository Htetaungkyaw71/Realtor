import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const agencyApi = createApi({
  reducerPath: "agencyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bayut.p.rapidapi.com/agencies/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json"),
        headers.set(
          "X-RapidAPI-Key",
          "323981dd4dmsh72808052c47bfcep155cdejsn254bd6f35f87",
        ),
        headers.set("X-RapidAPI-Host", "bayut.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAgency: builder.query({
      query: () => ({
        url: "list",
        params: {
          query: "patriot",
        },
      }),
      transformResponse: (response) => response.hits,
    }),
  }),
});

export const { useGetAgencyQuery } = agencyApi;
