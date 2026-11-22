# resolveCuttingParameters

## Visão geral
Fronteira única de validação e resolução das opções de processo.
## Responsabilidades
Aplicar overrides, consultar apenas referências do perfil selecionado e normalizar unidades.
## Entradas e saídas
`CuttingTimeOptions` → escala, feed, perfuração, rápido, setup, leads, aceleração e
overhead de movimento específico do perfil.
## Fluxo principal
Valida espessura e alcance das tabelas, resolve valores opcionais, valida números
finitos e restrições de perfuração.
Glory Star é o perfil padrão. Talvi exige a receita explícita e usa o movimento de mesa do próprio
perfil, sem herdar referências da Glory Star. HPR400XD aplica somente receitas exatas de aço
carbono O₂/ar e também usa o movimento de mesa do seu perfil; rápido, setup e aceleração
explícitos nas opções têm prioridade.
## Erros e casos-limite
Rejeita negativos, zeros onde exigida positividade, tipos de perfuração inválidos,
`flying` sem duração e ausência de receita fora das referências.
Identificadores desconhecidos e parâmetros ausentes da Talvi geram erro com contexto.
Perfuração/setup zero são aceitos; aceleração e velocidades devem ser positivas.
Espessuras ausentes em tabelas discretas geram erro. Overrides explícitos de feed
e perfuração permitem usar uma receita medida sem modificar o catálogo.
## Exemplos
`resolveCuttingParameters({ materialThickness: 3, setupTimeSec: 0 });`
## Dependências e integrações
[Referências tecnológicas](../technology/reference/) e funções de interpolação;
usada pelo motor, não por parsers.
