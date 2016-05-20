module.exports = function(grunt) {

    grunt.initConfig({
        /*
        jshint: {
            files: ['Gruntfile.js', '*'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },

        watch: {
            files: ['Gruntfiles.js', 'src/*'],
            tasks: ['connect']
        },
        */
        connect: {
            server: {
                options: {
                    port: 7070,
                    base: 'src',
                    keepalive: true
                }
            }
        }
    });




    //grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-connect');

    //grunt.registerTask('default', ['jshint']);
    grunt.registerTask('default', ['connect']);

};
