const Favorite = require('../models/favorite')

class FavoriteController{
  static async addFavorite(req, res, next){
    try {
      const { id:BookId, title, thumbnail, authors, rating } = req.body

      const response = await Favorite.create({ BookId, title, thumbnail, authors, rating })
      res.status(201).json({
        _id: response.insertedId,
        BookId,
        title,
        thumbnail,
        authors,
        rating
      })
    } catch (error) {
      next(error)
    }
  }

  static async getFavorites(req, res, next){
    try {
     const favorites = await Favorite.read()
     res.status(200).json(favorites) 
    } catch (error) {
      next(error)
    }
  }
}

module.exports = FavoriteController