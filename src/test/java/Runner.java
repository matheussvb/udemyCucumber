import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = "pretty",  //imprime tudo na tela
		monochrome = true, //retira caracteres coloridos
		snippets = SnippetType.CAMELCASE, // retira o "_" das palavras
		dryRun = false, // n executa os testes só valida se esta montado ----- modernizacao
		strict = false // passa td ou a maioria 
		)
public class Runner {

}
