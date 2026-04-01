import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { tablesApi } from '../services/tablesapi'
import { itemsApi } from '../services/itemsapi'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [tablesApi.reducerPath]: tablesApi.reducer,
    [itemsApi.reducerPath]:itemsApi.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tablesApi.middleware,itemsApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)