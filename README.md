# e2e-cypress

### The subject of my first e2e tests is the contact form. The tests were written on the basis of *The Test Scenario for three test cases* of a selected website.


1. The first test case named "Failed sending contact form" assumes that the mandatory fields in the form are left blank, and messages about their completion are displayed. 

    ![alt text](https://github.com/KamilaWhite/e2e-cypress/blob/main/cypress/integration/txm/Attachments/Test%20case%20no.1.png?raw=true "TC no.1")

    The test is to check if the empty form will not be sent and if the displayed messages are correct.

    *As in the screen below*
![alt text](https://github.com/KamilaWhite/e2e-cypress/blob/main/cypress/integration/txm/Attachments/failed.sending.contact.form.png?raw=true "failed.sending.contact.form")

2. The second test case "Checking email validation" assumes that the mandatory fields in the form are completed, and the field called "Adres mailowy" has been filled in with the wrong e-mail format. 
   
   ![alt text](https://github.com/KamilaWhite/e2e-cypress/blob/main/cypress/integration/txm/Attachments/Test%20case%20no.2.png?raw=true "TC no.2")

    The test is to check if the validation of the "Adres mailowy" field is working.

    *As in the screen below*
![alt text](https://github.com/KamilaWhite/e2e-cypress/blob/main/cypress/integration/txm/Attachments/checking.email.validation.png?raw=true "checking.email.validation")

3. The third test case named "Successfully submits the contact form" assumes that the mandatory fields in the form are completed, the correct e-mail format has been entered in the field named "Addres mailowy". 

    ![alt text](https://github.com/KamilaWhite/e2e-cypress/blob/main/cypress/integration/txm/Attachments/Test%20Case%20no.3.png?raw=true "TC no.3")
   
    The test is to check whether the form is being sent correctly and whether the correct message appears after it has been sent.

    *As in the screen below*
![alt text](https://github.com/KamilaWhite/e2e-cypress/blob/main/cypress/integration/txm/Attachments/successfully.submits.the.contact.form.png?raw=true "successtully.submits.the.contact.form")

*Soon I will add more Automatic Tests for the next Test Scenarios.*