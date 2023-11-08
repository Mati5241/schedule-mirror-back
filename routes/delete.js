const express = require('express');
const {TodoRecord} = require("../records/todo.record");

const deleteRouter = express.Router();


deleteRouter

    .delete('/delete/:id', async (req, res) => {

        const id = req.params.id;


        await TodoRecord.delete(id);

        res.end();


    })


module.exports = {
    deleteRouter,
}
