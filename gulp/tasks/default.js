import gulp from 'gulp'
import runSequence from 'run-sequence'

const defaultTask = () => (
  runSequence('icons', 'scripts:vendors', 'scripts:app', 'server')
)

gulp.task('default', defaultTask)

export default defaultTask