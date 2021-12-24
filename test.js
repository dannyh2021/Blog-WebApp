const mongoose = require('mongoose')

const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})

var id = '61c525425afafe9647bdf2cf'

BlogPost.findByIdAndUpdate(id, {
    title: 'Updated title'
}, (error, blogspot) => {
    console.log(error, blogspot)
})