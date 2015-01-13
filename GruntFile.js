module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            css_motherfucker: {
                files: [
                    {'dist/scrollIt.min.css': ['src/scrollIt.css']}
                ]
            }
        },
        uglify: {
            js_motherfucker: {
                files: [
                    {'dist/scrollIt.min.js': ['src/scrollIt.js']},
                    {'dist/polyfill.min.js': ['src/polyfill.js']}
                ]
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('default', ['uglify', 'cssmin']);
}