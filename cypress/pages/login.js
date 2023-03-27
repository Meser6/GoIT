class LoginPages {

    get emailInput(){
        return cy.get('#user_email')
    }

    get passwordInput(){
        return cy.get('#user_password')
    }

    get subbmitButton(){
        return cy.get('button[type="submit"]')
    }

    login(username, password){
        this.emailInput.type(username)
        this.passwordInput.type(password)
        this.subbmitButton.click()
    }

} export default new LoginPages()