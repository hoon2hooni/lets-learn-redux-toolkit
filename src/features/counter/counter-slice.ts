import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//PayloadAction 은  그냥 타ㅂ

interface counterState {
  value: number;
}

const initialState: counterState = {
  value: 11,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increamented(state) {
      //it's okay to do this because immer makes it immutable
      //under the hood
      state.value++;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload
    }
  },
});

export const { increamented,amountAdded } = counterSlice.actions;
export default counterSlice.reducer;
