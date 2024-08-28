var user
describe('LogOut Spec', () => {
    before(()=>{
        cy.fixture("userCredentials").then((sel)=>{
            user = sel
          })
    })
  it('User can login Sucessfully', () => {
    
    cy.login(user.username,user.password)
    cy.log("user login successful , now procceeding to sign out user")
    cy.logOut()
    
  })

})
