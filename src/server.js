import express from 'express';
import configViewEngine from './config/viewEngine';
import initWebRoutes from './routes/site';
import bodyParser from 'body-parser';
import cors from 'cors'
import db from './config/connectDB';
require('dotenv').config();
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

// connect db
db.mongooseBD();

const app = express();



app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
app.use(cors(corsOptions))
const PORT = process.env.PORT || 3001;
const hostname = process.env.HOST_NAME;
//config view engine
configViewEngine(app);

//init web Route
initWebRoutes(app);

app.listen(PORT, () => {
    console.log(`${hostname}:${PORT}`);
});
