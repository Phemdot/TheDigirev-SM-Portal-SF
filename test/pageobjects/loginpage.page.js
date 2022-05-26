const BASETEST = require('./baseTest.page');

class LoginPage extends BASETEST{

//define selector using getter method
    get loginButton(){
        return $('[class="link btn-login"]');
    }

    get inputEmail(){
        return $('[name="email"]');
    }

    get inputPassword(){
        return $('[name="password"]');
    }

    get submitButton(){
        return $('[type="submit"]');
    }

    get accountLabel(){
        return $('[class="ml-2 d-none d-lg-block"]');
    }

    get errorMessage(){
        return $('body > div.jq-toast-wrap > div');
    }

    open(){
        super.open('/');
    }

    //methods to interact with the page

    async login(email,password) {
        await this.loginButton.click();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.submitButton.click();
    }



}

module.exports = new LoginPage();


