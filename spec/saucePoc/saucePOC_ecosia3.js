const dictionary = require('../../dictionary/dictionary_pl')

module.exports = {
    'My first test': function(browser){
        const ecosiaPage = browser.page.ecosiaPage()
        const nightwatchjsPage = browser.page.nightwatchjsPage()

            ecosiaPage.openEcosiaPage()
            ecosiaPage.closePopUp()
            ecosiaPage.setSearchText('nightwatchjs')
            ecosiaPage.checkFirstResult('Nightwatch.js | Node.js powered End-to-End testing framework')
            ecosiaPage.goToFirstResultSearch()
            nightwatchjsPage.checkUrl('https://nightwatchjs.org/')
            nightwatchjsPage.checkUrl_v2('https://nightwatchjs.org/')
            nightwatchjsPage.checkMainTitle()

        browser.end()
    }
}