const mongose = require('mongoose')

const connectionString = ""

const connectDB = (url) => {
    return mongose
    .connect(connectionString, 
        {
            useNewUrlParser:true,
            useCreateIndex:true,
            useFindAndModify:false,
            useUnifiedTopology:true,
        })
}

module.exports = connectDB