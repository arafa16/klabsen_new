import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    jabatans: null,
    jabatansIsError: false,
    jabatansIsSuccess: false,
    jabatansIsLoading: false,
    jabatansMessage: ""
}

export const getJabatans = createAsyncThunk("jabatans/Jabatans", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+'/jabatans',{
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

export const jabatanSLice = createSlice({
    name: "jabatans",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) => {
        builder.addCase(getJabatans.pending, (state) => {
            state.jabatansIsLoading = true;
        });
        builder.addCase(getJabatans.fulfilled, (state, action ) => {
            state.jabatansIsLoading = false;
            state.jabatansIsSuccess = true;
            state.jabatans = action.payload
        });
        builder.addCase(getJabatans.rejected, (state, action) => {
            state.jabatansIsLoading = false;
            state.jabatansIsError = true;
            state.jabatansMessage = action.payload;
        })
    }
})

export const {reset} = jabatanSLice.actions;
export default jabatanSLice.reducer;