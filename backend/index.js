import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import SequelizeStore from 'connect-session-sequelize';
import FileUpload from 'express-fileupload';

//tabel
import UserRoute from './routes/UserRoute.js';
import StatusRoute from './routes/StatusRoute.js';
import PeriodeRoute from './routes/PeriodeRoute.js';
import InOut from './routes/InOutRoute.js';
import NotificationRoute from './routes/NotificationRoute.js';
import KoreksiRoute from './routes/KoreksiRoute.js';
import PendapatanRoute from './routes/PendapatanRoute.js';
import GanderRoute from './routes/GanderRoute.js';
import PenempatanRoute from './routes/PenempatanRoute.js';
import AtasanRoute from './routes/AtasanRoute.js';
import StatusPerkawinanRoute from './routes/StatusPerkawinanRoute.js';
import PendidikanRoute from './routes/PendidikanRoute.js';
import KontakEmergancyRoute from './routes/KontakEmergencyRoute.js';
import GolonganDarahRoute from './routes/GolonganDarahRoute.js';
import BankRoute from './routes/BankRoute.js';
import JamOperasionalRoute from './routes/JamOperasionalRoute.js';
import GroupRoute from './routes/GroupRoute.js';
import JabatanRoute from './routes/JabatanRoute.js';
import TipeAbsenRoute from './routes/TipeAbsenRoute.js';
import PelanggaranRoute from './routes/PelanggaranRoute.js';
import StatusKoreksiRoute from './routes/StatusKoreksiRoute.js';
import TipeNotificationRoute from './routes/TipeNotificationRoute.js';
import HistoryKoreksiRoute from './routes/HistoryKoreksiRoute.js';
import TipePendapatanRoute from './routes/TipePendapatanRoute.js';
import AuthRoute from './routes/AuthRoute.js';

import db from './config/Database.js';

dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db:db
});

// (async()=>{
//     await db.sync();
// })();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store:store,
    cookie:{
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(FileUpload());
app.use(UserRoute);
app.use(StatusRoute);
app.use(PeriodeRoute);
app.use(NotificationRoute);
app.use(KoreksiRoute);
app.use(InOut);
app.use(PendapatanRoute);
app.use(GanderRoute);
app.use(PenempatanRoute);
app.use(AtasanRoute);
app.use(StatusPerkawinanRoute);
app.use(PendidikanRoute);
app.use(KontakEmergancyRoute);
app.use(GolonganDarahRoute);
app.use(BankRoute);
app.use(JamOperasionalRoute);
app.use(GroupRoute);
app.use(JabatanRoute);
app.use(TipeAbsenRoute);
app.use(PelanggaranRoute);
app.use(StatusKoreksiRoute);
app.use(TipeNotificationRoute);
app.use(HistoryKoreksiRoute);
app.use(TipePendapatanRoute);
app.use(AuthRoute);

//setup public folder
app.use(express.static("public"));

// store.sync();

app.listen(process.env.APP_PORT, ()=>{
    console.log(`server running at port ${process.env.APP_PORT}`)
});