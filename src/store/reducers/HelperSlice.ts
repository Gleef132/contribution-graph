import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface IState {
  contribution: string | number;
  date?: string;
  x: number;
  y: number;
  opacity: number;
}

const initialState: IState = {
  contribution: '',
  x: 0,
  y: 0,
  opacity: 0,
}

export const helperSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    showHelper(state, { payload }: PayloadAction<IState>) {
      state.contribution = payload.contribution
      state.date = payload.date
      state.x = payload.x
      state.y = payload.y
      state.opacity = payload.opacity
    },
    hiddenHelper(state, payload: PayloadAction) {
      state.x = 0
      state.y = 0
      state.opacity = 0
    },
  }
})

export default helperSlice.reducer