Cypress.Commands.add('login', (email, password) => {
   
    cy.fixture("loginElements").then((driver)=>{
        cy.get(driver.usernameField).clear().type(email)
        cy.get(driver.passwordField).clear().type(password)
        cy.get(driver.loginButton).click()
        cy.contains("Accounts Overview").should("be.visible")

    })
})

Cypress.Commands.add('logOut', () => {
   
    cy.contains("Log Out").then(($text) => {
        if ($text.is(':visible')) {
          cy.contains("Log Out").click();
          cy.contains("Customer Login").should("be.visible");
        }
      })
})
Cypress.Commands.add('clearBrowserData', () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.window().then((win) => {
        win.sessionStorage.clear();
    });
   
});

