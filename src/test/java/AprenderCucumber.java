import static org.junit.Assert.assertEquals;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.junit.Assert;

import cucumber.api.PendingException;
import cucumber.api.java.ca.Cal;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class AprenderCucumber {

	@Dado("^que criei o arquivo corretamente$")
	public void queCrieiOArquivoCorretamente() throws Throwable {
		System.out.println("qq coisa!!");
	}

	@Quando("^executa-lo$")
	public void executaLo() throws Throwable {
	}

	@Então("^a especificacao deve finalizar com sucesso$")
	public void aEspecificacaoDeveFinalizarComSucesso() throws Throwable {
	}

	private int contador = 0;

	@Dado("^que o valor é (\\d+)$")
	public void que_o_valor_é(int arg1) throws Throwable {
		contador = arg1;
	}

	@Quando("^eu incrementar em (\\d+)$")
	public void eu_incrementar_em(int arg1) throws Throwable {
		contador = contador + arg1;
	}

	@Então("^o valor do contador será (\\d+)$")
	public void o_valor_do_contador_será(int arg1) throws Throwable {
		Assert.assertEquals(arg1, contador);
	}

	Date entrega = new Date();

	@Dado("^que a entrega é dia (\\d+)/(\\d+)/(\\d+)$")
	public void que_a_entrega_é_dia(int dia, int mes, int ano) throws Throwable {

		Calendar cal = Calendar.getInstance();

		cal.set(Calendar.DAY_OF_MONTH, dia);
		cal.set(Calendar.MONTH, mes - 1);
		cal.set(Calendar.YEAR, ano);

		entrega = cal.getTime();

	}

	@Quando("^a entrega atrasar me (\\d+) (.+)$")
	public void a_entrega_atrasar_me_dias(int arg1, String tempo) throws Throwable {
		Calendar cal = Calendar.getInstance();
		cal.setTime(entrega);

		if (tempo.equals("dias")) {
			cal.add(Calendar.DAY_OF_MONTH, arg1);
		}
		if (tempo.equals("dias")) {
			cal.add(Calendar.MONTH, arg1);
		}
		entrega = cal.getTime();
	}

	@Então("^a entrega será efetuada em (\\d{2}\\/\\d{2}\\/\\d{4})$")
	public void a_entrega_será_efetuada_em(String data) throws Throwable {
		DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		String dataFormatada = format.format(entrega);

		assertEquals(data, dataFormatada);
	}

}
