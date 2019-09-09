var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const fileUpload = require('express-fileupload')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var contactRouter = require('./routes/contact');
var postRouter = require('./routes/post');
// var createRouter = require('./routes/create');
var singleRouter = require('./routes/single');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/about', aboutRouter)
app.use('/users', usersRouter);
app.use('/contact', contactRouter);
app.use('/post', postRouter);
// app.use('/create', createRouter);
app.use('/single', singleRouter);

const validateCreatePostMiddleware = (req, res, next) => {
console.log('I am for all route middleware')
next()
}

app.use('/create/new', validateCreatePostMiddleware);
// Form Post
const postModel = require('./models/Post')
app.use(fileUpload());
app.get('/create', function(req, res, next) {
  res.render('create', { title: 'Express' });
});

/* Post Create page. */
app.post('/create/new', function(req, res, next) {
  
      const {image} = req.files;
      console.log(req.body)
      
      image.mv(path.resolve(__dirname, 'public/images', image.name), (error) => {
          postModel.create({
            ...req.body, 
            image: image.name
          }, (err, post) => {
             res.redirect('/');
      });
    })
  });


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
