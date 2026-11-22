# TALVI_6000W_TABLE_MOTION

## Visão geral
Movimento de mesa da Talvi 6000 W: 26000 mm/min e 200 mm/s².
## Responsabilidades
Fornecer o posicionamento rápido e a aceleração do perfil `talvi-6000w-raytools`.
## Entradas e saídas
Objeto imutável `TableMotion`.
## Fluxo principal
Origem: campo 411 "RAPID FEED&ACC" do pós SigmaNEST `Talvi_6000W.pst`. O chamador pode
sobrescrever `rapidSpeed` e `accelerationMmPerSec2` nas opções.
## Erros e casos-limite
O pós repete os valores do modelo da Glory Star: são configuração do pós, não medição da mesa.
