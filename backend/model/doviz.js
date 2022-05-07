const mongoose = require('mongoose')

const DovizSchema = mongoose.Schema({
    data:{
        type:mongoose.Mixed
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('Doviz',DovizSchema)