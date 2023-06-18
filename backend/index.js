import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';

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


import db from './config/Database.js';

dotenv.config();

const app = express();

// (async()=>{
//     await db.sync();
// })();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie:{
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.use(express.json());
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

app.listen(process.env.APP_PORT, ()=>{
    console.log(`server running at pport ${process.env.APP_PORT}`)
});