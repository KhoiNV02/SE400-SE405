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
const bodyParser = require('body-parser');
app.use(bodyParser.json());
server.listen(3000);
// xử lý server
var Rooms=[];
var Players=[];
var Chats=[];
var Result=[];
var GameQues=[];
function rand(max,min)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function makeRandomPosition(arr) {
  for (let i = arr.length - 2; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Dùng destructuring để hoán đổi giá trị
  }
  return arr;
}
function mix(data)
{
  var strings=[];
  var string='';
  for (var i=0;i<data.length;i+=2)
  {
      if (i%2==0)
      {
          if (i===data.length-1)
          {
              strings.push(data[i]);  
          }
          else
          {
          string+=data[i];
          string+=data[i+1];
          string+='/';
          strings.push(string);
          }
          string='';
      }
  }
  makeRandomPosition(strings);
  for (var i=0;i<strings.length;i++)
  string+=strings[i];
return string;
} 
function AddQuess(array)
{
  var NewsArray=[];
  for (var i=0;i<array.length;i++)
  {
var ob=
{
  root:array[i],
  question:mix(array[i]),
}
NewsArray.push(ob);
  }
  return NewsArray;
}

io.on("connection",function(socket){
console.log("có người đã đăng nhập với id là "+ socket.id);

// xử lý người dùng thoát khỏi room
socket.on("disconnect",function(){
  console.log("Có người đã out room"+ socket.id);
  for (var i=0;i<Chats.length;i++)
  {
    var c=Chats[i].Room;
    var Check = Rooms.some(item => item.Room === Chats[i].Room);
    // Phòng hiện t
    if(Check===false)
    {
    Chats=Chats.filter(item=>item.Room!==c);
    }
  }
  // đếm xem phòng đó trong mảng Rooms có còn tồn tại không, nếu còn thì dem sẽ bằng 1
  var dem=0;
  var rn;
  for (var i=0;i<Rooms.length;i++)
  {
    
    if (Rooms[i].ids===socket.id)
    {
      dem++;
      rn=Rooms[i].Room;
    }
  }
  // kiểm tra xem trong toàn bộ các room đang tồn tại, có room rn trên còn người không, nếu nó bằng -1 nghĩa là ko có người vậy thì xóa được
  var num1=-1;
  for (const [room, roomInfo] of socket.adapter.rooms) {
    const numberOfUsers = roomInfo.size;
    if (`${room}`===rn)
    {
      num1=numberOfUsers;
    }
  }
  if (dem===1&&num1===-1)
  {
    Chats=Chats.filter(item=>item.Room!==rn);
    GameQues=GameQues.filter(item=>item.Room!==rn);
  }
  
  Rooms=Rooms.filter(item=>item.ids!==socket.id);
  // console.log(Rooms);
  Players=Players.filter(item=>item.id!==socket.id);

  // Chats=Chats.filter(item=>item.Room!==data.RoomName)

  // console.log(Players);
  // console.log(Chats);
  io.sockets.emit("Server-Send-Room",Rooms);
  io.sockets.in(socket.room).emit("Check-people");
})
// end disconect
//begin vào phòng game

// begin tạo room
socket.on("Create-Room",function(data){
 
 //  dữ liệu được gửi từ client khi tạo room
  // console.log(data);
socket.on("disconnect",function(){
  io.sockets.in(socket.room).emit("Player-At-TheMoment",Players.filter(item=>item.Room===data.RoomName));
})
  socket.join(data.RoomName);
  socket.room=data.RoomName;
  console.log("có người tạo hoặc join room");
  // console.log(socket.adapter.rooms);
  // console.log("phòng trong server trước khi add");
  // console.log(Rooms);
  // begin gửi số lượng người về phòng
  socket.on("Create-Player",function()
  {
    for (const [room, roomInfo] of socket.adapter.rooms) {
      // Lấy số lượng người trong phòng
      const numberOfUsers = roomInfo.size;
      if (`${room}`===data.RoomName)
      {
        var p={
          Room:data.RoomName,
          Use:data.UserName,
          id:socket.id,
              }
              if (! Players.includes(p)) {
                Players.push(p);
            }
      io.sockets.in(socket.room).emit("Player-At-TheMoment",Players.filter(item=>item.Room===data.RoomName));
      }
  }
  io.sockets.in(socket.room).emit("chat-text",Chats.filter(item=>item.Room===data.RoomName));
  });
 
// end gửi số lượng người về phòng
  for ( room1 of socket.adapter.rooms.keys()) {
      // console.log(room1);
   var existingRoom = Rooms.find((r) => r.Room === room1);
    if (!existingRoom) {
  
    var object1={
      ids:socket.id,
      id:data.Code,
      UserName:data.UserName,
      Room:room1,
    };
    if (object1.UserName+"'s Room"===object1.Room)
    Rooms.push(object1);
  }
  }
  // console.log("phòng trong server sau khi add");
  // console.log("Rooms hiện tại");
  // console.log(Rooms);

  // begin gửi room về cho mọi người
io.sockets.emit("Server-Send-Room",Rooms);
// end gửi room về cho mọi người

// begin gửi dữ liệu chat
socket.on("send-hello",function(chat){
   chat.chat=data.UserName+': '+chat.chat;
  Chats.push(chat);
  io.sockets.in(socket.room).emit("send-hello-e",chat.chat);
})
// end gửi dữ liệu chat
// console.log(Players);
//   console.log("fa");
//   console.log(Chats);

// bắt đầu game
socket.on("DeleteRoomInfor",function(rn){
  Result=Result.filter(item=>item.room!==rn);
  socket.emit("DeleteDone");
})
socket.on("StartGame",function(data){

  if (data.round>33)
  {
      var maxUserScore=maxs(data.room);
      console.log(data.room);
       io.sockets.in(data.room).emit("EndGame",maxUserScore);
     
  }
  
  else
  {
  if (data.round===1)
  {

      // nếu là round đầu tiên thì tiến hành tạo GameQues lần đầu
    var Check = GameQues.some(item => item.Room === data.room);
    if (!Check)
  {
    var VocabularyArray=AddQuess(data.ques);
    for (var i=0;i<33;i++)
    {
      var roundInfor={
        turn:data.round,
        sc:rand(99,20),
        gPoint:rand(32,0),
        qu:rand(VocabularyArray.length-1,0),
      }
      roundInfor['VocabularyArray'] = VocabularyArray[roundInfor.qu];
     VocabularyArray=VocabularyArray.filter(item=>item.root!==VocabularyArray[roundInfor.qu]) ;
      var ob={
        roundInfor:roundInfor,
        Room:data.room
      }
      GameQues.push(ob);
    }
  }
  console.log(GameQues);
  }
  else
  {
    // nếu không phải đầu tiên thì tiến hành cập nhật lại turn 
  
    for (var i=0;i<GameQues.length;i++)
    {
      if (GameQues.Room===data.room){
        GameQues.roundInfor.turn=data.round;
      }
    }
  }
  var loca=GameQues.findIndex(function(item){
    return item.Room===data.room;
  });
   socket.emit("RoundInfor",GameQues[data.round-1+loca].roundInfor);

}
  // xem lại gửi room nào ra room đó oke
  // kết thúc tạo ques

//  sau khi truyền đi thì xóa từ đó ra khỏi mảng

})
socket.on("IAmRight",function(data1){

  var Check = Result.some(item => (item.room === data1.room&&item.turn===data1.turn));
  if (!Check)
  {

    var re=
    {
      winner:data1.username,
      room:data1.room,
      turn:data1.turn,
      score:data1.score,
    }
    Result.push(re);
    var ScoreAndUser=
    {
      username:data1.username,
      score:data1.score,
      mark:data1.Mark,
      MarkPercent:data1.MarkPercent,
    }
    io.sockets.in(data1.room).emit("TheWinner",ScoreAndUser);

  }

})


function maxs(rn)
{
  var ScoreOfUserInRoom=[];
  var maxUserScore={
    us:'1',
    score:-1,
  };
  console.log(Result.length);
  for (var i=0;i<Result.length;i++)
  if(Result[i].room===rn)
  {
    var obj=
    {
      us:Result[i].winner,
      score:Result[i].score,
    }
    if (ScoreOfUserInRoom.some(item=>item.us===obj.us))
    {
      for (var j=0;j<ScoreOfUserInRoom.length;j++)
      {
        if (ScoreOfUserInRoom[j].us===obj.us)
        {
          ScoreOfUserInRoom[j].score+=Result[i].score;
        }
      }
    }
    else
    ScoreOfUserInRoom.push(obj);
  }
  for (var i=0;i<ScoreOfUserInRoom.length;i++)
  {
    if (ScoreOfUserInRoom[i].score>maxUserScore.score)
    {
      maxUserScore.us=ScoreOfUserInRoom[i].us;
      maxUserScore.score=ScoreOfUserInRoom[i].score;
    }
  }
  return maxUserScore;
}
socket.on("GameEnd",function(rn){
 var maxUserScore=maxs(rn);
  // console.log("Bảng điểm")
  // console.log(maxUserScore);
  io.sockets.in(rn).emit("EndGame",maxUserScore);
  Result=Result.filter(item=>item.room!==rn);
})
//kết thúc game
});
// end tạo roomF
socket.on("iWantToKnowMember",function(data){
var num2=0;

  for (const [room, roomInfo] of socket.adapter.rooms) {
    // Lấy số lượng người trong phòng
    const numberOfUsers = roomInfo.size;
    if (`${room}`===data)
    {
     num2=numberOfUsers;
    }
}
io.sockets.in(data).emit("memberWating",num2);
})
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

