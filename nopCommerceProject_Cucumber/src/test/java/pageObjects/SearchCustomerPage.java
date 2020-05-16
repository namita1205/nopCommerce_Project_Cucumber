package pageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utilities.WaitHelper;

public class SearchCustomerPage {
	WebDriver ldriver;
	WaitHelper waithelper;
	
	public SearchCustomerPage(WebDriver rdriver){
		ldriver=rdriver;
		PageFactory.initElements(ldriver, this);
		waithelper=new WaitHelper(ldriver);
	}

	@FindBy(how = How.ID, using = "SearchEmail")
	@CacheLookup
	WebElement txtEmail;

	@FindBy(how = How.ID, using = "SearchFirstName")
	@CacheLookup
	WebElement txtFirstName;

	@FindBy(how = How.ID, using = "SearchLastName")
	@CacheLookup
	WebElement txtLastName;

	@FindBy(how = How.ID, using = "search-customers")
	@CacheLookup
	WebElement btnSearch;

	@FindBy(how = How.XPATH, using = "//table[@id='customers-grid']//tbody//tr")
	@CacheLookup
	List<WebElement> tableRows;

	@FindBy(how = How.XPATH, using = "//table[@id='customers-grid']//tbody//tr//td")
	@CacheLookup
	List<WebElement> tableColumns;
	
	public void setEmail(String email) {
		waithelper.WaitForElement(txtEmail, 30);
		txtEmail.clear();
		txtEmail.sendKeys(email);
	}
	public void setFirstName(String fname) {
		waithelper.WaitForElement(txtEmail, 30);
		txtFirstName.clear();
		txtFirstName.sendKeys(fname);
	}

	public void setLastName(String lname) {
		waithelper.WaitForElement(txtEmail, 30);
		txtLastName.clear();
		txtLastName.sendKeys(lname);
	}
	
	public void clickSearch() {
		btnSearch.click();
	}
	public int getNoOfRows() {
		return tableRows.size();
	}
	public boolean searchCustomerByEmail(String email) {
		boolean found = false;
		for (int i = 1; i <= tableRows.size(); i++) {
			String emailid = ldriver.findElement(By.xpath("//table[@id='customers-grid']//tbody//tr[" + i + "]//td[2]"))
					.getText();
			if (emailid.equals(email)) {
				found = true;
				break;
			}

		}
		return found;
	}
	
	public boolean searchCustomerByName() {
		boolean flag=false;
	
		for (int i = 1; i <= tableRows.size(); i++) {
			String name = ldriver.findElement(By.xpath("//table[@id='customers-grid']//tbody//tr[" + i + "]//td[3]"))
					.getText();
			String names[]=name.split(" ");
			if (names[0].equals("Victoria")&& names[1].equals("Terces")) {
				
				flag = true;

			}
		
	}
		return flag;	
	}
	

}
