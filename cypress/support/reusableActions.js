Cypress.Commands.add('login', () => {
    cy.fixture("userCredentials").then((user) => {
        cy.fixture("loginElements").then((driver) => {
            cy.get(driver.usernameField).clear().type(user.username);
            cy.get(driver.passwordField).clear().type(user.password);
            cy.get(driver.loginButton).click();
            cy.contains("Accounts Overview").should("be.visible");
        });
    });
});

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

