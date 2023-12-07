const Room = require('../models/RoomModel');
const {mongooseToObject, mutipleMongooseToObject}=require('../../ultil/mongoose');
class NewsController {
  //[get]/news
  index(req, res,next) {
    
    const Username = { Username: req.query.variable };
   Room.find({})
   .then(rooms =>
    {
      res.render('home1',{
        rooms:mutipleMongooseToObject(rooms),
        Username:Username
      });
    })
   .catch(error => next(error));
  }
  show(req, res) {
    res.send('trang con ở trong nè');
  }
}
module.exports = new NewsController();
