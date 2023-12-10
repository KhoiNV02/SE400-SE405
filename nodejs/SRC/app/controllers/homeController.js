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
  show(req, res,next) {
    Room.find({})
      .then((rooms) => {
        if (!rooms) {
          // Trường hợp không tìm thấy phòng
          return res.status(404).send('Không tìm thấy phòng');
        }

        // Trả về dữ liệu phòng dưới dạng JSON hoặc thực hiện các xử lý khác
        res.json(mutipleMongooseToObject(rooms));
      })
      .catch((error) => next(error));
  }
}
module.exports = new NewsController();
