const room = require('../models/RoomModel');
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
    const data = req.body;
    console.log(typeof(data));
    res.send(data);
  }


}
module.exports = new MeController();
