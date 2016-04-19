var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

var ENV = process.env.NODE_ENV;

// build public/main.css
gulp.task('styles', function() {
    console.log('Reloading styles...');
    
    gulp.src('app/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('public'))
        .pipe(browserSync.stream());
});

// watch for scss changes
gulp.task('serve', ['styles'], function() {
    require('chokidar-socket-emitter')({port: 8090});
    
    var express = require('express');
    var app = express();
    
    app.get('/', function(req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.sendFile(__dirname + '/index.html');
    });
    
    // directory to serve static content
    app.use('/', express.static(__dirname + '/'));
    
    // serve index.html on refresh
    app.route('/*').get(function(req, res) { 
        res.sendFile(__dirname + '/index.html');
    });
    
    app.listen(3000, 'localhost');
    
    browserSync.init({
        open: false,
        reloadOnRestart: true,
        notify: false,
        proxy: {
            target: 'http://localhost:3000'
        }
    });
    
    gulp.watch('app/**/*.scss', ['styles'], function() {
        browserSync.reload;
    });
    // gulp.watch('app/**/*.js').on('change', browserSync.reload);
    
});

//NODE_ENV=development
gulp.task('development', ['serve']);

//NODE_ENV=production
gulp.task('production', ['styles']);

gulp.task('default', 
    [ENV === 'prod' ? 'production' : 'development']
);