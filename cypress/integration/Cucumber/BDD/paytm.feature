Feature: paytm application automation testing

    @retries(2)
    Scenario: Flighting Booking
    Given user open application
    When user click from option
    And user remove the existing departure location type "BLR"
    And user select the "BLR" departure location from the dropdown
    And user click to option
    And user remove the existing destination location and type "CCU"
    And user select the "CCU" destination location from the dropdown
    And user click the calender option
    And user select the prefered date
    And user click the traveller option
    And user select 1 adult, 1 child and 1 infant
    Then user search for the available flight
