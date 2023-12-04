//trang điều phối chung đến các trang 
const homeRouter = require('./Home1');
const sitesRouter = require('./site');
const detailRouter = require('./detail');
const meRouter = require('./me');
function route(app) {
    app.use('/home', homeRouter);
    app.use('/me', meRouter);
    app.use('/detail', detailRouter);
    app.use('/', sitesRouter);
}
module.exports = route;
