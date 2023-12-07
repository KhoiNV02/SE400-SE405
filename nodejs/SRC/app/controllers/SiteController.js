const Course = require('../models/CourseModel');
const {mutipleMongooseToObject}=require('../../ultil/mongoose');
class SiteController {
  //[get]/news
  index(req, res,next) {
   Course.find({})
   .then(courses =>
    {
      // console.log(req.body);
      res.render('home',{
        courses:mutipleMongooseToObject(courses)
      });
    })
   .catch(error => next(error));
    // res.render('home');
  }
}
module.exports = new SiteController();
