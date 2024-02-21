import { PayloadAction, createSlice } from "@reduxjs/toolkit/react";
import { AppDispatch } from "./store";

type CounterState = {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        // Использование типа PayloadAction для объявления содержимого `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    }
}) 


export const incrementAsync = async (amount: number) => (dispatch: AppDispatch) => {
    setTimeout(() => {
      dispatch(incrementByAmount(amount))
    }, 1000)
  }

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer