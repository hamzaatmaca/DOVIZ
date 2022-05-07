const mongoose = require('mongoose')

const AltinSchema = mongoose.Schema({
    data:{
        type:mongoose.Mixed
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('Altin',AltinSchema)