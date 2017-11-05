const mongoose = require('mongoose')

module.exports = {
    'connect' : function(db){
        mongoose.connect(db);
        console.log('Connected to database!')
        return mongoose;      
    }
}