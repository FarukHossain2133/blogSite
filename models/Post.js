const mongoose =  require('mongoose');
//  mongoose.connect('mongodb://localhost:27017/postCollection', {useNewUrlParser: true, useCreateIndex: true} || 'mongodb+srv://Faruk:Faruk01936@cluster0-fqsei.mongodb.net/BlogPost?retryWrites=true&w=majority', {useNewUrlParser: true})
 mongoose.connect('mongodb+srv://Faruk:Faruk01936@cluster0-fqsei.mongodb.net/BlogPost?retryWrites=true&w=majority', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
const conn =  mongoose.connection;

const blogPostSchema =  new mongoose.Schema({
    title: String,
    description: String,
    content: String,
    userName: String,
    image: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const blogPostModel =  mongoose.model('blogPost', blogPostSchema);

module.exports =  blogPostModel; 