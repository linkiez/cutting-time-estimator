# Changelog

All notable changes to this project will be documented in this file.

## 3.1.0 (2026-11-23)

* feat(hpr): usar a receita da espessura mais próxima dentro da faixa ([0ad6bdf](https://github.com/linkiez/cutting-time-estimator/commit/0ad6bdf))

## 3.0.0 (2026-11-22)

* refactor!: renomear o pacote para @linkiez/cutting-time-estimator ([7bd0c7c](https://github.com/linkiez/cutting-time-estimator/commit/7bd0c7c))


### BREAKING CHANGE

* o pacote @linkiez/glory-star-calculator passou a se chamar @linkiez/cutting-time-estimator; troque a dependência e os imports, a API não mudou.

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>

## 2.3.0 (2026-11-22)

* feat(profiles): carregar o movimento de mesa dos perfis Talvi e HPR400XD ([1c32d97](https://github.com/linkiez/glory-star-calculator/commit/1c32d97))

## 2.2.0 (2026-10-28)

* docs: documentar perfis e receitas Talvi no readme ([0734680](https://github.com/linkiez/glory-star-calculator/commit/0734680))
* feat(talvi): importar receitas de aço carbono do HSTool ([ecabf42](https://github.com/linkiez/glory-star-calculator/commit/ecabf42))

## 2.1.0 (2026-10-26)

* docs(talvi): listar parâmetros para o operador ([8682f49](https://github.com/linkiez/glory-star-calculator/commit/8682f49))
* feat(technology): adicionar perfis e receitas de máquinas ([fa7ea38](https://github.com/linkiez/glory-star-calculator/commit/fa7ea38))

## 2.0.0 (2026-10-24)

* fix(calculo): corrigir geometria e estimativa do tempo de corte ([377e9a8](https://github.com/linkiez/glory-star-calculator/commit/377e9a8))
* fix(release): evitar notas longas no commit automático ([7ad7cf9](https://github.com/linkiez/glory-star-calculator/commit/7ad7cf9))
* docs(publicacao): reorganizar guias de release ([4eed54c](https://github.com/linkiez/glory-star-calculator/commit/4eed54c))
* Merge pull request #1 from linkiez/dependabot/npm_and_yarn/npm_and_yarn-4265e88a4c ([a9049e9](https://github.com/linkiez/glory-star-calculator/commit/a9049e9)), closes [#1](https://github.com/linkiez/glory-star-calculator/issues/1)
* refactor!: organizar biblioteca e ferramentas por responsabilidade ([63fb3c1](https://github.com/linkiez/glory-star-calculator/commit/63fb3c1))
* chore(hooks): executar testes com npm no pré-commit ([c007190](https://github.com/linkiez/glory-star-calculator/commit/c007190))
* build(deps): bump js-yaml in the npm_and_yarn group across 1 directory ([c8365fb](https://github.com/linkiez/glory-star-calculator/commit/c8365fb))


### BREAKING CHANGE

* remove os módulos internos cuttingCalculator,
svgProcessor, types e constants. Migração: importe os símbolos de
@linkiez/glory-star-calculator; use dist/node para leitura de arquivos.
Os exports da entrada principal permanecem disponíveis.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>

## 1.5.0 (2026-02-06)

* refactor: corrigir problemas de lint em arquivos de revisão ([4d2e2d9](https://github.com/linkiez/glory-star-calculator/commit/4d2e2d9))
* feat: adicionar commitlint e husky para validação de commits ([dc1f095](https://github.com/linkiez/glory-star-calculator/commit/dc1f095))
* feat: adicionar semantic-release e workflow de publicação ([8d519e7](https://github.com/linkiez/glory-star-calculator/commit/8d519e7))
