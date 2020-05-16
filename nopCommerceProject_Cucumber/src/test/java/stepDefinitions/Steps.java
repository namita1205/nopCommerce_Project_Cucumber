package stepDefinitions;


import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import pageObjects.AddcustomerPage;
import pageObjects.LoginPage;
import pageObjects.SearchCustomerPage;

public class Steps extends BaseClass {
	@Before
	
	public void setUp() throws IOException {
		
		configprop=new Properties();
		FileInputStream configPropFile=new FileInputStream("config.properties");
		configprop.load(configPropFile);
		logger=Logger.getLogger("nopCommerce");
		PropertyConfigurator.configure("log4j.properties");
		
		String br=configprop.getProperty("browser");
		if(br.equals("chrome")) {
		System.setProperty("webdriver.chrome.driver", configprop.getProperty("chromepath"));
		driver=new ChromeDriver();
		}
		else if(br.equals("firefox")) {
			System.setProperty("webdriver.gecko.driver",configprop.getProperty("firefoxpath"));
			driver=new FirefoxDriver();
		}
		logger.info("*****Launching browser*****");
	}


@Given("user launches chrome browser")
public void user_launches_chrome_browser() {
	
	lp=new LoginPage(driver);
	
	
   }

@When("user opens URL {string}")
public void user_opens_URL(String url) {
	logger.info("*****Opening URL*****");
	driver.get(url);

    
}

@When("user enters Email {string} and Password {string}")
public void user_enters_Email_and_Password(String email, String password) {
	logger.info("*****Providing Login details *****");
	lp.setUserName(email);
	lp.setPassword(password);
   
}

@When("click on Login")
public void click_on_Login() {
	logger.info("*****Started login*****");
	lp.clickbtnlogin();
    
}

@Then("verify page title {string}")
public void verify_page_title(String title) {
	logger.info("*****Verifying title*****");
	System.out.println(driver.getTitle());
	Assert.assertEquals(title, driver.getTitle());
    
}

@When("user clicks on logout")
public void user_clicks_on_logout() throws InterruptedException {
	logger.info("*****Clicking on Logout*****");
	lp.clickLogout();
	Thread.sleep(5000);
    
}

@Then("close browser")
public void close_browser() {
	logger.info("*****Closing browser*****");
	driver.close();
   
}
//customers step definitions

@Then("user can view Dashboard")
public void user_can_view_Dashboard() {
	addcust=new AddcustomerPage(driver);
	String title=addcust.getPageTitle();
	Assert.assertEquals("Dashboard / nopCommerce administration", title);
	
    }

@When("user clicks on customers Menu")
public void user_clicks_on_customers_Menu() throws InterruptedException {
	Thread.sleep(3000);
	addcust.clickOnCustomersMenu();
   
}

@When("clicks on customers Menu Item")
public void clicks_on_customers_Menu_Item() throws InterruptedException {
	Thread.sleep(3000);
	addcust.clickOnCustomersMenuItem();
    
}

@When("clicks on Add new button")
public void clicks_on_Add_new_button() throws InterruptedException {
	
	addcust.clickAddNew();
	Thread.sleep(3000);
   
}

@Then("user can view Add new customer page")
public void user_can_view_Add_new_customer_page() {
	logger.info("*****Verifying Add a new customer Page*****"); 
	Assert.assertEquals("Add a new customer / nopCommerce administration", addcust.getPageTitle());
  
}
@When("user enters customer info")
public void user_enters_customer_info() throws InterruptedException {
	logger.info("*****Adding new customer details*****");
	String email=randomstring()+"@gmail.com";
	addcust.setEmail(email);
	addcust.setPassword("test123");
	addcust.setFirstName("Mary");
	addcust.setLastName("Flower");
	addcust.setGender("Female");
	addcust.setcompany("Future Company");
	Thread.sleep(3000);
	addcust.setCustomerRoles("Guests");
	addcust.setManagerOfVendor("Vendor 1");
	Thread.sleep(3000);
	addcust.setDOB("November 2005", "14");
	addcust.setAdmincontent("Automation testing");
	
	
   
}

@When("clicks on save button")
public void clicks_on_save_button() throws InterruptedException {
	logger.info("*****Saving customer data*****");
	addcust.clickOnSave();
	Thread.sleep(3000);
    
}

@Then("user can view confirmation message {string}")
public void user_can_view_confirmation_message(String message) {
	String msg=driver.findElement(By.xpath("//div[@class='alert alert-success alert-dismissable']")).getText();
Assert.assertTrue(msg.contains(message));
   
}
//steps for search customer by Email


@When("Enters customer Email")
public void enters_customer_Email() {
	logger.info("*****Searching Customer by email id*****");
	searchcust=new SearchCustomerPage(driver);
	searchcust.setEmail("victoria_victoria@nopCommerce.com");
	
   }

@When("clicks on Search button")
public void clicks_on_Search_button() throws InterruptedException {
	searchcust.clickSearch();
	Thread.sleep(3000);
    
}

@Then("user should find Email in the Search table")
public void user_should_find_Email_in_the_Search_table() {
	logger.info("*****Verifying Search Customer by Email *****");
	boolean status=searchcust.searchCustomerByEmail("victoria_victoria@nopCommerce.com");
	Assert.assertEquals(true, status);
    
}


@When("Enters  Customers First name")
public void enters_Customers_First_name() {
	logger.info("*****Searching Customer by Name*****");
	searchcust=new SearchCustomerPage(driver);
	searchcust.setFirstName("Victoria");
   
}

@When("Enters Customers Last name")
public void enters_Customers_Last_name() {
	searchcust.setLastName("Terces");
   
}

@Then("user should find Name in the Search table")
public void user_should_find_Name_in_the_Search_table() {
	logger.info("*****Verifying Search Customer by Name *****");
	boolean status=searchcust.searchCustomerByName();
	Assert.assertEquals(true, status);
   
}




}
