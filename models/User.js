const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    emial:{
        type: String,
        trim: true, //공백제거
        uniqe: 1
    },
    password: {
        type: String,
        minlengh: 5
    },
    lastname: {
        type: String,
        maxlength:50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp:{
        type: Number
    }
})

// 위 스키마를 모델로 감싸줌
const User = mongoose.mode('User', userschema)

//다른파일에도 쓰기위해
module.exports = { User }