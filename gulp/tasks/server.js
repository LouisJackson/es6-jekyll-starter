import gulp from 'gulp'
import { icons, scripts } from '../config'

const serverTask = () => {
  gulp.watch(icons.src, ['icons'])
  gulp.watch(scripts.vendorSrc, ['scripts:vendors'])
  gulp.watch(scripts.watchSrc, ['jshint'])
  gulp.watch(scripts.watchSrc, ['scripts:app'])
}

gulp.task('server', serverTask)

export default serverTask