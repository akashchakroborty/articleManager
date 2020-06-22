Feature: Articles List 
 
  Scenario: Load the Home Page
    Given we access home page
    Then we should receive home page
    Then we should see Article Preview List

  Scenario: Go to Create Article Page
    Given we access home page
    Then we should receive home page
    When we click on Create Article
    Then we should receive create article page
    Then we should see create article form

  Scenario: Clicking on Edit Icon takes you to Edit Article Page
    Given we access home page
    Then we should receive home page
    When we click on Edit Icon
    Then we should receive edit article page
    Then we should see edit article form  

  Scenario: Clicking on Article preview pannel body takes you to Read Article Page
    Given we access home page
    Then we should receive home page
    When we click on article pannel body
    Then we should receive read article page
    Then we should see the read article page   

  Scenario: Clicking on Article preview Image pannel takes you to Read Article Page
    Given we access home page
    Then we should receive home page
    When we click on article image
    Then we should receive read article page
    Then we should see the read article page   

  Scenario: Clicking on Delete Icon pops a confirmation screen
    Given we access home page
    Then we should receive home page
    When we click on Delete Icon
    Then we should receive a delete confirmation screen

  Scenario: Cancelling the Delete Icon popUp confirmation screen
    Given we access home page
    Then we should receive home page
    When we click on Delete Icon
    Then we should receive a delete confirmation screen 
    When we click on cancel delete
    Then we should not see the delete confirmation screen anymore

  Scenario: Confirming the Delete Icon popUp confirmation screen
    Given we access home page
    Then we should receive home page
    When we click on Delete Icon
    Then we should receive a delete confirmation screen 
    When we click on yes delete article
    Given we access home page
    Then we should receive home page
    Then we should see Article Preview List
    Then The article is deleted and article List count is reduced by 1
    Then we should not see the delete confirmation screen anymore


