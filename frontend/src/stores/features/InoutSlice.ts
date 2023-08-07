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
    const id = inOuts.id;
    if(!id){
        return;
    }
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+'/inOutUser/'+id,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
})

export const AbsenMasuk = createAsyncThunk("inOuts/AbsenMasuk", async(inOuts, thunkAPI) => {
    try {
        await axios.post(import.meta.env.VITE_REACT_APP_API_URL+'/inOut', {
            userId:inOuts.userId,
            tanggalMulai:inOuts.tanggalMulai,
            tanggalSelesai:inOuts.tanggalSelesai,
            tipeAbsenId:inOuts.tipeAbsenId,
            pelanggaranId:inOuts.pelanggaranId,
            statusInoutId:inOuts.statusInoutId
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+'/inOutUser/'+inOuts.id,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

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

        //absen
        builder.addCase(AbsenMasuk.pending, (state) => {
            state.inOutsIsLoading = true;
        });
        builder.addCase(AbsenMasuk.fulfilled, (state, action ) => {
            state.inOutsIsLoading = false;
            state.inOutsIsSuccess = true;
            state.inOuts = action.payload
        });
        builder.addCase(AbsenMasuk.rejected, (state, action) => {
            state.inOutsIsLoading = false;
            state.inOutsIsError = true;
            state.inOutsMessage = action.payload;
        })
    }
})

export const {reset} = inOutsSLice.actions;
export default inOutsSLice.reducer;