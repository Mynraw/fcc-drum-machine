import { createSlice } from "@reduxjs/toolkit";

const drumSlice = createSlice({
    name: "drum",
    initialState: {
        disabled: false,
        drumAction: "",
    },
    reducers: {
        powerSwitch: (state) => {
            state.disabled = !state.disabled;
        },
        currentAction: (state, action) => {
            state.drumAction = action.payload;
        }
    }
})

export const { powerSwitch } = drumSlice.actions;
export default drumSlice.reducer;