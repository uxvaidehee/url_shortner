import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/user", credentials: 'include' }),
    tagTypes: ["url"],
    endpoints: (builder) => {
        return {
            getUrls: builder.query({
                query: () => {
                    return {
                        url: "/url",
                        method: "GET"
                    }
                },
                transformResponse: data => data.result,
                providesTags: ["url"]
            }),
            addUrl: builder.mutation({
                query: urlData => {
                    return {
                        url: "/url-create",
                        method: "POST",
                        body: urlData
                    }
                },
                invalidatesTags: ["url"]
            }),
            updateUrl: builder.mutation({
                query: urlData => {
                    return {
                        url: `/url-update/${urlData._id}`,
                        method: "PUT",
                        body: urlData
                    }
                },
                invalidatesTags: ["url"]
            }),
            deleteUrl: builder.mutation({
                query: id => {
                    return {
                        url: `/url-remove${id}`,
                        method: "DELETE",
                        // body: urlData
                    }
                },
                invalidatesTags: ["url"]
            }),

        }
    }
})

export const {
    useAddUrlMutation,
    useGetUrlsQuery,
    useUpdateUrlMutation,
    useDeleteUrlMutation

} = userApi
