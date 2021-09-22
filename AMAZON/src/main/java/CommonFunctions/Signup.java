package CommonFunctions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
//import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Signup {
	WebDriver driver;
	
	@Given("^User is already on Amazon page$")
	public void user_is_already_on_Amazon_page()  {
	    System.setProperty("webdriver.chrome.driver", "C:\\Users\\91798\\Downloads\\chromedriver_win32\\chromedriver.exe");
	    new ChromeDriver();
	    driver.manage().window().maximize();
	    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);    
	    driver.manage().deleteAllCookies();
	    driver.get("https://www.amazon.in");
	   String Title= driver.getTitle();
	    Assert.assertEquals("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in", Title);
	}

	
	
	@When("^User clicks on Start Here button$")
	public void user_clicks_on_Start_Here_button() throws InterruptedException  {
		 Actions action = new Actions(driver);
		   action.moveToElement(driver.findElement(By.partialLinkText("Account"))).build().perform();
		   WebElement Start_here_button= driver.findElement(By.className("nav-a"));
		   Start_here_button.click();
		   
		   //pop-up handling 
		   String myWindowHandle = driver.getWindowHandle();
		   driver.switchTo().window(myWindowHandle);
	       
		   driver.findElement(By.xpath("//*[@id=\"GLUXZipUpdateInput\"]")).sendKeys("282004");
		   Thread.sleep(200);
		   driver.findElement(By.id("GLUXZipUpdate")).click();
		   
		   Actions action1 = new Actions(driver);
		   action1.moveToElement(driver.findElement(By.partialLinkText("Account"))).build().perform();
		   driver.findElement(By.linkText("Start here.")).click();
		     
	}

	@Then("^Create account form is visible$")
	public void create_account_form_is_visible()  {
		String Title1= driver.getTitle();
		Assert.assertEquals("Amazon Registration", Title1);
	}

	@Then("^User enters details \"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\" , \"([^\"]*)\"$")
	public void user_enters_details(String arg1, String arg2, String arg3, String arg4)  {
	   driver.findElement(By.xpath("//*[@id=\"ap_customer_name\"]")).sendKeys(arg1);
	   //drop down 
	   //Select select = new Select(driver.findElement(By.xpath("//*[@id=\"auth-country-picker-container\"]/span/span/span")));
	   //select.selectByVisibleText("IN +91");
	 
       driver.findElement(By.xpath("//*[@id=\"ap_phone_number\"]")).sendKeys(arg2);
       driver.findElement(By.xpath("//*[@id=\"ap_email\"]")).sendKeys(arg3);
       driver.findElement(By.xpath("//*[@id=\"ap_password\"]")).sendKeys(arg4);
	}
	
	@Then("^User clicks on Continue button$")
	public void user_clicks_on_Continue_button() {
	   WebElement Continue_button= driver.findElement(By.xpath("//*[@id=\"auth-continue\"]"));
	   Continue_button.click();
	}

	@Then("^User is not able to create an account and error message is shown$")
	public void user_is_not_able_to_create_an_account_and_error_message_is_shown()  {
		WebElement Title2= driver.findElement(By.xpath("//*[@id=\"auth-error-message-box\"]/div"));
	    Assert.assertEquals("There was a problem", Title2);
		}
	

	@Then("^Browser gets closed$")
	public void browser_gets_closed()  {
	   
     driver.close();

	}
}
