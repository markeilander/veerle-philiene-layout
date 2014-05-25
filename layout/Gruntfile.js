var paths = {

  js_src:   'javascripts/',
  js_dest:  './public/assets/javascripts/',

  css_src:  'styles/',
  css_dest: './public/assets/stylesheets/'
}

module.exports = function(grunt) {

  /*  Load tasks  */

  require('load-grunt-tasks')(grunt);

  /*  Configure project  */

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Setup tasks
    concat:   require('./tasks/concat')(paths.js_src, paths.js_dest),
    uglify:   require('./tasks/uglify')(paths.js_dest),
    cssmin:   require('./tasks/cssmin')(paths.css_dest),
    watch:    require('./tasks/watch')(paths.js_src, paths.css_src),
  });
  
  /*  Register tasks  */
  
  // Default task.
  grunt.registerTask('default', ['concat:build', 'uglify:minify', 'cssmin:minify']);

  grunt.registerTask('js', ['concat:build', 'uglify:minify']);
};
