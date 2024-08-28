export class TransferFundsPage {
    constructor(driver) {
        this.driver = driver;
    }
    transferFunds(amount) {

        cy.contains("Transfer Funds").click()
        cy.get(this.driver.amountField).type(amount)
        //cy.get(driver.fromAccountDropdown).select("15675") account number changes for each account
        //cy.get(driver.recipientAccountDropdown).select("15786")
        cy.wait(2000)
        cy.get(this.driver.transferButton).click()
        cy.contains("Transfer Complete!").should("be.visible")

    }

    logOut() {
        cy.log("user transfer is successful , now procceeding to sign out user")
        cy.logOut()
    }

}