import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ['Todo', 'User'],
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({}),
});
