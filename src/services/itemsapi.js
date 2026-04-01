// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const itemsApi = createApi({
  reducerPath: 'itemsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/items' }),
  endpoints: (builder) => ({
    getitems: builder.query({
      query: () => ``,
    }),
    additmes: builder.mutation({
        query:(item)=>{
            return{
                url:"/",
                method:"POST",
                body:item
            }
        }
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useAdditmesMutation,useGetitemsQuery,useLazyGetitemsQuery} = itemsApi