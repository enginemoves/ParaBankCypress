import { firstName, lastName, username, email } from "../fixtures/testData";
var driver;
describe('Register spec', () => {
  before(() => {
    Cypress.on("uncaught:exception", () => {
      return false;
    });
    cy.url().should('eq', 'https://parabank.parasoft.com/parabank/index.htm');
    cy.fixture("registerElements").then((sel) => {
      driver = sel;
    });
  });

  it('User can register successfully and sign in', () => {
    cy.contains("Register").click();
    cy.get(driver.firstnameField).type(firstName);
    cy.get(driver.lastnameField).type(lastName);
    cy.get(driver.addressField).type("Murtala Way");
    cy.get(driver.cityField).type("Eko");
    cy.get(driver.stateField).type("Lagos");
    cy.get(driver.zipCodeField).type("10001");
    cy.get(driver.phoneNumberField).type("08182736526");
    cy.get(driver.SSNField).type("123456");
    cy.get(driver.usernameField).type(username);
    cy.get(driver.passwordField).type("Qwerty");
    cy.get(driver.confirmPasswordField).type("Qwerty");
    cy.get(driver.submitRegistrationButton).click();
    cy.contains(`Welcome ${username}`).should("be.visible");
    cy.writeFile('cypress/fixtures/userCredentials.json', { username: username, password: "Qwerty" });
    cy.log("user registration was successful , now procceeding to sign out user")
    cy.logOut()
  });
});


//https://github.com/enginemoves/ParaBankCypress.git