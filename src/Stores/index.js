import { configureStore } from '@reduxjs/toolkit'
import {authReducer, modelReducer, playerCateguryReducer,playerReducer,teamReducer,userReducer} from './Slice'

export const store = configureStore({
  reducer: {
    palyer: playerReducer,
    team: teamReducer,
  },
})