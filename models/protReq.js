const mongoose = require('mongoose');

const schema = mongoose.Schema;

const requestSchema = new schema({
    raisedBy:{
        type: String,
        required: true
    },
    reason:{
        type: String,
        required: true
    },
    protectionToBeBypassed:{
        type:String,
        required:true
    },
    ciApprove:{
        type:Boolean,
        default: false
    },
    ciReject:{
        type:Boolean,
        default: false
    }, 
    protectionBypassed:{
        type:Boolean,
        default: false  
    },
    protectionNormalised:{
        type:Boolean,
        default: false
    }
})

module.exports = mongoose.model('RequestBypass', requestSchema);