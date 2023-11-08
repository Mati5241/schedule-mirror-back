const express = require('express');
const cors = require('cors');
const {deleteRouter} = require("./routes/delete");
const {dateRouter} = require("./routes/date");


const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
}))
app.use(express.json());


app.delete('/delete/:id', deleteRouter);

app.get('/date/:day', dateRouter);

app.post('/date/:day', dateRouter);


app.listen(3001, '0.0.0.0');
