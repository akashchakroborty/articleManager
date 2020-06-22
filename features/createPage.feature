Feature: Create Article
 
  Scenario: Go to Create Article Page and all form fields should be empty
    Given we access home page
    When we click on Create Article
    Then we should see create article form
    Then All the form fields should be Empty

  Scenario: When we click back then we redirect from create article page to Home page.
    Given we access home page
    When we click on Create Article
    Then we should see create article form
    When We click on Back button
    Then We go back to Home page  

  Scenario: When all fields are not filled then we can't create article
    Given we access home page
    When we click on Create Article
    When All form fields are not filled
    Then We click on create article button
    Then We remian in create article page, don't go back to Home page

  Scenario: Only when all fields are filled then we can create article
    Given we access home page
    Then we should receive home page
    When we click on Create Article
    When All form fields are filled
    Then We click on create article button
    Then We go back to Home page 
    Given we access home page
    Then we should receive home page
    Then we should see Article Preview List
    Then Article List count increased by 1   



