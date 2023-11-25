import { configureStore, combineReducers } from "@reduxjs/toolkit";
import helperSlice from './reducers/HelperSlice'

const rootReducer = combineReducers({
  helperSlice
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']