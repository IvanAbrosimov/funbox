const { src, dest, series, watch } = require("gulp");

const htmlMin = require("gulp-htmlmin");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const image = require("gulp-image");
const babel = require("gulp-babel");
const notify = require("gulp-notify");
const uglify = require("gulp-uglify-es").default;
const sourcemaps = require("gulp-sourcemaps");
const del = require("del");
const browserSync = require("browser-sync").create();

const cleanDist = () => {
  return del(["dist"]);
};

const styles = () => {
  return src("src/**/*.css")
    .pipe(sourcemaps.init())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(sourcemaps.write())
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
};

const htmlMinify = () => {
  return src("src/**/*.html")
    .pipe(
      htmlMin({
        collapseWhitespace: true,
      })
    )
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
};

const scripts = () => {
  return src("src/js/*.js")
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify().on("error", notify.onError()))
    .pipe(sourcemaps.write())
    .pipe(dest("dist/js"))
    .pipe(browserSync.stream());
};

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: "dist",
    },
  });
};

const images = () => {
  return src("src/img/**/*.png").pipe(image()).pipe(dest("dist/img"));
  // .pipe(browserSync.stream())
};

const fonts = () => {
  return src("src/fonts/**/*.woff").pipe(dest("dist/fonts"));
};

watch("src/**/*.html", htmlMinify);
watch("src/**/*.css", styles);
// watch('src/img/*.png', images)
watch("src/js/*.js", scripts);

exports.htmlMinify = htmlMinify;
exports.default = series(
  cleanDist,
  htmlMinify,
  scripts,
  styles,
  fonts,
  images,
  watchFiles
);
