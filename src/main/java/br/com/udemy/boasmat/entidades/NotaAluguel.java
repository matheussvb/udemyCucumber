package br.com.udemy.boasmat.entidades;

import java.util.Date;

public class NotaAluguel {

	private int preco;

	private Date dataEntrega;

	public int pontuacao;

	public int getPontuacao() {
		return pontuacao;
	}

	public void setPontuacao(int pontuacao) {
		this.pontuacao = pontuacao;
	}

	public int getPrecoAluguel() {
		return preco;
	}

	public void setPrecoAluguel(int precoAluguel) {
		this.preco = precoAluguel;
	}

	public Date getDataEntrega() {
		return this.dataEntrega;
	}

	public void setDataEntrega(Date time) {
		dataEntrega = time;

	}

}
