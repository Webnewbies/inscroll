module.exports = function(grunt){
    grunt.initConfig({
        cssmin: {
            main: {
                files: [
                {'dist/stylesheets/styleIt.min.css': 'src/stylesheets/styleIt.css'},
                {'dist/stylesheets/device.min.css': 'src/stylesheets/device.css'},
                {'dist/scrollIt/scrollIt.min.css': 'src/scrollIt/scrollIt.css'}
                ]
            }
        },
        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            main: {
                files: [{'dist/index.html': 'src/index.html'}]
            }
        },
        uglify: {
            main: {
                files: [
                {'dist/javascripts/app.min.js': 'src/javascripts/app.js'},
                {
                    expand: true,
                    cwd: 'src/scrollIt/',
                    src: ['**/*.js'],
                    dest: 'dist/scrollIt/',
                    ext: '.min.js'
                }
                ]
            }
        },
        myth: {
            main: {
                files: [
                {'src/stylesheets/styleIt.css': 'src/stylesheets/style.css'},
                {'src/stylesheets/device.css': 'src/stylesheets/device.css'}
                ]
            }
        },
        imagemin: {
            main: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,
                    cwd: 'src/images/',
                    dest: 'dist/images/',
                    src: '*.png',
                    ext: '.png'
                }]
            }
        }, 
        watch: {
            html: {
                files: 'src/index.html',
                tasks: ['htmlmin'],
                options: {
                    reload: true,
                    livereload: true
                }
            },
            css: {
                files: 'src/**/*.css',
                tasks: ['myth', 'cssmin'],
                options: {
                    reload: true,
                    livereload: true
                }
            }, 
            js: {
                files: 'src/**/*.js',
                tasks: ['uglify'],
                options: {
                    reload: true,
                    livereload: true
                }
            }
        }
    });

grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-htmlmin');
grunt.loadNpmTasks('grunt-myth');
grunt.registerTask('default', ['watch']);
}