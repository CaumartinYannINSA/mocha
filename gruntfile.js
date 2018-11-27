module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/*.js',
        dest: 'dist/script.min.js'
      }
    },
    htmlbuild:
    {
            dist:
            {
                src: 'html/index.html',
                dest: 'dist/',
            }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-html-build');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'htmlbuild']);

};
