# interpolateParameter

## Visão geral
Resolução interpolada ou exata das tabelas de referência.
## Responsabilidades
Compartilhar a regra entre velocidade e perfuração.
## Entradas e saídas
Tabela numérica e espessura positiva; parâmetro interpolado na unidade da tabela.
Terceiro argumento `exactThicknessOnly` opcional, padrão `false`.
## Fluxo principal
Ordenar espessuras → localizar intervalo → interpolar.
Com `exactThicknessOnly: true`, devolver o valor da chave exata; sem ela, e dentro da faixa tabelada, o da espessura listada mais próxima (a mais grossa em caso de empate).
## Erros e casos-limite
Espessura inválida gera erro; consultas fora da tabela saturam nos extremos por
compatibilidade. O motor exige receita nesses casos.
Perfis discretos, como HPR400XD, não misturam receitas de correntes diferentes:
espessura fora da faixa tabelada é rejeitada; dentro dela, a receita mais próxima
(a mais grossa em caso de empate) é usada.
## Exemplos
Entre valores 10 em 1 mm e 20 em 2 mm, retorna 15 em 1,5 mm. Em perfil discreto com receitas de 6 e 7 mm, 6,35 mm usa a de 6 mm.
## Dependências e integrações
Chamado por `getCuttingSpeed`, `getPierceTime` e pelo resolver do motor.
