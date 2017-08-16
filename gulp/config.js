const APP_DEST = 'assets'

module.exports = {

  appDest: APP_DEST,

  icons: {
    src: '_icons/*.svg',
    dest: APP_DEST + '/images/',
    spriteConfig: {
      mode: {
        symbol: {
          render: {
            css: false,
            scss: false
          },
          dest: 'sprite',
          prefix: '.svg--%s',
          sprite: 'sprite.svg',
          example: false
        },
      }
    }
  },

  scripts: {
    watchSrc: '_js/**/*.js',
    src: '_js/app.js',
    vendorSrc: '_js/vendors/*.js',
    dest: APP_DEST + '/scripts/'
  }
}