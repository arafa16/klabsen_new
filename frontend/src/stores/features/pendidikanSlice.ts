import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    pendidikans: null,
    pendidikanIsSuccess: false,
    pendidikanIsError: false,
    pendidikanIsLoading:false,
    pendidikanMessage: ""
}

export const getPendidikans = createAsyncThunk("pendidikans/Pendidikans", async(_,thunkAPI)=>{
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+'/pendidikans',{
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

export const pendidikanSlice = createSlice({
    name:"pendidikans",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) => {
        builder.addCase(getPendidikans.pending, (state) => {
            state.pendidikanIsLoading = true;
        });
        builder.addCase(getPendidikans.fulfilled, (state, action) => {
            state.pendidikanIsLoading = false;
            state.pendidikanIsSuccess = true;
            state.pendidikans = action.payload;
        });
        builder.addCase(getPendidikans.rejected, (state, action) => {
            state.pendidikanIsLoading = false;
            state.pendidikanIsError = true;
            state.pendidikanMessage = action.payload;
        })
    }
})

export const {reset} = pendidikanSlice.actions;
export default pendidikanSlice.reducer;