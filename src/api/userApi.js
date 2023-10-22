import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (name) => `/${name}`,
      providesTags: ["User"],
    }),
    createUser: builder.mutation({
      query: (newUser) => ({
        url: "/users",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetUsersQuery, useCreateUserMutation } = userApi;
