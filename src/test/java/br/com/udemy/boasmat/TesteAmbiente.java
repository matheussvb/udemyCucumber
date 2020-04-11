package br.com.udemy.boasmat;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TesteAmbiente {

	public static void main(String[] args) {
		
		System.setProperty("webdriver.chrome.driver", 
				"C:\\Users\\mathe\\Documents\\workspace-spring-tool-suite-4-4.6.0.RELEASE\\CursoCucumber\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("https://srbarriga.herokuapp.com/");
		
	}

}
