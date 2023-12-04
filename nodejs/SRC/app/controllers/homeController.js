class NewsController {
  //[get]/news
  index(req, res) {
    res.render('home1');
  }
  show(req, res) {
    res.send('trang con ở trong nè');
  }
}
module.exports = new NewsController();
