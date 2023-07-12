import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    atasans: null,
    atasansIsError: false,
    atasansIsSuccess: false,
    atasansIsLoading: false,
    atasansMessage: ""
}

export const getAtasans = createAsyncThunk("atasans/Atasans", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+'/atasans',{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
})

export const atasanSLice = createSlice({
    name: "atasans",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) => {
        builder.addCase(getAtasans.pending, (state) => {
            state.atasansIsLoading = true;
        });
        builder.addCase(getAtasans.fulfilled, (state, action ) => {
            state.atasansIsLoading = false;
            state.atasansIsSuccess = true;
            state.atasans = action.payload
        });
        builder.addCase(getAtasans.rejected, (state, action) => {
            state.atasansIsLoading = false;
            state.atasansIsError = true;
            state.atasansMessage = action.payload;
        })
    }
})

export const {reset} = atasanSLice.actions;
export default atasanSLice.reducer;