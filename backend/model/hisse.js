const mongoose = require('mongoose')

const HisseSchema = mongoose.Schema({
    data:{
        type:mongoose.Mixed
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('Hisse',HisseSchema)