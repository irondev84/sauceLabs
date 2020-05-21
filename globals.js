module.exports = {  
  before: function(done) {
    console.log('Setting up...');
    done()
  },

  after : function(done) {
    console.log('Closing down...');
    done()
  },

  beforeEach : function(done) {
    console.log('Setting up... beforeEach');
    done()
  },

  afterEach : function(browser,done) {
    if(this.environment == 'saucelabs') browser.CustomSauceLabsEnd()
    console.log('Closing down... afterEach');
    done()
  },

  
}