var driver
var user
describe('Login Spec', () => {
  before(()=>{
    Cypress.on("uncaught:exception",()=>{
      return false
    })
    cy.fixture("loginElements").then((sel)=>{
      driver = sel
    })
    cy.fixture("userCredentials").then((sel)=>{
        user = sel
      })
  })
  it('User cannot login with invalid credentials', () => {
    cy.get(driver.usernameField).type(user.username)
    cy.get(driver.passwordField).type("gsdsd")
    cy.get(driver.loginButton).click()
    cy.contains("The username and password could not be verified.").should("be.visible")

  })
  it('User can login Sucessfully', () => {
    cy.get(driver.usernameField).clear().type(user.username)
    cy.get(driver.passwordField).clear().type(user.password)
    cy.get(driver.loginButton).click()
    cy.contains("Accounts Overview").should("be.visible")
    cy.wait(2000)
    cy.log("user login successful , now procceeding to sign out user")
    cy.logOut()
  })
})
