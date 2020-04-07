module.exports.command = function (selectorContainsText, expectedText) {
    return this.getValue(selectorContainsText, function (results) {
        console.log("results  ===============================" + results.value)
      this.assert.strictEqual(results.value, expectedText)
    })
  }
  