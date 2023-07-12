import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    kontakEmergency: null,
    kontakEmergencyIsSuccess: false,
    kontakEmergencyIsError: false,
    kontakEmergencyIsLoading:false,
    kontakEmergencyMessage: ""
}

export const getKontakEmergency = createAsyncThunk("kontakEmergency/KontakEmergency", async(_,thunkAPI)=>{
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+'/kontakEmergency',{
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

export const kontakEmergencySlice = createSlice({
    name:"kontakEmergency",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) => {
        builder.addCase(getKontakEmergency.pending, (state) => {
            state.kontakEmergencyIsLoading = true;
        });
        builder.addCase(getKontakEmergency.fulfilled, (state, action) => {
            state.kontakEmergencyIsLoading = false;
            state.kontakEmergencyIsSuccess = true;
            state.kontakEmergency = action.payload;
        });
        builder.addCase(getKontakEmergency.rejected, (state, action) => {
            state.kontakEmergencyIsLoading = false;
            state.kontakEmergencyIsError = true;
            state.kontakEmergencyMessage = action.payload;
        })
    }
})

export const {reset} = kontakEmergencySlice.actions;
export default kontakEmergencySlice.reducer;