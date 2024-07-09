import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/admin", credentials: "include" }),
    tagTypes: ["user"],
    endpoints: (builder) => {
        return {
            getAdminUsers: builder.query({
                query: () => {
                    return {
                        url: "/user",
                        method: "GET"
                    }
                },
                transformResponse: data => data.result,
                providesTags: ["user"]
            }),
            getAdminUserUrls: builder.query({
                query: id => {
                    return {
                        url: `/user/url/${id}`,
                        method: "GET"
                    }
                },
                transformResponse: data => data.result,
                providesTags: ["user"]
            }),
            updateAdminUser: builder.mutation({
                query: userData => {
                    return {
                        url: `/user/${userData._id}`,
                        method: "PUT",
                        body: userData
                    }
                },
                invalidatesTags: ["user"]
            }),


        }
    }
})

export const {
    // useGetAdminUserUrlsQuery,
    useLazyGetAdminUserUrlsQuery,
    // useLazyGetAdminUsersQuery,
    useGetAdminUsersQuery,
    useUpdateAdminUserMutation

} = adminApi