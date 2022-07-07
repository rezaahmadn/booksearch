const errorHandler = (error, req, res, next) => {
  let message = "Internal server error"
  let code = 500

  if(error.message){
    message = error.message
    code = 400
  }

  if(error.name === 'BSONTypeError'){
    message = "Not found"
    code = 404
  }

  res.status(code).json({
    error:message
  })
}

module.exports = errorHandler