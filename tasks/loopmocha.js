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
      "mocha": {
        "timeout": grunt.option("timeout") || 600000,
        "grep": grunt.option("grep") || 0,
        "debug": grunt.option("debug") || 0,
        "reporter": grunt.option("reporter") || "spec"
      },
      loop: {
        reportLocation: grunt.option("reportLocation") || "<%=loopmocha.options.basedir%>/report"
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
    "perfecto": {
      "src": ["<%=loopmocha.options.basedir%>/spec/*.js"],
      "options": {
        "PERFECTO_USER": "mattedelman@gmail.com",
        "PERFECTO_PW": "trouthunter",
        "NODE_ENV": "perfecto",
        "mocha": {
          "grep": "@login@"
        },
        "loop": {
          "parallel": true
        },
        "iterations": [
          {
            "description": "android",
            "PERFECTO_BROWSER": "chrome",
            "PERFECTO_DEVICE": "HT29BW305170"
          },
          {
            "description": "ios",
            "PERFECTO_BROWSER": "mobileSafari",
            "PERFECTO_DEVICE": "3152168C4EAA1E2A5DE93CF7B89222720E3A62E0"
          }
        ]
      }
    }
  };
};
