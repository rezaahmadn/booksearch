const { getDB } = require('../config/mongodbConnection')
const { ObjectId } = require('mongodb')

class Favorite{
  static favorite(){
    return getDB().collection('favorites')
  }

  static async create(favorite){
    try {
      const response = await this.favorite().insertOne(favorite)  
      return response    
    } catch (error) {
      throw error
    }
  }

  static async read(){
    try {
      const favorites = await this.favorite().find().toArray()
      return favorites
    } catch (error) {
      throw error
    }
  }

  static async delete(id){
    try {
      const response = await this.favorite().deleteOne({ id })
      return response
    } catch (error) {
      throw error
    }
  }
}

module.exports = Favorite