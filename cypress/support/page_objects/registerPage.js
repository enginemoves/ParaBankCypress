export class RegisterPage {
    constructor(driver) {
        this.driver = driver;
    }

    navigateToRegisterPage() {
        cy.contains("Register").click();
    }

    fillOutRegistrationForm(firstName, lastName, username) {
        cy.get(this.driver.firstnameField).type(firstName);
        cy.get(this.driver.lastnameField).type(lastName);
        cy.get(this.driver.addressField).type("Murtala Way");
        cy.get(this.driver.cityField).type("Eko");
        cy.get(this.driver.stateField).type("Lagos");
        cy.get(this.driver.zipCodeField).type("10001");
        cy.get(this.driver.phoneNumberField).type("08182736526");
        cy.get(this.driver.SSNField).type("123456");
        cy.get(this.driver.usernameField).type(username);
        cy.get(this.driver.passwordField).type("Qwerty");
        cy.get(this.driver.confirmPasswordField).type("Qwerty");
    }

    submitRegistration() {
        cy.get(this.driver.submitRegistrationButton).click();
    }

    verifyRegistration(username) {
        cy.contains(`Welcome ${username}`).should("be.visible");
    }

    logOutUser() {
        cy.logOut();
    }
}
