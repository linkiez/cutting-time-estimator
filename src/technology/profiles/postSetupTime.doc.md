# POST_SETUP_TIME_SEC

## Visão geral
Tempo de setup por trabalho, 1,5 s, usado nos perfis cujos pós não informam esse valor.
## Responsabilidades
Evitar que Talvi e HPR400XD exijam um setup explícito quando nenhuma medição existe.
## Entradas e saídas
Constante numérica em segundos.
## Fluxo principal
`machineProfiles` a atribui a `setupTimeSec` de Talvi e HPR400XD; o chamador pode sobrescrever.
## Erros e casos-limite
É a mesma referência da Glory Star, não uma medição das mesas Talvi ou HPR400XD.
