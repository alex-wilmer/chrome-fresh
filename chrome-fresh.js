let path = require('path')
let rimraf = require('rimraf')
let puppeteer = require('puppeteer')

let userDataDir = path.resolve(__dirname, 'chrome_user_data')
rimraf(userDataDir, error => error && console.error(error))

puppeteer.launch({
  headless: false,
  devtools: true,
  userDataDir,
})
