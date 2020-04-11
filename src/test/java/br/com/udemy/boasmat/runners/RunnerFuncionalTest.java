package br.com.udemy.boasmat.runners;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features/", glue = "br.com.udemy.boasmat.steps", 
tags = {"@funcionais" }, plugin = { "pretty", "html:target/report-html", "json:target/report.json" }, // imprime tudo na
																									// tela - relatório
																									// no console
		monochrome = true, // retira caracteres coloridos
		snippets = SnippetType.CAMELCASE, // retira o "_" das palavras
		dryRun = false, // n executa os testes só valida se esta montado ----- modernizacao
		strict = false // passa td ou a maioria
)
public class RunnerFuncionalTest {
// teste por linha de comando	
	// renomear a classe Runner > RunnerTest.java
	// instalar o mvn no pc nas variaveis de ambiente
	// iniciar > mvn test
	// >mvn test -Dcucumber.options="-h"
	// roda outra feature
	// >mvn test
	// -Dcucumber.options="src/test/resources/features/aprender.cucumber.feature

	// deletar o banco
	@BeforeClass
	public static void reset() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\mathe\\Documents\\workspace-spring-tool-suite-4-4.6.0.RELEASE\\CursoCucumber\\chromedriver.exe");

		WebDriver driver = new ChromeDriver();
		driver.get("https://srbarriga.herokuapp.com/");
		driver.findElement(By.id("email")).sendKeys("matheus.svb@hotmail.com");
		driver.findElement(By.id("senha")).sendKeys("matheus1995");
		driver.findElement(By.tagName("button")).click();
		driver.findElement(By.linkText("reset")).click();
		driver.quit();	
	}

}
