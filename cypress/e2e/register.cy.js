import { firstName, lastName, username } from "../fixtures/testData";
import { RegisterPage } from "../support/page_objects/registerPage";

describe('Register spec', () => {
  let driver;
  let registerPage;

  before(() => {
    cy.fixture("registerElements").then((sel) => {
      driver = sel;
      registerPage = new RegisterPage(driver);
    });
  });

  it('User can register successfully and sign in', () => {
    registerPage.navigateToRegisterPage();
    registerPage.fillOutRegistrationForm(firstName, lastName, username);
    registerPage.submitRegistration();
    registerPage.verifyRegistration(username);
    cy.writeFile('cypress/fixtures/userCredentials.json', { username: username, password: "Qwerty" });
    cy.log("User registration was successful, credentials stored and now proceeding to sign out user");
    registerPage.logOutUser();
  });
});
