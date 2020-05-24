const Controller = require('egg').Controller;
const fs = require('fs')
const logs = [];

function toInt(str){
    if(typeof str === 'number') return str;
    if(!str) return str;
    return parseInt(str, 10)||0;
}
class chat extends Controller {
    async index() {
        console.log(123);
        const { ctx, app } = this;
        const chart = app.io.of('/');
        setInterval(()=>{
            let time = new Date().getTime();
            let msg = {
                "time": toInt(time),
                "count": toInt(Math.floor(Math.random()*10000))
            };
            
            let data = JSON.stringify(msg)
            console.log(data);
            console.log(123,ctx.model);
            fs.appendFile('./data.json', data, err=>{
                if (err) {
                    console.log(err)
                } else {
                    console.log('成功')
                }
            })
            // let message = yield ctx.model.Count.create(msg);
            chart.emit('chat', [data]);
        }, 3000);
        var socket = require('socket.io-client')('http://localhost');

        socket.on('connect', function(){
            let connect = "connect";
            chart.emit('chat', [connect]);
        });
        socket.on('event', function(data){
            // mock data
            setInterval(()=>{
                let time = new Date().getTime();
                let msg = {
                    "time": toInt(time),
                    "count": toInt(Math.floor(Math.random()*10000))
                };
                
                let data = JSON.stringify(msg)
                console.log(data);
                // let message = yield ctx.model.Count.create(msg);
                chart.emit('chat', [data]);
            }, 3000);
        });
        socket.on('disconnect', function(){
            let error = "error";
            chart.emit('chat', [error]);
        });
        
        
    }

}
module.exports = chat;
