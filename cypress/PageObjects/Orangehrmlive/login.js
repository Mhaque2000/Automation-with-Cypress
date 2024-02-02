class login
{
    //All the locators are stored in variables
    usernamelocator = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
    passwordlocator = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input';
    loginbuttonlocator = '.oxd-button';
    varify_1_locator = '.oxd-topbar-header-breadcrumb > .oxd-text';

    //Creating function for setting username
    setUsername(username){
        cy.get(this.usernamelocator).type(username);
    }
    //Creating function for setting password

    setPassword(password){
        cy.get(this.passwordlocator).type(password);
    }
    //Creating function for clicking Login button
    clickLogin(){
        cy.get(this.loginbuttonlocator).click();
    }
    //Creating function for verifying
    veriyLogin(){
        cy.get(this.varify_1_locator).should('have.text','Dashboard');
    }
}

export default login;