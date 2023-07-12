import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const LoginUser = createAsyncThunk("user/LoginUser", async(user, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+'/login', {
            email: user.email,
            password: user.password
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const RegisterUser = createAsyncThunk("user/RegisterUser", async(user, thunkAPI) => {
    try {
        console.log("sampai register slice");
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+'/users', {
            nik: user.nik,
            absenId: user.absenId,
            name: user.name, 
            ganderId: user.ganderId, 
            email: user.email,
            extention: user.extention,
            nomorHp: user.nomorHp,
            penempatanId: user.penempatanId,
            jabatanId: user.jabatanId,
            atasanId: user.atasanId,
            nomorKtp: user.nomorKtp,
            alamatKtp: user.alamatKtp,
            alamatDomisili: user.alamatDomisili,
            tempatLahir: user.tempatLahir,
            tanggalLahir: user.tanggalLahir,
            nomorNpwp: user.nomorNpwp,
            statusPerkawinanId: user.statusPerkawinanId,
            jumlahAnak: user.jumlahAnak,
            namaIbu: user.namaIbu,
            pendidikanId: user.pendidikanId,
            namaSekolah: user.namaSekolah,
            jurusanSekolah: user.jurusanSekolah,
            tahunLulus: user.tahunLulus,
            ipk: user.ipk,
            nomorBpjsKesehatan: user.nomorBpjsKesehatan,
            nomorBpjsKetenagaKerja: user.nomorBpjsKetenagaKerja,
            kontakEmergencyId: user.kontakEmergencyId,
            nomorEmergency: user.nomorEmergency,
            alamatEmergency: user.alamatEmergency,
            nomorSim: user.nomorSim,
            golonganDarahId: user.golonganDarahId,
            bankId: user.bankId,
            nomorRekening: user.nomorRekening,
            jamOperasionalId: user.jamOperasionalId,
            groupId: user.groupId,
            statusId: null,
            quote: null,
            password: user.password
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const getMe = createAsyncThunk("user/getMe", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+'/me',{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const LogOut = createAsyncThunk("user/LogOut", async() => {
    await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+'/logout',{
        withCredentials: true, // Now this is was the missing piece in the client side 
    });
    console.log("logout men")
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) => {
        //login
        builder.addCase(LoginUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(LoginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
        builder.addCase(LoginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        //register
        builder.addCase(RegisterUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(RegisterUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
            state.message = action.payload;
        });
        builder.addCase(RegisterUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // get user login
        builder.addCase(getMe.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getMe.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
        builder.addCase(getMe.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
})

export const {reset} = authSlice.actions;
export default authSlice.reducer;