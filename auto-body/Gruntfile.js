module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        def_banner: '/*!\n' +
        ' * <%= pkg.name %>\n' +
        ' * <%= pkg.url %>\n' +
        ' * @author <%= pkg.author %>\n' +
        ' * @author-url <%= pkg.authorUrl %>\n' +
        ' * @version <%= pkg.version %>\n' +
        ' * @updated <%= grunt.template.today("yyyy-mm-dd") %> */\n',

        /**
         * Project plugins
         */

        cssmin: {
            options: {
                root: '../css',
            },
            target: {
                files: [{
                    'output.css': 'design.css',
                    expand: true,
                    cwd: 'css',
                    //src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },

        compass: { // Compile Sass to CSS using Compass
            dev: {
                options: {
                    banner: '<%= def_banner %>',
                    relativeAssets: true,
                    noLineComments: true,
                    sassDir: 'scss',
                    cssDir: 'css',
                    imagesDir: 'img',
                    fontsDir: 'fonts/',
                    environment: 'development',
                    specify: 'scss/design.scss'
                }
            },
            prod: {
                options: {
                    banner: '<%= def_banner %>',
                    relativeAssets: true,
                    noLineComments: true,
                    sassDir: 'scss',
                    cssDir: 'css',
                    imagesDir: 'img',
                    fontsDir: 'fonts/',
                    environment: 'production',
                    specify: 'scss/design.min.scss'
                }
            }
        },

        concat: { // Concatenate files.
            options: {
                separator: ';'
            },
            script: {
                src: [
                    // for including all JS:
                    'assets/javascripts/foundation/foundation.js',
                    'assets/javascripts/foundation/foundation.abide.js',
                    'assets/javascripts/foundation/foundation.accordion.js',
                    'assets/javascripts/foundation/foundation.alert.js',
                    'assets/javascripts/foundation/foundation.clearing.js',
                    'assets/javascripts/foundation/foundation.dropdown.js',
                    'assets/javascripts/foundation/foundation.equalizer.js',
                    'assets/javascripts/foundation/foundation.interchange.js',
                    'assets/javascripts/foundation/foundation.joyride.js',
                    'assets/javascripts/foundation/foundation.magellan.js',
                    'assets/javascripts/foundation/foundation.offcanvas.js',
                    'assets/javascripts/foundation/foundation.orbit.js',
                    'assets/javascripts/foundation/foundation.reveal.js',
                    'assets/javascripts/foundation/foundation.slider.js',
                    'assets/javascripts/foundation/foundation.tab.js',
                    'assets/javascripts/foundation/foundation.tooltip.js',
                    'assets/javascripts/foundation/foundation.topbar.js'
                ],
                dest: 'js/libs/foundation.js'
            },
            modernizr: {
                src: [
                    'assets/javascripts/modernizr.js'
                ],
                dest: 'js/libs/modernizr.js'
            }
        },

        jshint: { // Validate files with JSHint.
            all: ['Gruntfile.js', 'js/*.js']
        },

        uglify: { // Minify files with UglifyJS.
            options: {
                mangle: {
                    except: ['jQuery']
                },
                banner: '/*!\n' +
                    ' * <%= pkg.name %>\n' +
                    ' * <%= pkg.url %>\n' +
                    ' * @author <%= pkg.author %>\n' +
                    ' * @author-url <%= pkg.authorUrl %>\n' +
                    ' * @version <%= pkg.version %>\n' +
                    ' * @updated <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: ['js/libs/**/*.js', 'js/*.js'],
                dest: 'js/build/script.min.js'
            }
        },

        watch: { // Run predefined tasks whenever watched files change.
            css: {
                files: ['scss/*.scss'],
                tasks: ['compass'/*, 'cssmin'*/],
                options: {
                    // Start a live reload server on the default port 35729
                    livereload: true // <script src="//localhost:35729/livereload.js"></script>
                }
            },
            js: {
                files: ['js/libs/**/*.js', 'js/*.js', 'Gruntfile.js' ],
                tasks: ['concat', 'jshint', 'uglify' ],
                options: {
                    // Start a live reload server on the default port 35729
                    livereload: true // <script src="//localhost:35729/livereload.js"></script>
                }
            },
            html: {
                files: ['**/*.html', '**/*.htm'],
                options: {
                    // Start a live reload server on the default port 35729
                    livereload: true // <script src="//localhost:35729/livereload.js"></script>
                }
            }
        }

    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};
