
const globalErrorHandler = (err,req,res,next)=>{
  // console.log(err.stack)
  //  console.log(err)
  const statusCode = err.statusCode ||500
  // console.log(err.message)
  res.status(statusCode).json({
    status:"error",
    message: err.message || "Internal Server Error",
  })

}
export { globalErrorHandler };
