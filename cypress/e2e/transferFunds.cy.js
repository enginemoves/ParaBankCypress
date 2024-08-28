var driver
var user
describe('Transfer Funds', () => {
  before(()=>{
    Cypress.on("uncaught:exception",()=>{
      return false
    })
    cy.fixture("transferFundsElements").then((sel)=>{
      driver = sel
    })
    cy.fixture("userCredentials").then((sel)=>{
        user = sel
      })
  })
  it('Login User', () => {
    cy.login(user.username,user.password)
  })
  it('Transfer Funds Successfully', () => {

    cy.contains("Transfer Funds").click()
    cy.get(driver.amountField).type("1000")
    //cy.get(driver.fromAccountDropdown).select("15675") account number chnages for each account
    //cy.get(driver.recipientAccountDropdown).select("15786")
    cy.wait(2000)
    cy.get(driver.transferButton).click()
    cy.contains("Transfer Complete!").should("be.visible")
    cy.log("user transfer is successful , now procceeding to sign out user")
    cy.logOut()
  })

})
