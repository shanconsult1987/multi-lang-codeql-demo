const express = require("express");
const { exec } = require("child_process");

const app = express();

app.get("/", (req, res) => {
    res.send("JavaScript App");
});

/*
Command Injection
http://localhost:3000/run?cmd=dir
*/

app.get("/run", (req, res) => {
    const cmd = req.query.cmd;

    exec(cmd, (err, stdout) => {
        res.send(stdout);
    });
});

app.listen(3000);
