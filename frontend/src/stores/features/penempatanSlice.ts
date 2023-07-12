import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    penempatans: null,
    penempatansIsError: false,
    penempatansIsSuccess: false,
    penempatansIsLoading: false,
    penempatansMessage: ""
}

export const getPenempatans = createAsyncThunk("penempatans/Penempatans", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+'/penempatans',{
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

export const penempatansSLice = createSlice({
    name: "penempatans",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) => {
        builder.addCase(getPenempatans.pending, (state) => {
            state.penempatansIsLoading = true;
        });
        builder.addCase(getPenempatans.fulfilled, (state, action ) => {
            state.penempatansIsLoading = false;
            state.penempatansIsSuccess = true;
            state.penempatans = action.payload
        });
        builder.addCase(getPenempatans.rejected, (state, action) => {
            state.penempatansIsLoading = false;
            state.penempatansIsError = true;
            state.penempatansMessage = action.payload;
        })
    }
})

export const {reset} = penempatansSLice.actions;
export default penempatansSLice.reducer;