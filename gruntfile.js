module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({

    compass: {
      dev: {
        options: {
          config: 'config.rb',
          force: true
        }
      }
    },

    watch: {
      sass: {
        files: ['_/components/sass/*.scss', '_/css/*.css'],
        tasks: ['compass:dev']
      },
      /* watch and see if our javascript files change, or new packages are installed */
      js: {
        files: ['_/componenet/js/*.js', 'components/js/*.js'],
        tasks: ['uglify']
      },
      /* watch our files for change, reload */
      livereload: {
        files: ['*.html', '_/css/*.css', '_/images/*', 'assets/js/{script.js}'],
        options: {
          livereload: true
        }
      },
    }

  });
  grunt.registerTask('default', 'watch');
}