const LOGINPAGE = require('../pageobjects/loginpage.page');


describe('Login', ()=> {
    it('Login with valid credential', async ()=>{
        await LOGINPAGE.open();
        await LOGINPAGE.login('funmilolaakinwale@gmail.com','Ifemi8511');
        await expect(LOGINPAGE.accountLabel).toBeClickable();
        
        /*console.log(browser.getUrl);
        let newUrl = browser.getUrl();
        let url = JSON.stringify(newUrl);
        await expect(url).toMatch('https://sm.thedigirev.com/statistics');
        */
    });

    it('Login with invalid credential', async ()=>{
        await LOGINPAGE.open();
        await LOGINPAGE.login('funmilolaakinwale@gmail.com','Ifemi85');
        await expect(LOGINPAGE.errorMessage).toBePresent();

    });

});