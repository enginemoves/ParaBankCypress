import { RequestLoanPage } from "../support/page_objects/requestLoanPage";

describe('Request Loan Spec', () => {
  let driver;
  let requestLoanPage;

  before(() => {
    
    cy.fixture("requestLoansElements").then((sel) => {
      driver = sel;
      requestLoanPage = new RequestLoanPage(driver);
    });
    cy.login(); 

  });

  it('User can request a loan successfully', () => {
    requestLoanPage.navigateToRequestLoan();
    requestLoanPage.fillOutLoanForm(driver.amount, driver.downPaymentAmount);
    requestLoanPage.submitLoanRequest();
    requestLoanPage.verifyLoanRequestSuccess();
    cy.log("User requested loan successfully, now proceeding to sign out user");
    requestLoanPage.logOutUser();
  });
});
