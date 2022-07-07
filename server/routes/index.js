const express = require('express')
const router = express.Router()
const favorite = require('./favorite')

router.get('/', (req, res)=>{
  res.status(200).json({message:"worked!!"})
})
router.use('/favorites', favorite)

module.exports = router