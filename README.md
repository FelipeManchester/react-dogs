# Dogs

Rede social para cachorros: os usuários criam uma conta, postam fotos dos seus cães, comentam nas fotos dos outros e acompanham as estatísticas de acesso das próprias postagens.

Projeto final do curso de React da [Origamid](https://www.origamid.com/), refeito com ferramentas atuais: React 19, Vite e React Router 7, com Tailwind CSS no lugar dos CSS Modules do curso original e Zod no lugar da validação manual dos formulários.

## Funcionalidades

- **Feed de fotos** com scroll infinito (carrega 6 fotos por vez)
- **Modal da foto** com comentários, animação de abrir e fechar, e fechamento ao clicar fora
- **Página própria de cada foto** (`/foto/:id`) e **perfil de cada usuário** (`/perfil/:usuario`)
- **Autenticação** com token JWT, login automático ao voltar ao site e rotas protegidas
- **Cadastro, login e recuperação de senha** por email
- **Área do usuário:** feed das próprias fotos, postagem com preview da imagem e exclusão de fotos
- **Estatísticas** com gráficos de acessos, carregados sob demanda (`lazy` + `Suspense`)
- **Validação de formulários** com Zod
- **Layout responsivo**, com menu mobile na área do usuário
- **Skeleton** enquanto as imagens carregam e título da aba por página

## Tecnologias

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router 7](https://reactrouter.com/)
- [Tailwind CSS 3](https://v3.tailwindcss.com/)
- [Zod](https://zod.dev/) para validação
- [Victory](https://commerce.nearform.com/open-source/victory/) para os gráficos
- [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr) para importar SVGs como componentes
- ESLint e Prettier (com `prettier-plugin-tailwindcss` para ordenar as classes)

## Como rodar

**Pré-requisito:** [Node.js](https://nodejs.org/) 20 ou mais recente.

1. Clone o repositório e entre na pasta:

   ```bash
   git clone https://github.com/FelipeManchester/react-dogs.git
   cd projeto-final-dogs
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto com a URL da API:

   ```
    API_URL_BASE=https://dogsapi.origamid.dev/json
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   O site abre em `http://localhost:5173`.

## Scripts

| Comando           | O que faz                                       |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento            |
| `npm run build`   | Gera a versão de produção na pasta `dist`       |
| `npm run preview` | Serve localmente a versão de produção já gerada |
| `npm run lint`    | Verifica o código com o ESLint                  |

## API

O projeto consome a API pública do curso, em `https://dogsapi.origamid.dev/json`. As chamadas ficam centralizadas em `src/api/auth.js`: cada função descreve um endpoint e devolve `{ url, options }` para o `fetch`.

A API é compartilhada entre todos os alunos do curso. As fotos e os usuários do feed são de outras pessoas, e o que você postar fica visível para todos.

## Estrutura

```
src/
├── api/          # Funções que descrevem cada endpoint da API
├── assets/       # Imagens e ícones SVG
├── Components/   # Componentes por área: Feed, Login, Photo, User, Forms
├── context/      # Contexto do usuário (login, logout, dados da conta)
├── Helper/       # Componentes de apoio: Loading, Error, Image, Head, ProtectedRoute
├── Hooks/        # Hooks próprios: useFetch, useForm, UseMediaScreen
├── schemas.js    # Regras de validação dos formulários (Zod)
└── Main.css      # Estilos globais e classes reutilizáveis do Tailwind
```

## Créditos

Projeto desenvolvido durante o curso de React da [Origamid](https://www.origamid.com/). Layout e API são do curso.
