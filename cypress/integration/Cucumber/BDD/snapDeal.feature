Feature: Snapdeal

    Automation testing of Snapdeal application
    Scenario: Saree purchase
    Given user open the application
    When user search "saree"
    And user validate "saree"
    And user apply price-range "500" to "1500"
    And user validate "Rs. 500 - Rs. 1500" price-range
    And user apply 4.0 rating filter
    And user validate "4.0" rating 
    And user choose first saree
    And user buy the saree
    Then user validate "100% Payment Protection, Easy Returns Policy" text

    # Scenario: men
    # Given user open the application
    # When user hover on men's fashion
    # Then something happens
