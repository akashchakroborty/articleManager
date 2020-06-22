Feature: Edit Article
 
  Scenario: Go to Edit Article Page and all form fields should be Filled
    Given we access home page
    Then we should receive home page
    When we click on Edit Icon
    Then we should receive edit article page
    Then All the form fields should be Filled

  Scenario: When we click back then we redirect from Edit article page to Home page.
    Given we access home page
    Then we should receive home page
    When we click on Edit Icon
    Then we should receive edit article page
    When We click on Back button
    Then We go back to Home page   

  Scenario: We Edit One of the fields and click Edit Article
    Given we access home page
    Then we should receive home page
    Then we should see Article Preview List
    When we click on Edit Icon
    Then we should receive edit article page
    Then All the form fields should be Filled
    When we Edit description field
    Then We click on Edit article button
    Then We go back to Home page 
    Then Article List count should be same


  