let gulp                = require("gulp"),
    gutil               = require("gulp-util"),
    file                = require("gulp-file"),
    pug                 = require("gulp-pug"),
    stylus              = require("gulp-stylus"),
    config              = require("common-config"),
    gulpConfig          = require("./gulp.config"),
    del                 = require("del");

/****************************************************************
* Clean Tasks : remove destination folders
****************************************************************/
gulp.task("clean", function() {
    return del.sync([gulpConfig.dest+"/*"]);
});


/****************************************************************
* Assets Task : copy assets to dist
****************************************************************/
gulp.task("assets", function() {
    return gulp.src(gulpConfig.src.assets)
    .pipe(gulp.dest(gulpConfig.dest+"/assets"));
});

gulp.task("assets:images", function() {
    return gulp.src(gulpConfig.src.images)
    .pipe(gulp.dest(gulpConfig.dest+"/assets/images"));
});

/****************************************************************
* Pug Task : compile pug templates
****************************************************************/
gulp.task('stylus', function () {
    return gulp.src(gulpConfig.src.styles)
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest(`${gulpConfig.dest}/css/`));
});


/****************************************************************
* Pug Task : compile pug templates
****************************************************************/
gulp.task("pug", function() {
    return gulp.src(gulpConfig.src.html)
    .pipe(pug({
        locals: config.webinfo
    }))
    .pipe(gulp.dest(gulpConfig.dest));
});


/************************************************************
 * Config Tasks : Write a config to config folder
 ************************************************************/
gulp.task("config", function () {
    let str = ("module.exports = " + JSON.stringify(config, null, 4) + ";");

    return file("index.js", str, { src:true })
    .pipe(gulp.dest("./config"));
});


/****************************************************************
* Vendor Task
****************************************************************/
gulp.task("vendor", function() {
    return [
        // CSS assets
        gulp.src(gulpConfig.vendor.css)
        .pipe(gulp.dest(gulpConfig.dest+"/css/")),

        // JS assets
        gulp.src(gulpConfig.vendor.js)
        .pipe(gulp.dest(gulpConfig.dest+"/js/"))
    ];
});


/****************************************************************
* Watch Task
****************************************************************/
gulp.task("watch", [
    "default"
], ()=> {
    gulp.watch(["./src/assets/*"], ["assets"]);
    gulp.watch(["./src/assets/images/*"], ["assets:images"]);
    gulp.watch(["./src/**/*.pug"], ["pug"]);
    gulp.watch(["./src/**/*.styl"], ["stylus"]);
});


/****************************************************************
* Default Task
****************************************************************/
gulp.task("default", [
    "clean",
    "config",
    "vendor",
    "pug",
    "stylus",
    "assets",
    "assets:images",
]);
