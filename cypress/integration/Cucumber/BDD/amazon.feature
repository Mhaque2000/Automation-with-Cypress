Feature: Amazon

    Automation testing
    # @skip
    @retries(2)
    Scenario: Phone purchase
    Given User open application
    When User searched the product
    And User validate the product
    And User click the preferred product
    And User validate the clicked product
    Then User added the product in the cart 


    Scenario: Account & Lists
    Given User open application
    When User hover on Account & Lists option
    And User click Your Account option
    And User validate "Your Account" Your Account
    And User hover on Account & Lists option
    And User click Your Wish List option
    And User validate "Your List" Your Wish List
    And User hover on Account & Lists option
    And User click Your Recommendations option
    And User validate "Top picks for you" Your Recommendations
    And User hover on Account & Lists option
    And User click Your Prime Video option
    And User validate "amazon.in" path
    And User open application
    And User hover on Account & Lists option
    And User click Your Seller Account option
    And User validate "Become a seller onAmazon" Your Seller Account option
    And User hover on Account & Lists option
    And User click Free Amazon Bussiness Account option
    Then User validate "Back to top" Free Amazon Bussiness Account


    


