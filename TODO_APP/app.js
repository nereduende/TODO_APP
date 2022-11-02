const express = require('express');
const routes = require('./routes/routes');
const morgan = require('morgan');
const cons = require('consolidate');

const app = express();

app.engine('dust', cons.dust);
app.set('view engine', 'dust');
app.set('views', __dirname + '/templates');

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));



app.use(routes)

// app.use(function(req, res, next) {
//     // catch 404 and forward to error handler
//     next(createError(404));
//     });
    
// app.use(function(err, req, res, next) {
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//     res.status(err.status || 500);
//     res.render('error');
// });

module.exports = app;

