Feature: Login

@Sanity
Scenario: Successful login with valid credentials
Given user launches chrome browser
When user opens URL "https://admin-demo.nopcommerce.com/"
And user enters Email "admin@yourstore.com" and Password "admin"
And click on Login
Then verify page title "Dashboard / nopCommerce administration"
When user clicks on logout
Then verify page title "Your store. Login"
And close browser


@Regression
Scenario Outline: Login data driven
Given user launches chrome browser
When user opens URL "https://admin-demo.nopcommerce.com/"
And user enters Email "<email>" and Password "<password>"
And click on Login
Then verify page title "Dashboard / nopCommerce administration"
When user clicks on logout
Then verify page title "Your store. Login"
And close browser


Examples:

| email | password |
| admin@yourstore.com | admin |
| admin1@yourstore.com | admin123 | 


