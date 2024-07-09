import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const urlApi = createApi({
    reducerPath: "urlApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/url" }),
    tagTypes: ["tagName"],
    endpoints: (builder) => {
        return {
            getPublicUrl: builder.query({
                query: id => {
                    return {
                        url: `/${id}`,
                        method: "GET",
                        // body: id
                    }
                },
                transformResponse: data => data.result
            }),


        }
    }
})

export const { useGetPublicUrlQuery } = urlApi
