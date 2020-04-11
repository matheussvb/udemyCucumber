$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("inserir_conta.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Cadastro de contas",
  "description": "\r\nComo um usuário \r\nGostaria de cadastrar contas\r\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-contas",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 13,
  "name": "adiciono a conta \"\u003cconta\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "comments": [
    {
      "line": 17,
      "value": "#Contexto:"
    },
    {
      "line": 18,
      "value": "#Dado que estou acessando a aplicação"
    },
    {
      "line": 19,
      "value": "#Quando informo o usuário \"matheus.svb@hotmail.com\""
    },
    {
      "line": 20,
      "value": "#E a senha \"matheus1995\""
    },
    {
      "line": 21,
      "value": "#E seleciono entrar"
    },
    {
      "line": 22,
      "value": "#Então visualizo a página inicial"
    },
    {
      "line": 23,
      "value": "#Quando seleciono Contas"
    },
    {
      "line": 24,
      "value": "#E seleciono Adicionar"
    },
    {
      "line": 26,
      "value": "#Esquema do Cenário: deve validar regras cadastro contas"
    },
    {
      "line": 27,
      "value": "#Quando informo a conta \"\u003cconta\u003e\""
    },
    {
      "line": 28,
      "value": "#E seleciono Salvar"
    },
    {
      "line": 29,
      "value": "#Então recebo a mensagem \"\u003cmensagem\u003e\""
    }
  ],
  "line": 31,
  "name": "",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;",
  "rows": [
    {
      "cells": [
        "conta",
        "mensagem"
      ],
      "line": 32,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;1"
    },
    {
      "cells": [
        "Conta de teste",
        "Conta adicionada com sucesso!"
      ],
      "line": 33,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2"
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ],
      "line": 34,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3"
    },
    {
      "cells": [
        "Conta mesmo nome",
        "Já existe uma conta com esse nome!"
      ],
      "line": 35,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 252200,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que desejo adicionar uma conta",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.queDesejoAdicionarUmaConta()"
});
formatter.result({
  "duration": 7861620400,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "adiciono a conta \"Conta de teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "recebo a mensagem \"Conta adicionada com sucesso!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de teste",
      "offset": 18
    }
  ],
  "location": "InserirContasSteps.adicionoAConta(String)"
});
formatter.result({
  "duration": 1043000500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta adicionada com sucesso!",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 44210200,
  "status": "passed"
});
formatter.after({
  "duration": 390880900,
  "status": "passed"
});
formatter.after({
  "duration": 1461768100,
  "status": "passed"
});
formatter.before({
  "duration": 43900,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que desejo adicionar uma conta",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.queDesejoAdicionarUmaConta()"
});
formatter.result({
  "duration": 7122729700,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "adiciono a conta \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "recebo a mensagem \"Informe o nome da conta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "InserirContasSteps.adicionoAConta(String)"
});
formatter.result({
  "duration": 393130200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Informe o nome da conta",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 42269300,
  "status": "passed"
});
formatter.after({
  "duration": 357238200,
  "status": "passed"
});
formatter.after({
  "duration": 850014800,
  "status": "passed"
});
formatter.before({
  "duration": 31200,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que desejo adicionar uma conta",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.queDesejoAdicionarUmaConta()"
});
formatter.result({
  "duration": 7657197400,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "adiciono a conta \"Conta mesmo nome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "recebo a mensagem \"Já existe uma conta com esse nome!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta mesmo nome",
      "offset": 18
    }
  ],
  "location": "InserirContasSteps.adicionoAConta(String)"
});
formatter.result({
  "duration": 824627300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Já existe uma conta com esse nome!",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 72738600,
  "status": "passed"
});
formatter.after({
  "duration": 365933500,
  "status": "passed"
});
formatter.after({
  "duration": 758540800,
  "status": "passed"
});
});