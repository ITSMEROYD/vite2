const mongoose = require('mongoose')

 const connectDB = (url) => {
  return mongoose.connect(url) 
}

module.exports = connectDB 




/* mongoose.connect(dbURI)
.then(() => {
    app.listen(3001, () => {
        console.log('Server connected to port 3001 and MongoDb')
    })
})
.catch((error) => {
    console.log('Unable to connect to Server and/or MongoDB', error)
}) 
 */
/* export default connectDB 
 */