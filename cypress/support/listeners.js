//Turn off all uncaught exception handling
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});