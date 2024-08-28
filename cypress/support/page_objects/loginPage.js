export class loginPage {
    constructor(driver) {
        this.driver = driver;
    }
    
    invalidLogin() {
        cy.get(this.driver.usernameField).type("invalid_username")
        cy.get(this.driver.passwordField).type("gsdsd")
        cy.get(this.driver.loginButton).click()
        cy.contains("The username and password could not be verified.").should("be.visible")
    }

    validLogin() {
        cy.login(); // Calls the custom command that handles login
        cy.contains("Accounts Overview").should("be.visible")
        cy.wait(2000)
        cy.log("user login successful, now proceeding to sign out user")
        cy.logOut();
    }
}
