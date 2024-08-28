export class logOutPage {
  
    logOut() {
        cy.login(); 
        cy.log("User login successful, now proceeding to sign out user");
        cy.logOut()
        cy.contains("Login").should("be.visible"); 
    }
}
