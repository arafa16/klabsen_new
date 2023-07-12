import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    jamOperasionals: null,
    jamOperasionalsIsError: false,
    jamOperasionalsIsSuccess: false,
    jamOperasionalsIsLoading: false,
    jamOperasionalsMessage: ""
}

export const getJamOperasionals = createAsyncThunk("jamOperasionals/JamOperasionals", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+'/jamOperasionals',{
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

export const jamOperasionalsSLice = createSlice({
    name: "jamOperasionals",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) => {
        builder.addCase(getJamOperasionals.pending, (state) => {
            state.jamOperasionalsIsLoading = true;
        });
        builder.addCase(getJamOperasionals.fulfilled, (state, action ) => {
            state.jamOperasionalsIsLoading = false;
            state.jamOperasionalsIsSuccess = true;
            state.jamOperasionals = action.payload
        });
        builder.addCase(getJamOperasionals.rejected, (state, action) => {
            state.jamOperasionalsIsLoading = false;
            state.jamOperasionalsIsError = true;
            state.jamOperasionalsMessage = action.payload;
        })
    }
})

export const {reset} = jamOperasionalsSLice.actions;
export default jamOperasionalsSLice.reducer;