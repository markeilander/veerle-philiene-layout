module.exports = function (js_src, css_src) {
  return {
    js: {
      files: [
        js_src + '**/*.coffee',
        js_src + '**/*.js',
        '!' + js_src + 'build/*.js',
      ],
      tasks: ['coffee:compile', 'concat:build', 'uglify:minify']
    },
    
    css: {
        files: [
           css_src + '*.css',
           css_src + '**/*.css' 
        ],
        tasks: ['concat:build', 'cssmin:minify']
    }
  }
}
