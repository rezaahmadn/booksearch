const express = require('express')
const FavoriteController = require('../controllers/favorite-controller')
const router = express.Router()

router.post('/', FavoriteController.addFavorite)
router.get('/', FavoriteController.getFavorites)
router.delete('/:id', FavoriteController.deleteFavorite)

module.exports = router