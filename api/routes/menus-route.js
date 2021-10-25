const express = require('express')

const MovieCtrl = require('../controllers/menu-ctrl')

const router = express.Router()


router.get('/menus', MovieCtrl.getMenus)
router.post('/menu', MovieCtrl.insertMenu)

module.exports = router