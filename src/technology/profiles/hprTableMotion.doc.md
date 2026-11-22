# HPR400XD_TABLE_MOTION

## Visão geral
Movimento de mesa da Hypertherm HPR400XD: 1200 mm/min e 416,666 mm/s².
## Responsabilidades
Fornecer o posicionamento rápido e a aceleração do perfil `hypertherm-hpr400xd`.
## Entradas e saídas
Objeto imutável `TableMotion`.
## Fluxo principal
Origem: campo 411 "RAPID FEEDRATE AND ACCELERATION" do pós SigmaNEST
`Hypertherm_EDGEPro_HPR400XDa.pst`. O chamador pode sobrescrever os valores nas opções.
## Erros e casos-limite
O valor em pol/min do mesmo campo (100) não converte para os 1200 mm/min: o posicionamento
rápido é o menos confiável dos dois. Configuração do pós, não medição da mesa.
