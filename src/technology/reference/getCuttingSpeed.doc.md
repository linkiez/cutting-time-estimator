# getCuttingSpeed

## Visão geral
Consulta da velocidade de referência, não uma seleção de material.
## Responsabilidades
Interpolar a tabela de velocidades do perfil selecionado.
## Entradas e saídas
Espessura em mm e identificador de máquina opcional; velocidade em mm/min.
## Fluxo principal
Resolve perfil (Glory Star por padrão) e delega a [interpolateParameter](./interpolateParameter.doc.md).
## Erros e casos-limite
Espessura deve ser positiva e finita; extremos saturam nesta API de consulta.
Exceção: perfis `exactThicknessOnly`, como HPR400XD, não interpolam nem saturam:
espessura listada usa a própria receita; espessura não listada dentro da faixa
tabelada usa a receita da espessura listada mais próxima (a mais grossa em caso de
empate); fora da faixa gera erro.
Perfil desconhecido ou sem tabela (Talvi) gera erro, sem referência de outra máquina.
## Exemplos
`getCuttingSpeed(3)` retorna 3400.
## Dependências e integrações
[Perfis](../profiles/machineProfiles.doc.md); use receita explícita para representar material/processo.
