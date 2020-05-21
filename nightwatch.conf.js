const selenium = require('selenium-server')
const chromedriver = require('chromedriver')
const minimist = require('minimist')
const argv = minimist(process.argv)
const workersNum = argv['workers'] || 1

const username = process.env.SAUCE_USERNAME
const accessKey = process.env.SAUCE_ACCESS_KEY

module.exports = {
    detailed_output: true,
    live_output: false,
    test_workers: {
      enabled: true,
      workers: workersNum
    },
    src_folders: ['spec'],
    output_folder: 'reports',
    custom_commands_path: 'commands/',
    custom_assertions_path: '',
    page_objects_path: [
      'pages/ecosiaPage',
      'pages/nightwatchjsPage'
    ],
    globals_path: 'globals.js',
    selenium: {
      server_path: selenium.path, //for local use
      start_process: true,
    
    },
  
    test_settings: {
      default: {
        selenium_port: 4444,
        selenium_host: 'localhost',
        silent: true,
        screenshots: {
          enabled: true,
          path: 'screenshots/',
          on_failure: true,
          on_error: true
        },
        desiredCapabilities: {
          browserName: 'chrome',
          marionette: true,
          javascriptEnabled: true,
          acceptSslCerts: true,
          chromeOptions: {
            args: ['incognito'],
            w3c: false
          }
        }
      },

      'sauce-desktop-windows': {
        selenium_port: '80',
        selenium_host: 'ondemand.eu-central-1.saucelabs.com',
        use_ssl: false,
        username: username,
        accessKey: accessKey,
        silent: true,
        screenshots: {
          enabled: true,
          path: 'screenshots/',
          on_failure: true,
          on_error: true
        },
        globals: {
          environment: 'saucelabs'
        },
         
        //for using proxy please uncomment proxy settings below
        // proxy: {
        //   host: "localhost",
        //   port: "3128",
        //   protocol: "http"
        // },

        desiredCapabilities: {
          browserName: 'chrome',
          platform: 'Windows 10',
          version: "72",
          'sauce:options': {
          }
        }
      },
    }
  }