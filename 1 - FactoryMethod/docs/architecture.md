# Fluxograma da Aplicação

Este fluxograma detalha o processo pelo qual as operações são solicitadas e processadas na aplicação Node.js utilizando MongoDB, aplicando o padrão Factory Method.

## Componentes do Fluxograma

### Ponto de Entrada

- **App.js:** Ponto de entrada da aplicação, onde as operações são solicitadas.

### Factory

- **Operation Factory:** Implementa o padrão Factory Method, criando instâncias de operações baseadas no tipo solicitado.

### Decisão de Operação

- **Tipo de Operação:** Decide qual tipo de operação criar, sendo as opções:
  - `InsertOperation`: Para criar um novo documento.
  - `FindOperation`: Para buscar documentos existentes.
  - `GenericOperation`: Para realizar uma operação genérica.

## Operações Específicas

- **InsertOperation:** Utiliza o `UserModel` para criar um novo documento no MongoDB.
- **FindOperation:** Utiliza o `UserModel` para buscar documentos no MongoDB.
- **GenericOperation:** Realiza operações genéricas definidas pelo usuário com o `UserModel`.

## Modelo e Banco de Dados

- **UserModel:** Modelo utilizado pelas operações para interagir com o MongoDB.
- **MongoDB:** O banco de dados onde as operações são efetivamente realizadas.

## Resumo

Este fluxograma demonstra claramente como as operações são gerenciadas na aplicação, desde a solicitação inicial no `App.js` até a interação final com o MongoDB. Destaca-se o papel central da `Operation Factory` na criação dinâmica de operações específicas, enfatizando a modularidade e a flexibilidade proporcionadas pelo padrão Factory Method.
