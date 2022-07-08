const Favorite = require('../models/favorite')

class FavoriteController{
  static async addFavorite(req, res, next){
    try {
      const { id, title, thumbnail, authors, rating } = req.body

      const response = await Favorite.create({ id, title, thumbnail, authors, rating })
      res.status(201).json({
        _id: response.insertedId,
        id,
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

  static async deleteFavorite(req, res, next){
    try {
      const { id } = req.params
      const deleted = await Favorite.delete(id)
      if(!deleted.deletedCount) throw new Error('Not found')
      res.status(200).json({ message: 'Deleted' })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = FavoriteController