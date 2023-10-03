import express, {urlencoded} from 'express';
import cors from 'cors';
import morgan from 'morgan';
// import router from "./router.js";
import {newOrder} from "./handlers/order.js";
import mongoose from "mongoose";
import router from "./router.js";

const app = express();

mongoose.connect('mongodb+srv://vijaysari16:vjsari16@cluster0.stdi8yl.mongodb.net/ecomerce')

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.use('/', (req,res) => {
//     res.json({message: 'hello'})
// })

app.use("/api", router)

export default app