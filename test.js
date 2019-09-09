const mongoose = require('mongoose');

const postModel = require('./models/Post');

mongoose.connect('mongodb://localhost:27017/node-js-test-blog', {useNewUrlParser: true});
  
// postModel.create({
//     title: 'My Second Blog Post',
//     description: 'Second Blog Post Description',
//     content: 'Second Lorem Ipsum dolor'
// },(err, post) => {
//   console.log(err, post)
// });

postModel.findByIdAndDelete('5d75c43988d87708f47ae3de').exec((err, data) => {
    console.log(err, data)
})