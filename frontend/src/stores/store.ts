import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";
import colorSchemeReducer from "./colorSchemeSlice";
import sideMenuReducer from "./sideMenuSlice";

//feature
import authSlice from './features/authSlice.js';
import ganderSlice from "./features/ganderSlice";
import golonganDarahSlice from "./features/golonganDarahSlice";
import statusPerkawinanSLice from "./features/statusPerkawinanSLice";
import pendidikanSlice from "./features/pendidikanSlice";
import banksSlice from "./features/bankSlice";
import kontakEmergencySlice from "./features/kontakEmergencySlice";
import penempatanSlice from "./features/penempatanSlice";
import jabatanSLice from "./features/jabatanSlice";
import atasanSLice from "./features/atasanSlice";
import jamOperasionalSlice from "./features/jamOperasionalSlice";
import groupSlice from "./features/groupSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    colorScheme: colorSchemeReducer,
    sideMenu: sideMenuReducer,
    auth: authSlice,
    ganders: ganderSlice,
    golonganDarah: golonganDarahSlice,
    statusPerkawinan: statusPerkawinanSLice,
    pendidikans: pendidikanSlice,
    banks: banksSlice,
    kontakEmergency:kontakEmergencySlice,
    penempatans: penempatanSlice,
    jabatans: jabatanSLice,
    atasans: atasanSLice,
    jamOperasionals: jamOperasionalSlice,
    groups: groupSlice
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
