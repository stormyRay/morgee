var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var sass = require('gulp-sass');
var replace = require('gulp-replace');
var watchify = require('watchify');
var babelify = require('babelify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');

var path = {
    HTML: 'src/pickimage.html',
    MINIFIED_OUT: 'pickImage.build.min.js',
    OUT: 'pickImage.build.js',
    DEST: 'dist',
    DEST_BUILD: 'dist/build',
    DEST_SRC: 'dist/build',
    JS_ENTRY_POINT: './src/entries/pickImage.js',
    SCSS_ENTRY_POINT: './src/styles/pickImage.scss',
    CSS_OUT: 'pickImage.css',
    RESOURCES_SRC: ['resources/**/*'],
    RESOURCES_DEST: 'dist/resources'
};
/*////////////////////////////////////////////////////////////////////////////////
 * Tasks for distribute a product, including
 *  - build: transpile jsx to js, package into 1 file & minimize the js file;
 *  - build-debug: transpile jsx to js, package into 1 file without minimizing;
 *  - replaceHTML: replace js & css import tags in the HTML;
 *  - replaceHTML-debug: replace js (for debug) & css import tags in the HTML;
 *  - sass: convert sass/scss to css and package into 1 file;
 *  - copyResources: simply copy all the resources(fonts, images, ...) into dist
            folder.
 * Triggered by:
 *      $ gulp production
 *      or
 *      $ gulp debug
 */////////////////////////////////////////////////////////////////////////////////
gulp.task('build', function () {
    browserify({
        entries: [path.JS_ENTRY_POINT],
        extensions: ['.js', '.jsx'],
        //transform: [reactify],
        debug: true
    })
    .transform(babelify.configure({
                presets: ["react"]
    }))
    .bundle()
    //.pipe(source(path.OUT))
    //.pipe(gulp.dest(path.DEST))
    .pipe(source(path.MINIFIED_OUT))
        .pipe(streamify(uglify(path.MINIFIED_OUT)))
        .pipe(gulp.dest(path.DEST_BUILD))
});

gulp.task('build-debug', function () {
    browserify({
        entries: [path.JS_ENTRY_POINT],
        extensions: ['.js', '.jsx'],
        //transform: [reactify],
        debug: true
    })
    .transform(babelify.configure({
                presets: ["react"]
    }))
    .bundle()
    .pipe(source(path.OUT))
    .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('replaceHTML', function(){
    gulp.src(path.HTML)
        .pipe(htmlreplace({
            'css': 'build/' + path.CSS_OUT,
            'js': 'build/' + path.MINIFIED_OUT,
            'debug': ''
        }))
        .pipe(gulp.dest(path.DEST));
});
gulp.task('replaceHTML-debug', function(){
    gulp.src(path.HTML)
        .pipe(htmlreplace({
            'css': 'build/' + path.CSS_OUT,
            'js': 'build/' + path.OUT
        }))
        .pipe(gulp.dest(path.DEST));
});

gulp.task('sass', function () {
    gulp.src(path.SCSS_ENTRY_POINT)
        .pipe(sass().on('error', sass.logError))
        .pipe(replace('../../resources', '../resources'))
        .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('copyResources', function(){
    gulp.src(path.RESOURCES_SRC)
        .pipe(gulp.dest(path.RESOURCES_DEST));
})
/*//////////////////////////////////////////////////////////////////////////////
 * Simple copy & transpling work
 * Triggered by:
 *      $ gulp
 *      or
 *      $ gulp watch
 *//////////////////////////////////////////////////////////////////////////////
gulp.task('copy', function(){
    gulp.src(path.HTML)
        .pipe(gulp.dest(path.DEST));
});

gulp.task('watch', function() {
    gulp.watch(path.HTML, ['copy']);
var watcher  = watchify(browserify({
        entries: [path.JS_ENTRY_POINT],    
        extensions: ['.js', '.jsx'],
        paths: ['./src/', './'],
        //transform: [reactify],
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true
    }).transform(babelify.configure({
                presets: ["react"]
    })));

return watcher.on('update', function () {
        gulp.start(['debug']);
    });
});


/*////////////////////////////////////////////////////////////////////////////////
 * gulp task binding
 */////////////////////////////////////////////////////////////////////////////////
gulp.task('default', ['debug']);
gulp.task('production', ['copyResources', 'replaceHTML', 'sass', 'build']);
gulp.task('debug', ['copyResources', 'replaceHTML-debug', 'sass', 'build-debug']);