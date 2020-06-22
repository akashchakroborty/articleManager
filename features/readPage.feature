Feature: Read Article
 
  Scenario: Go to Read Article Page and ArticleRead and Read More section should be displayed
    Given we access home page
    Then we should receive home page
    When we click on article pannel body
    Then we should receive read article page
    Then we should see different sections in read article page

  Scenario: Go to Read Article Page and scroll down to see the SidePannel
    Given we access home page
    Then we should receive home page
    When we click on article pannel body
    Then we should receive read article page
    When we scroll down the article page
    Then we see the article SidePannel section

  Scenario: Go to Read Article Page and scroll down to see the SidePannel, click on clap icon and Clap count should increase.
    Given we access home page
    Then we should receive home page
    When we click on article pannel body
    Then we should receive read article page
    When we scroll down the article page
    Then we see the article SidePannel section
    Then we click on the clap icon, clap count incresed by 1

  Scenario: Go to Read Article Page and scroll down till bottom claps, SidePannel will be hidden.
    Given we access home page
    Then we should receive home page
    When we click on article pannel body
    Then we should receive read article page
    When we scroll down till bottom claps
    Then we see the article SidePannel section to be hidden

  Scenario: Go to Read Article Page and click on clap icon of bottom clap, Clap count should increase.
    Given we access home page
    Then we should receive home page
    When we click on article pannel body
    Then we should receive read article page
    When we scroll down till bottom claps
    Then we click on the clap icon, clap count incresed by 1

  Scenario: Go to Read Article Page, Read More section should have 3 articles to choose from.
    Given we access home page
    Then we should receive home page
    When we click on article pannel body
    Then we should receive read article page
    When we scroll down till bottom claps
    Then we see Read More section with 3 articles to choose from 

  Scenario: When we click back then we redirect from read article page to Home page.
    Given we access home page
    Then we should receive home page
    When we click on article pannel body
    Then we should receive read article page
    When We click on Back button
    Then We go back to Home page  

  Scenario: Go to Read Article Page, in Read More section we click any article same article should be renderend.
    Given we access home page
    Then we should receive home page
    When we click on article pannel body
    Then we should receive read article page
    When we scroll down till bottom claps
    Then we see Read More section with 3 articles to choose from 
    When we click on read more article pannel body then same article should be rendered in article read page