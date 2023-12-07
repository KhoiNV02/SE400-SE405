//đường dẫn vì sử dụng trong folder
const favicon = require('serve-favicon');
const path = require('path');
//gọi thư viện express để dùng các thứ có trong nó
const express = require('express');
// import { engine } from 'express-handlebars';
//morgan được sử dụng để thông báo cho trạng thái của server hiện tại
const morgan = require('morgan');
//handlebars để tải các trang, cấu trúc trang
const { engine } = require('express-handlebars');

// import engine  from 'express-handlebars';
const app = express();
var server=require("http").Server(app);
var io=require("socket.io")(server);

server.listen(3000);
// xử lý server
var r;
io.on("connection",function(socket){
console.log("có người đã đăng nhập với id là "+ socket.id);
socket.on("Create-Room",function(data){
  r=data;
  socket.join(data.RoomName);
  socket.room=data.RoomName;
  console.log(socket.adapter.rooms);
  var Rooms=[];
  for ( room of socket.adapter.rooms.keys()) {
    var randomNumber = Math.floor(Math.random() * (9000)) + 1000;
    var object1={
      id:randomNumber,
      UserName:data.UserName,
      Room:room,
    };
    Rooms.push(object1);
  }
io.sockets.emit("Server-Send-Room",Rooms);
socket.on("send-hello",function(data){
  data+=" ";
  data+=socket.id;
  io.sockets.in(socket.room).emit("send-hello-e",data);
})

});


});
// kết thúc xử lý server
// const handlebars = require('express-handlebars')
const port = 3000;
app.use(favicon(path.join(__dirname, 'Resouses', 'public', 'YehHGAGH.ico')));
const methodOverride = require('method-override')
app.use(express.static(path.join(__dirname, 'Resouses','public')));

//gọi ra để sử dụng
app.use(morgan('combined'));

app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers:{
      sum: (a,b) => a+b,
      json: function (context) {
        return JSON.stringify(context);
    }
    }
  }),
  
);
app.use(methodOverride('_method'))
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'Resouses','views'));
//sửa link đường dẫn mặc định thành link đường dẫn hợp lệ
//render đến các trang đó thông qua đường dẫn
// app.set('views', path.join(__dirname, 'Resouses','public'));
const route = require('./routes/');

const db=require('./config/db');
const { availableParallelism } = require('os');
db.connect();
app.use(express.urlencoded({
  extended:true
 }));
//  app.use(express.json);
route(app);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

