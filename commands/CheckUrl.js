module.exports.command = function (url, message = `Page URL contains ${url}.`) {
    return this.assert.urlContains(url, message)
}

