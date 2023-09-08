const express = require("express");
const notes = require("./Data/notes.js");
const dotenv = require("dotenv");

const app=express();
dotenv.config()

app.get("/",(req,res)=>{
    res.send("API is running...")
});
app.get("/api/notes",(req,res)=>{
    res.send(notes);
});
app.get("/api/notes/:id",(req,res)=>{
    console.log(req.params);
    const note=notes.find((n)=> n._id === req.params.id);

    res.send(note);
    
});


const PORT=process.env.PORT || 9000
app.listen(PORT, console.log(`Server started on port ${PORT}`));