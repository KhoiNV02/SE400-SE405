class NewsController {
  //[get]/news
  index(req, res) {
    const Username = { Username: req.query.variable };
    res.render('home1',Username);
  }
  show(req, res) {
    res.send('trang con ở trong nè');
  }
}
module.exports = new NewsController();
