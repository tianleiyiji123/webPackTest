var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config');
gulp.task('js', function() {
    return gulp.src(['main1.js','main1.js'])
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('dist/'));
});

//Ä¬ÈÏÈÎÎñ
gulp.task('default', ['js'], function(){


    //¼àÌıjs
  var watcher =  gulp.watch('./main1.js', ['js']);
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });



});