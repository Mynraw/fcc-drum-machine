import { createSlice } from "@reduxjs/toolkit";

const drumSlice = createSlice({
    name: "drum",
    initialState: {
        disabled: false,
        drumAction: "",
        bank: false,
        volume: 0,
    },
    reducers: {
        powerSwitch: (state) => {
            state.disabled = !state.disabled;
        },
        currentAction: (state, action) => {
            state.drumAction = action.payload;
        },
        switchBank: (state) => {
            state.bank = !state.bank;
        },
        volumeLevel: (state, action) => {
            state.volume = action.payload;
        }
    }
})

export const { powerSwitch, currentAction, switchBank, volumeLevel } = drumSlice.actions;
export default drumSlice.reducer;