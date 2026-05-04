// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const tablesApi = createApi({
  reducerPath: 'tablesApi',
  baseQuery: fetchBaseQuery({ baseUrl: '\tables' }),
  endpoints: (builder) => ({
    gettables: builder.query({
      query: () => ``,
    }),
    addtables: builder.mutation({
        query:(table)=>{
            return{
                url:"/",
                method:"POST",
                body:table
            }
        }
    }),
    addorder:builder.mutation({
        query:({data,id})=>{
            return{
                url:`/${id}`,
                method:"PATCH",
                body:data
            }
        }
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGettablesQuery,useAddtablesMutation,useLazyGettablesQuery,useAddorderMutation} = tablesApi