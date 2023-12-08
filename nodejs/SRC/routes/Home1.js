var express = require('express');
const router = express.Router();

const homeController = require('../app/controllers/homeController');

router.get('/nho', homeController.show);
router.get('/', homeController.index);

module.exports = router;