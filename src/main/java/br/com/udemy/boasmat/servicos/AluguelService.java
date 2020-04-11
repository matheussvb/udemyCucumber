package br.com.udemy.boasmat.servicos;

import br.com.udemy.boasmat.entidades.Filme;
import br.com.udemy.boasmat.entidades.NotaAluguel;
import br.com.udemy.boasmat.entidades.TipoAluguel;
import br.com.udemy.boasmat.utils.DateUtil;

public class AluguelService {

	public NotaAluguel alugar(Filme filme, TipoAluguel tipo) {

		if (filme.getEstoque() == 0) {
			throw new RuntimeException("Filme sem estoque");
		}

		NotaAluguel nota = new NotaAluguel();
		switch (tipo) {
		case COMUM:
			nota.setPrecoAluguel(filme.getAluguel());
			nota.setDataEntrega(DateUtil.obterDataComDiferencaDeDias(1));
			nota.setPontuacao(1);
			break;
		case EXTENDIDO:
			nota.setPrecoAluguel(filme.getAluguel() * 2);
			nota.setDataEntrega(DateUtil.obterDataComDiferencaDeDias(3));
			nota.setPontuacao(2);
			break;
		case SEMANAL:
			nota.setPrecoAluguel(filme.getAluguel() * 3);
			nota.setDataEntrega(DateUtil.obterDataComDiferencaDeDias(7));
			nota.setPontuacao(3);
			break;
		}
		filme.setEstoque(filme.getEstoque() - 1);

		return nota;
	}

}
