import { createSlice } from "@reduxjs/toolkit";

const drumSlice = createSlice({
    name: "drum",
    initialState: {
        disabled: false,
    },
    reducers: {
        powerSwitch: (state) => {
            state.disabled = !state.disabled;
        }
    }
})

export const { powerSwitch } = drumSlice.actions;
export default drumSlice.reducer;