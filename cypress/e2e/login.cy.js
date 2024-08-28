import { loginPage } from '../support/page_objects/loginPage'; 

describe('Login Spec', () => {
  let driver;
  let login;

  before(() => {
    cy.fixture("loginElements").then((sel) => {
      driver = sel;
      login = new loginPage(driver);
    });
  });

  it('User cannot login with invalid credentials', () => {
    login.invalidLogin(); 
  });

  it('User can login Successfully', () => {
    login.validLogin();
  });
});
