import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "productsApi",
  tagTypes: ["Product"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (features) => {
        if (features)
          return `products?limit=4&${Object.entries(features)
            .join("&")
            .replaceAll(",", "=")}`;
        return `products`;
      },
    }),
    getProductById: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdMutation } =
  productsApi;
