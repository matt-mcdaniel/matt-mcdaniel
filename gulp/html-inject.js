
var deleteLines = require('gulp-delete-lines');
var inject = require('gulp-inject');
var debug = require('gulp-debug');

module.exports = function(ENV, gulp) {
    
    gulp.task('html-inject', function() {
        
        if (ENV === 'dev') {
            
            gulp.src('./index.html')
                .pipe(deleteLines({ 'filters': [
                    /<script.*>.*<\/script\>/i
                ]}))
                .pipe(inject(gulp.src([
                    'jspm_packages/system.js',
                    'config.js',
                    'src/js/entry.js'
                ], { read: false }), {
                    starttag: '<!-- inject:dev -->',
                    endtag: '<!-- endinject:dev -->',
                }))
                .pipe(gulp.dest('.'));
            
        } else {
            
            gulp.src('./index.html')
                .pipe(deleteLines({ 'filters': [
                    /<script.*>.*<\/script\>/i
                ]}))
                .pipe(inject(gulp.src('', { read: false }), {
                    starttag: '<!-- inject:prod -->',
                    endtag: '<!-- endinject:prod -->',
                    transform: function() {
                        return '<script src="public/main.bundle.js"></script>';
                    }
                }))
                .pipe(gulp.dest('.'));
        }
    });
    
    
	return gulp;
}