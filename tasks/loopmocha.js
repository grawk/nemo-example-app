'use strict';

var nconf = require('nconf');
var path = require('path');
module.exports = function loopmocha(grunt) {
    nconf.env()
        .argv();
    // Load task
    grunt.loadNpmTasks('grunt-loop-mocha');
    // Options
    return {
        "src": ["<%=loopmocha.options.basedir%>/spec/*.js"],
        "options": {
            "basedir": path.resolve(__dirname, "../test/functional"),
            "nemoBaseDir": '<%=loopmocha.options.basedir%>',
            "applitools_api_key": nconf.get('applitools_api_key') || 'oops',
            "mocha": {
                "timeout": grunt.option("timeout") || 600000,
                "grep": grunt.option("grep") || "@flow@",
                "debug": grunt.option("debug") || 0,
                "reporter": grunt.option("reporter") || "spec"
            },
            loop: {
                // UNCOMMENT BELOW if you want to see parallel behavior
                //,parallel: {
                //  type: 'file'
                //}
            },
            "iterations": [
                {
                    "description": "default"
                }
            ]
        },
        "eyes": {
            "src": "<%=loopmocha.src%>",
            "options": {
                "loop": {
                    "noFail": false,
                    "parallel": true
                },
                "mocha": {
                    "grep": "@eyes@"
                },
                "iterations": [
                    {
                        "description": "firefox",
                        "BROWSER": "firefox"
                    },
                    {
                        "description": "chrome",
                        "BROWSER": "chrome"
                    }
                ]
            }

        }
    };
};
