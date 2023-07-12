import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    statusPerkawinan: null,
    statusPerkawinanIsSuccess: false,
    statusPerkawinanIsError: false,
    statusPerkawinanIsLoading:false,
    statusPerkawinanMessage: ""
}

export const getStatusPerkawinan = createAsyncThunk("statusPerkawinan/StatusPerkawinan", async(_,thunkAPI)=>{
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+'/statusPerkawinan',{
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

export const statusPerkawinanSlice = createSlice({
    name:"statusPerkawinan",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) => {
        builder.addCase(getStatusPerkawinan.pending, (state) => {
            state.statusPerkawinanIsLoading = true;
        });
        builder.addCase(getStatusPerkawinan.fulfilled, (state, action) => {
            state.statusPerkawinanIsLoading = false;
            state.statusPerkawinanIsSuccess = true;
            state.statusPerkawinan = action.payload;
        });
        builder.addCase(getStatusPerkawinan.rejected, (state, action) => {
            state.statusPerkawinanIsLoading = false;
            state.statusPerkawinanIsError = true;
            state.statusPerkawinanMessage = action.payload;
        })
    }
})

export const {reset} = statusPerkawinanSlice.actions;
export default statusPerkawinanSlice.reducer;