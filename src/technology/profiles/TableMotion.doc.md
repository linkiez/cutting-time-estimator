# TableMotion

## Visão geral
Tipo do movimento da mesa de uma máquina: posicionamento rápido e aceleração.
## Responsabilidades
Descrever os valores de mesa que um perfil de máquina carrega além da receita de processo.
## Entradas e saídas
`rapidSpeed` em mm/min e `accelerationMmPerSec2` em mm/s², ambos somente leitura.
## Fluxo principal
Os perfis Talvi e HPR400XD usam este formato; o setup por trabalho é `POST_SETUP_TIME_SEC`.
## Erros e casos-limite
Nenhuma validação aqui: `resolveCuttingParameters` exige valores positivos e finitos.
