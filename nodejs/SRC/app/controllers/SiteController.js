class SiteController {
  //[get]/news
  index(req, res,next) {
  
      // console.log(req.body);
      res.render('home');
    // res.render('home');
}
}
module.exports = new SiteController();
