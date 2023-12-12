import axios from "axios";
import dotenv from 'dotenv'
dotenv.config()

const TIME_HEARTBEAT = process.env.HEART_BEAT_INTERVAL_TIME;


const NAME_NODE_ADDRESS = process.env.NAME_NODE_ADDRESS;

const HEART_BEAT_PATH = process.env.HEART_BEAT_PATH;

const heartbeatEndPoint = 'http://'.concat(NAME_NODE_ADDRESS).concat(HEART_BEAT_PATH)

setInterval(() => {
    axios.post(heartbeatEndPoint, {
        datanode: 1,
        description : "NameNode 1 sent HeartBeat",
        time: new Date()
    });
    console.log("HB Sent")
}, TIME_HEARTBEAT)