# Visão Geral
Bem-vindo à API de Marketplace! Este projeto é uma API baseada em TypeScript construída com o NestJS, seguindo os princípios da Arquitetura Hexagonal. Utiliza o Prisma como ORM de banco de dados, Yup para validação de dados, e Jest para testes. A API foi desenvolvida para funcionar como um marketplace, onde empresas podem se cadastrar, adicionar produtos, e clientes podem adicionar itens ao carrinho e realizar compras.

## Sumário
<ul>
<li>Pré-requisitos</li>
<li>Começando</li>
<li>Estrutura do Projeto</li>
<li>Banco de Dados</li>
<li>Variáveis de Ambiente</li>
<li>Validação com Yup</li>
<li>Testes</li>
<li>.Endpoints</li>
<li>Exemplos</li>
<li>Contribuições</li>
<li>Licença</li>
</ul>


## Pré-requisitos
Certifique-se de ter os seguintes itens instalados em sua máquina:

<li>Node.js</li>
<li>npm (Node Package Manager)</li>
<li>Banco de dados MySQL</li>
<li>TypeScript</li>

## Começando

<ul>
  <li>Clone o repositório:</li>
  git clone https://github.com/DavidTMaciel/marketplace.git 
  <li>Instale as dependências:</li>
  cd api-marketplace
  npm install
  <li>Inicie a aplicação</li>
  npm run start:dev
</ul>

## Banco de Dados
Este projeto utiliza o MySQL como banco de dados. O Prisma é configurado como ORM, e as migrações são gerenciadas através do Prisma CLI.
