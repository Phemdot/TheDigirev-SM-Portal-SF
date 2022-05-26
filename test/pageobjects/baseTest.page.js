/*This contains the base test that is shared across all function and classes
*/


module.exports = class BaseTest{
    open (path) {
        browser.maximizeWindow();
        return browser.url(`https://sm.thedigirev.com${path}`)
        
    }
}

