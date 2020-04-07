const ecosiaPageSelectors = require('./ecosiaPageSelectors')

const commands = {

    openEcosiaPage: function(){
       this.api.url('https://ecosia.org')
        return this

    },


    closePopUp: function(){
        this.click('.main-popup .icon-button__icon-close')
        return this
    },

    setSearchText: function(searchText){
            this.setValue(ecosiaPageSelectors.ecosiaSearchInput, searchText)
            this.click(ecosiaPageSelectors.ecosiaSearchSubmitButton)
            return this

    },

    checkFirstResult: function(expectedResult){
        return this
            .verify.containsText(ecosiaPageSelectors.firstSearchValueResult, expectedResult)
    },

    goToFirstResultSearch: function(){
        return this
            .click(ecosiaPageSelectors.firstSearchValueResult)
    }
}

module.exports = {
    commands: [commands],
    elements: ecosiaPageSelectors
}