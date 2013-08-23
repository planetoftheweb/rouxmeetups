module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({

    compass: {
      dev: {
        options: {
          compress: true
        }
      }
    },
    uglify: {
      dev: {
        files: {
          '_/js/script.js' : ['_/components/js/*.js']
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
        tasks: ['uglify:dev']
      },
      /* watch our files for change, reload */
      livereload: {
        files: ['*.html', '_/css/*.css', '_/images/*', '_/js/*.js'],
        options: {
          livereload: true
        }
      },
    }

  });
  grunt.registerTask('default', 'watch');
}