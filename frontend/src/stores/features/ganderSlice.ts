import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    ganders: null,
    ganderIsError: false,
    ganderIsSuccess: false,
    ganderIsLoading: false,
    ganderMessage: ""
}

export const getGanders = createAsyncThunk("ganders/Ganders", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+'/ganders',{
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

export const ganderSLice = createSlice({
    name: "ganders",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) => {
        builder.addCase(getGanders.pending, (state) => {
            state.ganderIsLoading = true;
        });
        builder.addCase(getGanders.fulfilled, (state, action ) => {
            state.ganderIsLoading = false;
            state.ganderIsSuccess = true;
            state.ganders = action.payload
        });
        builder.addCase(getGanders.rejected, (state, action) => {
            state.ganderIsLoading = false;
            state.ganderIsError = true;
            state.ganderMessage = action.payload;
        })
    }
})

export const {reset} = ganderSLice.actions;
export default ganderSLice.reducer;