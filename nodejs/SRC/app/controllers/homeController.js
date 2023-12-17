const Room = require('../models/RoomModel');
const Vocabulary=require('../models/VoccabularyModel');
const {mongooseToObject, mutipleMongooseToObject}=require('../../ultil/mongoose');
class NewsController {
  //[get]/news
  // hiển thị trang web 
  index(req, res,next) {
    
    const Username = { Username: req.query.variable };
   
      res.render('home1',{Username});
  }
 getNewRoom(req, res,next) {
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
async  database(req,res,next)
  {
    const dataToSave = req.query.vocabulary;
// console.log(dataToSave);
for (const word of dataToSave)
{
await Vocabulary.create({ Word:word });
}
// await Vocabulary.create({dataToSave});
    // Lưu từng từ vựng vào cơ sở dữ liệu
    // for (const word of dataToSave) {
    //   await Vocabulary.create({ word });
    // }

    res.status(200).json({ message: 'Data saved to MongoDB successfully' }); 
  }

  
}
module.exports = new NewsController();
