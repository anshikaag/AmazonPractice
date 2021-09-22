package CommonFunctions;


import java.util.concurrent.TimeUnit;


import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

public class Test {

	public static void main(String[] args) throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\91798\\Downloads\\chromedriver_win32\\chromedriver.exe");
		WebDriver driver= new ChromeDriver();
	    driver.manage().window().maximize();
	    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);    
	    driver.manage().deleteAllCookies();
	    driver.get("https://www.amazon.in");
	   String Title= driver.getTitle();
	   System.out.println(Title);
	   Assert.assertEquals("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in", Title);
	   //@When("^User clicks on Start Here button$")
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
	  	   
	  //User enters details
	   String Title1= driver.getTitle();
	   System.out.println(Title1);
	}

}
