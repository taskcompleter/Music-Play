const express=require('express')
const app=express()
const path=require('path')

const socketio=require('socket.io')
app.use('/',express.static(path.join(__dirname,'public')))
const http=require('http')
const server=http.createServer(app)

const io=socketio(server)

io.on('connection',function(socket)
{
    socket.on('play',function(data){

        io.emit('play',data)
    })
})





server.listen('3444')