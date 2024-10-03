# Introdução
Este repositório contém a implementação de um sistema de cadastro de usuários para um centro universitário, projetado para gerenciar diferentes perfis, incluindo pessoas físicas, pessoas jurídicas, professores, alunos e fornecedores. A aplicação é desenvolvida utilizando Create React App na linguagem JavaScript, proporcionando uma experiência de usuário fluida e interativa.

## Estrutura do Projeto
A estrutura do repositório é organizada em pastas que facilitam a navegação e a manutenção do código: 

/src: Contém todos os componentes da aplicação, divididos por tipo de usuário e funcionalidades. 

/components: Componentes reutilizáveis da interface. 

/pages: Páginas específicas, como Cadastro, Listagem e Detalhes do Usuário. 

/hooks: Hooks personalizados para gerenciar estados e efeitos colaterais.

/styles: Arquivos CSS que definem a estilização da interface. 

/utils: Funções auxiliares e validações reutilizáveis. 

/api: Integração com a API para gerenciar o armazenamento e a recuperação de dados.

## Executando o Projeto
Para iniciar o servidor de desenvolvimento, execute:
![Start](https://github.com/DanuziaRA/Projeto-frontend-Cadastros/blob/main/C%C3%B3digo%201.jpg)

ou, se você estiver usando Yarn:
![yarn](https://github.com/DanuziaRA/Projeto-frontend-Cadastros/blob/main/C%C3%B3digo%202.jpg)

Isso carregará o aplicativo em http://localhost:3000.

## Funcionalidades Principais
1. Cadastro de Usuários: Formulários adaptados para cada tipo de usuário, com validações específicas para garantir dados corretos e completos. 

2. Edição e Exclusão: Funcionalidades que permitem aos administradores gerenciar dados cadastrados, facilitando a atualização de informações. 

3. Feedback em Tempo Real: Mensagens de validação instantâneas para cada campo dos formulários, melhorando a usabilidade. 

4. Navegação Intuitiva: Uso do React Router para gerenciar rotas e permitir transições suaves entre as diferentes seções do site, como cadastro, listagem e detalhes dos usuários.
      
## 

# Introduction
This repository contains the implementation of a user registration system for a university center, designed to manage different profiles, including individuals, legal entities, teachers, students, and suppliers. This project was bootstrapped with Create React App in JavaScript, providing a smooth and interactive user experience.

## Project Structure
The repository is organized into folders that facilitate navigation and code maintenance:

/src: Contains all the application components, divided by user type and functionalities.

/components: Reusable interface components.

/pages: Specific pages such as Registration, Listing, and User Details.

/hooks: Custom hooks for managing states and side effects.

/styles: CSS files that define the styling of the interface.

/utils: Helper functions and reusable validations.

/api: API integration for managing data storage and retrieval.

## Main Features
User Registration: Forms tailored for each type of user, with specific validations to ensure correct and complete data.

Editing and Deletion: Features that allow administrators to manage registered data, facilitating the update of information.

Real-Time Feedback: Instant validation messages for each field in the forms, improving usability.

Intuitive Navigation: Use of React Router to manage routes and allow smooth transitions between different sections of the site, such as registration, listing, and user details.

## Available Scripts
In the project directory, you can run:

## yarn start
Runs the app in the development mode.
![yarn](https://github.com/DanuziaRA/Projeto-frontend-Cadastros/blob/main/C%C3%B3digo%202.jpg)

Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## yarn test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

## yarn build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

## yarn eject
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More
You can learn more in the Create React App documentation.
To learn React, check out the React documentation.

