@Smoke
Feature: Pages

  Background:
    Given User is on "https://qa.imoving.com/"


  Scenario: Need to check pages activity
    Given User is on main page
    And User should choose "My House" value in What are You moving? field
    And User should choose "1 Bedroom (500-1000 sq ft)" value in Move Size field
    When User clicks on Compare Quotes button















