const Room = require('../models/RoomModel');
const {mongooseToObject, mutipleMongooseToObject}=require('../../ultil/mongoose');
class MeController {
  //[get]/news

  JoinRoom(req, res) {
    var idPlayer=req.query.idplayer;
      var UserName=req.query.Username;
      var Loca=req.query.Loca;
res.render('HarvestFestival/HarvestFestivalStartRoom',{idPlayer,UserName,Loca});
  }
  JoinGame(req,res)
  { 
    var id=req.params.id;
    console.log(id);
    res.render('HarvestFestival/HarvestFestivalWaitingRoom',{id});
  }
  Save1(req,res)
  {
    var data = req.body;
    var keys=`[`;
     keys += Object.keys(data);
     keys+=`]`;
      var dataArray = JSON.parse(keys);
    console.log(dataArray.length);
    
    for (var i=0;i<dataArray.length;i++)
    {
      var bien={
        Code:dataArray[i].id,
        Room:dataArray[i].Room,
      }
      console.log(bien);
    const room=new Room(bien);
   room.save()
    .then(()=>{
    console.log("lưu thành công");
    // console.log(dataArray[i].id);
  })
    .catch((error)=>{
     res.send(error);
    })
  }}


}
module.exports = new MeController();
