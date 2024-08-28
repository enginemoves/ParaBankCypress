var driver
var user
describe('Request Loan Spec', () => {
  before(()=>{
    Cypress.on("uncaught:exception",()=>{
      return false
    })
    cy.fixture("requestLoansElements").then((sel)=>{
      driver = sel
    })
    cy.fixture("userCredentials").then((sel)=>{
        user = sel
    })

  })
  it('Log in User', () => {
    cy.wait(2000)
    cy.login(user.username,user.password)
  })
  it('Request Loan', () => {
    cy.contains("Request Loan").click()
    cy.get(driver.loanAmountField).type(driver.amount)
    cy.get(driver.downPaymentField).type(driver.downPaymentAmount)
    cy.get(driver.applyNowButton).click()
    cy.contains("Loan Request Processed").should("be.visible")
    cy.log("user requested loan succesfully, now procceeding to sign out user")
    cy.logOut()
  })
  
})
