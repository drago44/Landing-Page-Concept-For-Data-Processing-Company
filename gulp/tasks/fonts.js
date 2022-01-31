import fs from 'fs'
import fonter from 'gulp-fonter'
import ttf2woff2 from 'gulp-ttf2woff2'

export const fontsMovingWoff = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.woff`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'FONTS',
                message: "Error: <%= error.message%>"
            })
        ))
        .pipe(app.gulp.dest(`${app.path.build.fonts}`))
}

export const fontsMovingWoffTwo = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.woff2`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'FONTS',
                message: "Error: <%= error.message%>"
            })
        ))
        .pipe(app.gulp.dest(`${app.path.build.fonts}`))
}
