// a gulp + browserSync file to proxy https://hysteriaetc.local to localhost:3000 when build folder changes

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('default', gulp.series(function() {
    browserSync.init({
        proxy: { target: "https://hysteriaetc.local" },
        port: 3000,
        open: true,
        notify: true,
        httpModule: 'http2',
        https: true,
        injectChanges: true,
        browser: "google chrome",
        snippetOptions: {
            rule: {
                match: /<\/body>/i,
                fn: function(snippet, match) {
                    return snippet + match;
                }
            }
        },
        files: ['build/**/*']
    });

    gulp.watch('build/**/*').on('change', reload);
}));
