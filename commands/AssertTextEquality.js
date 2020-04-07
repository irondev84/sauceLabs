// based on WaitForText by proclaim https://gist.github.com/proclaim/7a242f7d4d7aa7cb0ec352beb3a3429c
const util = require('util')
const events = require('events')

function AssertTextEquality () {
  events.EventEmitter.call(this)
}

util.inherits(AssertTextEquality, events.EventEmitter)

AssertTextEquality.prototype.command = function (selector, expectedText, message, position = 1, timeoutInSec = 45, contains = false) {
  const timeoutRetryInMilliseconds = 300
  const startTimeInMilliseconds = new Date().getTime()
  const timeoutInMiliseconds = timeoutInSec * 1000

  const checker = () => {
    this.client.api.elements('css selector', selector, elements => {
      const now = new Date().getTime()
      if (elements.value.length < position && now - startTimeInMilliseconds < timeoutInMiliseconds) {
        setTimeout(() => {
          checker()
        }, timeoutRetryInMilliseconds)
      } else if (elements.value.length >= position) {
        this.client.api.elementIdText(elements.value[position - 1].ELEMENT, result => {
          const textIsCorrect = contains ? result.value.includes(expectedText) : result.value === expectedText
          if (result.status === 0 && textIsCorrect) {
            if (message) this.client.api.Log(message)
            this.emit('complete')
          } else if (now - startTimeInMilliseconds < timeoutInMiliseconds) {
            setTimeout(() => {
              checker()
            }, timeoutRetryInMilliseconds)
          } else {
            this.client.api.LogError(`Expected ${expectedText} but got ${result.value}`)
          }
        })
      } else {
        this.client.api.LogError(`There is less elements than ${position} with selector ${selector} on current website.`)
      }
    })
  }

  checker()
}

module.exports = AssertTextEquality
