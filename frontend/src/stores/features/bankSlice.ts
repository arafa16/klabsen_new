import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    banks: null,
    banksIsSuccess: false,
    banksIsError: false,
    banksIsLoading:false,
    banksMessage: ""
}

export const getBanks = createAsyncThunk("banks/Banks", async(_,thunkAPI)=>{
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+'/banks',{
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

export const banksSlice = createSlice({
    name:"Banks",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) => {
        builder.addCase(getBanks.pending, (state) => {
            state.banksIsLoading = true;
        });
        builder.addCase(getBanks.fulfilled, (state, action) => {
            state.banksIsLoading = false;
            state.banksIsSuccess = true;
            state.banks = action.payload;
        });
        builder.addCase(getBanks.rejected, (state, action) => {
            state.banksIsLoading = false;
            state.banksIsError = true;
            state.banksMessage = action.payload;
        })
    }
})

export const {reset} = banksSlice.actions;
export default banksSlice.reducer;