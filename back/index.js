const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: process.env.NODE_ENV==='production' ? /https:\/\/[\S\.]*boutvalentin\.com/ : '*'  
}
if (process.env.NODE_ENV==='production') {
    app.use(cors(''))
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=> {
    res.json({message: 'Hello WOrld'});
})

const PORT = process.env.NODE_ENV==='production' ? 80 : 8080;
app.listen(PORT, () => {
    console.log(`Serveur is running on ${PORT}`)
})