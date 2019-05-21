const express = require('express');

const server = express();
const serverConfig = require('./serverConfig');

//middleware
serverConfig(server);

//routes
const authRouter = require('../routes/authRouter');
const parentRouter = require('../routes/parentRouter');
const postRouter = require('../routes/postRouter')
const commentRouter = require('../routes/commentRouter')
// endpoints
server.use("/auth", authRouter);
server.use("/parents", parentRouter);
server.use("/posts", postRouter);
server.use("/comments", commentRouter)

server.get('/', (req,res) => {
    res.send('go to https://documenter.getpostman.com/view/7322724/S1TN7gy5?version=latest for endpoint documentation')
})

module.exports = server;