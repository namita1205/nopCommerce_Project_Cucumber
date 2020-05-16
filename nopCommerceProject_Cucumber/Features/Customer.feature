Feature: Customers
 Background: below are common steps for each scenario 
    Given user launches chrome browser 
	When user opens URL "https://admin-demo.nopcommerce.com/" 
	And user enters Email "admin@yourstore.com" and Password "admin" 
	And click on Login 
	Then user can view Dashboard 
	
@Sanity
Scenario: Add new Customer 
	When user clicks on customers Menu 
	And clicks on customers Menu Item 
	And clicks on Add new button 
	Then user can view Add new customer page 
	When user enters customer info 
	And clicks on save button 
	Then user can view confirmation message "The new customer has been added successfully." 
	And close browser 
	
@Regression	
Scenario: Search customer by Email Id 
	When user clicks on customers Menu 
	And clicks on customers Menu Item 
	And Enters customer Email 
	When clicks on Search button 
	Then user should find Email in the Search table 
	And close browser 
	
@Regression	
	Scenario: Search Customer by First and Last Name
	When user clicks on customers Menu
	And clicks on customers Menu Item
	And Enters  Customers First name
	And Enters Customers Last name
	When clicks on Search button
	Then user should find Name in the Search table
	And close browser
	
	
