import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    groups: null,
    groupsIsError: false,
    groupsIsSuccess: false,
    groupsIsLoading: false,
    groupsMessage: ""
}

export const getGroups = createAsyncThunk("groups/Groups", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+'/groups',{
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

export const groupsSLice = createSlice({
    name: "groups",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) => {
        builder.addCase(getGroups.pending, (state) => {
            state.groupsIsLoading = true;
        });
        builder.addCase(getGroups.fulfilled, (state, action ) => {
            state.groupsIsLoading = false;
            state.groupsIsSuccess = true;
            state.groups = action.payload
        });
        builder.addCase(getGroups.rejected, (state, action) => {
            state.groupsIsLoading = false;
            state.groupsIsError = true;
            state.groupsMessage = action.payload;
        })
    }
})

export const {reset} = groupsSLice.actions;
export default groupsSLice.reducer;