export class RequestLoanPage {
    constructor(driver) {
        this.driver = driver;
    }

    navigateToRequestLoan() {
        cy.contains("Request Loan").click();
    }

    fillOutLoanForm(amount, downPaymentAmount) {
        cy.get(this.driver.loanAmountField).type(amount);
        cy.get(this.driver.downPaymentField).type(downPaymentAmount);
    }

    submitLoanRequest() {
        cy.get(this.driver.applyNowButton).click();
    }

    verifyLoanRequestSuccess() {
        cy.contains("Loan Request Processed").should("be.visible");
    }

    logOutUser() {
        cy.logOut();
    }
}
