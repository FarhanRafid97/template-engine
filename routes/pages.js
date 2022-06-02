const express = require('express');
const { home, about, article } = require('../controllers/pagesControllers');
const router = express.Router();

/* GET home page. */
router.get('/', home);
router.get('/about', about);
router.get('/article', article);

module.exports = router;
