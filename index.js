import express from "express";
import mongoose from "mongoose";

import route from "./routes/index.js";

const port = 3000;
const app = express();

mongoose.connect(process.env.dburi || "mongodb://localhost:27017/srin2",{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', () => console.log('Database Connected'));

app.use(express.json());
app.get('/', (req, res) => {
    res.send("Welcome");
});
app.use('/todos',route);

app.listen(process.env.PORT || port, () => console.log('Server Running at port: 3000'));