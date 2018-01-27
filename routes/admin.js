const express = require('express');
const router = express.Router();
const admin = require('../controllers/adminController');





router.post('/register', admin.register);
router.post('/login', admin.login)
router.post('/addRecipe',admin.addRecipe);
module.exports = router;