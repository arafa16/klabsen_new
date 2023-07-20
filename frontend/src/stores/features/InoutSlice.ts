import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface variabel {
    inOuts: Array;
    inOutsIsError: boolean;
    inOutsIsSuccess: boolean;
    inOutsIsLoading: boolean;
    inOutsMessage: string;
}

const initialState : variabel = {
    inOuts: null,
    inOutsIsError: false,
    inOutsIsSuccess: false,
    inOutsIsLoading: false,
    inOutsMessage: ""
}

export const getInOuts = createAsyncThunk("inOuts/InOuts", async(inOuts, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+'/inOutUser/'+inOuts.id,{
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

export const inOutsSLice = createSlice({
    name: "inOuts",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) => {
        builder.addCase(getInOuts.pending, (state) => {
            state.inOutsIsLoading = true;
        });
        builder.addCase(getInOuts.fulfilled, (state, action ) => {
            state.inOutsIsLoading = false;
            state.inOutsIsSuccess = true;
            state.inOuts = action.payload
        });
        builder.addCase(getInOuts.rejected, (state, action) => {
            state.inOutsIsLoading = false;
            state.inOutsIsError = true;
            state.inOutsMessage = action.payload;
        })
    }
})

export const {reset} = inOutsSLice.actions;
export default inOutsSLice.reducer;