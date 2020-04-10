# language: pt
Funcionalidade: Aprender Cucumber
	Como um aluno
	Eu quero aprender a utilizar Cucumber
	Para que eu posso automatizar criterios de aceitacao.

Cenário: Deve executar especificação
	Dado que criei o arquivo corretamente
	Quando executa-lo
	Então a especificacao deve finalizar com sucesso
	
Cenário: Deve incrementar o contador
	Dado que o valor é 123
	Quando eu incrementar em 35
	Então o valor do contador será 158
	
Cenário: Deve calcular atraso na entrega
	Dado que a entrega é dia 05/04/2018
	Quando a entrega atrasar em 2 dias
	Então a entrega será efetuada em 07/04/2018
	
Cenário: Deve calcular atraso no prazo de entrega da China
	Dado que o entrega é dia 05/04/2018
	Quando a entrega atrasar em 2 meses 
	Então a entrega será efetuada em 05/06/2018
	

