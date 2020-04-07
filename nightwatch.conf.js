const selenium = require('selenium-server')
const chromedriver = require('chromedriver')
const minimist = require('minimist')
const argv = minimist(process.argv)
const workersNum = argv['workers'] || 1

let username = process.env.SAUCE_USERNAME,
    accessKey = process.env.SAUCE_ACCESS_KEY

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
      start_process: false,
      // server_path: selenium.path, //for local use
      // port: 4444,
      server_path: `https://${username}:${accessKey}@ondemand.eu-central-1.saucelabs.com`,
      //port: 443, //for SAUCE LABS
      log_path: '',
      cli_args: {
        'webdriver.chrome.driver': chromedriver.path,
      }
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
        silent: true,
        screenshots: {
          enabled: true,
          path: 'screenshots/',
          on_failure: true,
          on_error: true
        },
        desiredCapabilities: {
          username: username,
          accessKey: accessKey,
          browserName: 'chrome',
          platform: 'Windows 10',
          version: "latest",
          'sauce:options': {
            }
        }
      },

      'sauce-desktop-linux': {
        selenium_port: '80',
        selenium_host: 'ondemand.eu-central-1.saucelabs.com',
        silent: true,
        screenshots: {
          enabled: true,
          path: 'screenshots/',
          on_failure: true,
          on_error: true
        },
        desiredCapabilities: {
          username: username,
          accessKey: accessKey,
          browserName: 'chrome',
          platform: 'Linux',
          version: "latest",
          "sauce:options": {
            }
        }
      },

      'sauce-desktop-macos': {
        selenium_port: '80',
        selenium_host: 'ondemand.eu-central-1.saucelabs.com',
        silent: true,
        screenshots: {
          enabled: true,
          path: 'screenshots/',
          on_failure: true,
          on_error: true
        },
        desiredCapabilities: {
          username: username,
          accessKey: accessKey,
          browserName: 'firefox',
          platform: 'macOS 10.13',
          version: "latest",
          "sauce:options": {
            }
        }
      },
    }
  }