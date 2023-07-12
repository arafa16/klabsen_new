import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    golonganDarah: null,
    golonganDarahIsError: false,
    golonganDarahIsSuccess: false,
    golonganDarahIsLoading: false,
    golonganDarahMessage: ""
}

export const getGolonganDarah = createAsyncThunk("golonganDarah/GolonganDarah", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+'/golonganDarah',{
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

export const golonganDarahSLice = createSlice({
    name: "golonganDarah",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) => {
        builder.addCase(getGolonganDarah.pending, (state) => {
            state.golonganDarahIsLoading = true;
        });
        builder.addCase(getGolonganDarah.fulfilled, (state, action ) => {
            state.golonganDarahIsLoading = false;
            state.golonganDarahIsSuccess = true;
            state.golonganDarah = action.payload;
        });
        builder.addCase(getGolonganDarah.rejected, (state, action) => {
            state.golonganDarahIsLoading = false;
            state.golonganDarahIsError = true;
            state.golonganDarahMessage = action.payload;
        })
    }
})

export const {reset} = golonganDarahSLice.actions;
export default golonganDarahSLice.reducer;