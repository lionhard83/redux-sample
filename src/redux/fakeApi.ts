import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export const fakeJSONPlaceholedApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  keepUnusedDataFor: 10,
  tagTypes: ["Posts"],
  endpoints: (build) => ({
    getPosts: build.query<Post[], void>({
      query: () => "/posts",
      providesTags: ["Posts"],
    }),
    addPost: build.mutation<Post, Omit<Post, "id">>({
      query: (body) => ({
        url: "posts",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation } = fakeJSONPlaceholedApi;
