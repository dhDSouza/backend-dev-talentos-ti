# Aula: Introdução a APIs com TypeScript

## 1. Introdução às APIs

- **O que é uma API?**

  - `API` (*Application Programming Interface*) é um conjunto de definições e protocolos para construir e integrar software de aplicação.

  - Permite que diferentes sistemas se comuniquem entre si.

- **Tipos de APIs**

  - RESTful APIs
  - GraphQL
  - SOAP

## 2. Conceitos Fundamentais

- **Endpoints**

  - Pontos de acesso na `API` que respondem a diferentes tipos de requisições `HTTP` (`GET`, `POST`, `PUT`, `DELETE`).

- **Métodos HTTP**

  - `GET`: Recuperar dados.
  - `POST`: Enviar dados para criar um novo recurso.
  - `PUT`: Atualizar um recurso existente.
  - `DELETE`: Excluir um recurso.

- **Status Codes**

  - `200`: **OK**
  - `201`: **Created**
  - `400`: **Bad Request**
  - `404`: **Not Found**
  - `500`: **Internal Server Error**

## 3. Configuração do Ambiente

- **Instalação do Node.js e npm**

- **Criação de um projeto TypeScript**

```sh
mkdir api-ts-example
cd api-ts-example
npm init -y
npm install typescript ts-node express @types/express @types/node
npx tsc --init
```

## 4. Criando uma API Simples com TypeScript

### 4.1. Estrutura do Projeto

```sh
api-ts-example/
├── src/
│   ├── index.ts
│   ├── routes/
│   │   └── userRoutes.ts
│   └── controllers/
│       └── userController.ts
├── tsconfig.json
└── package.json
```

### 4.2. Código

- **index.ts**

```typescript
import express from 'express';
import userRoutes from './routes/userRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

<details>

1. **Importações**:
    ```typescript
    import express from 'express';
    import userRoutes from './routes/userRoutes';
    ```
    - A primeira linha importa o módulo `express`, que é um framework para construir aplicações web em Node.js.
    - A segunda linha importa as rotas de usuários (`userRoutes`) que definimos no arquivo `userRoutes.ts`.

2. **Criação da Aplicação Express**:
    ```typescript
    const app = express();
    const port = 3000;
    ```
    - `const app = express();`: Cria uma nova aplicação Express.
    - `const port = 3000;`: Define a porta na qual o servidor irá escutar as requisições. Neste caso, a porta 3000.

3. **Middlewares**:
    ```typescript
    app.use(express.json());
    app.use('/api/users', userRoutes);
    ```
    - `app.use(express.json());`: Adiciona um middleware que converte automaticamente o corpo das requisições JSON em objetos JavaScript acessíveis via `req.body`. Isso é necessário para que possamos lidar facilmente com dados enviados no corpo das requisições HTTP POST e PUT.
    - `app.use('/api/users', userRoutes);`: Adiciona um middleware que monta o roteador de usuários (`userRoutes`) no caminho `/api/users`. Isso significa que todas as rotas definidas em `userRoutes` estarão acessíveis sob o caminho `/api/users`.

4. **Inicialização do Servidor**:
    ```typescript
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
    ```
    - `app.listen(port, () => { ... });`: Inicia o servidor na porta definida (3000) e exibe uma mensagem no console indicando que o servidor está em execução e disponível no endereço `http://localhost:3000`.

### Fluxo Completo

1. **Inicialização**:
    - O servidor é inicializado na porta 3000.
    - O middleware `express.json()` é configurado para processar o corpo das requisições JSON.

2. **Rotas**:
    - Todas as rotas para `/api/users` são gerenciadas pelo roteador `userRoutes`.
    - Dentro de `userRoutes`, temos as seguintes rotas:
      - `GET /api/users` -> `getUsers` (obtém todos os usuários)
      - `POST /api/users` -> `createUser` (cria um novo usuário)
      - `PUT /api/users/:id` -> `updateUser` (atualiza um usuário existente)
      - `DELETE /api/users/:id` -> `deleteUser` (deleta um usuário existente)

3. **Requisições e Respostas**:
    - Quando uma requisição é feita para qualquer uma dessas rotas, a função correspondente no controlador (`userController.ts`) é chamada para manipular a requisição e enviar uma resposta apropriada.

</details>

- **userRoutes.ts**

```typescript
import { Router } from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/userController';

const router = Router();

router.get('/', getUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
```

<details>

1. **Importações**:
    ```typescript
    import { Router } from 'express';
    import { getUsers, createUser, updateUser, deleteUser } from '../controllers/userController';
    ```
    - A primeira linha importa a função `Router` do Express, que é usada para criar um novo roteador.
    - A segunda linha importa as funções `getUsers`, `createUser`, `updateUser` e `deleteUser` do controlador de usuários (`userController.ts`). Essas funções são responsáveis por manipular as requisições HTTP correspondentes.

2. **Criação do Roteador**:
    ```typescript
    const router = Router();
    ```
    Aqui, um novo roteador é criado usando a função `Router` do Express. Este roteador será usado para definir rotas específicas para o recurso de usuários.

3. **Definição das Rotas**:
    ```typescript
    router.get('/', getUsers);
    router.post('/', createUser);
    router.put('/:id', updateUser);
    router.delete('/:id', deleteUser);
    ```
    - `router.get('/', getUsers);`: 
      - Define uma rota HTTP GET para o caminho raiz (`/`).
      - Quando essa rota é acessada, a função `getUsers` do controlador é chamada para manipular a requisição.
      - Essa rota é usada para obter a lista de todos os usuários.
    - `router.post('/', createUser);`: 
      - Define uma rota HTTP POST para o caminho raiz (`/`).
      - Quando essa rota é acessada, a função `createUser` do controlador é chamada para manipular a requisição.
      - Essa rota é usada para criar um novo usuário.
    - `router.put('/:id', updateUser);`: 
      - Define uma rota HTTP PUT para o caminho com um parâmetro (`/:id`). 
      - Quando essa rota é acessada com um ID específico, a função `updateUser` do controlador é chamada para manipular a requisição. 
      - Essa rota é usada para atualizar um usuário existente com o ID fornecido.
    - `router.delete('/:id', deleteUser);`: 
      - Define uma rota HTTP DELETE para o caminho com um parâmetro (`/:id`). 
      - Quando essa rota é acessada com um ID específico, a função `deleteUser` do controlador é chamada para manipular a requisição.
      - Essa rota é usada para deletar um usuário existente com o ID fornecido.

4. **Exportação do Roteador**:
    ```typescript
    export default router;
    ```
    Aqui, o roteador é exportado como o padrão do módulo. Isso permite que ele seja importado e usado em outras partes da aplicação, como no arquivo principal do servidor (`index.ts`).

</details>

- **userController.ts**

```typescript
import { Request, Response } from 'express';

let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

export const getUsers = (req: Request, res: Response) => {
  res.status(200).json(users);
};

export const createUser = (req: Request, res: Response) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
};

export const updateUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const index = users.findIndex(user => user.id === parseInt(id));
  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    res.status(200).json(users[index]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;
  users = users.filter(user => user.id !== parseInt(id));
  res.status(200).json({ message: 'User deleted' });
};
```

<details>

1. **Importações**:
    ```typescript
    import { Request, Response } from 'express';
    ```
    Aqui, estamos importando os tipos `Request` e `Response` do Express para tipar nossos parâmetros de função, o que ajuda com a autocompletação e validação de tipos no TypeScript.

2. **Lista de Usuários**:
    ```typescript
    let users = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ];
    ```
    `users` é um array que contém objetos de usuário com propriedades `id` e `name`. Esta lista serve como nosso banco de dados temporário.

3. **getUsers**:
    ```typescript
    export const getUsers = (req: Request, res: Response) => {
      res.status(200).json(users);
    };
    ```
    Esta função manipula o endpoint para obter todos os usuários. Ela responde com um status HTTP 200 e envia a lista de usuários como JSON.

4. **createUser**:
    ```typescript
    export const createUser = (req: Request, res: Response) => {
      const newUser = { id: users.length + 1, ...req.body };
      users.push(newUser);
      res.status(201).json(newUser);
    };
    ```
    Esta função manipula o endpoint para criar um novo usuário. Ela:
    - Extrai os dados do corpo da requisição (`req.body`) e cria um novo usuário, adicionando um ID único baseado no comprimento do array `users`.
    - Adiciona o novo usuário ao array `users`.
    - Responde com um status HTTP 201 (Created) e envia o novo usuário como JSON.

5. **updateUser**:
    ```typescript
    export const updateUser = (req: Request, res: Response) => {
      const { id } = req.params;
      const index = users.findIndex(user => user.id === parseInt(id));
      if (index !== -1) {
        users[index] = { ...users[index], ...req.body };
        res.status(200).json(users[index]);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    };
    ```
    Esta função manipula o endpoint para atualizar um usuário existente. Ela:
    - Extrai o ID dos parâmetros da requisição (`req.params`).
    - Encontra o índice do usuário com o ID correspondente no array `users`.
    - Se o usuário for encontrado (`index !== -1`), atualiza os dados do usuário com os dados do corpo da requisição (`req.body`) e responde com um status HTTP 200 e o usuário atualizado como JSON.
    - Se o usuário não for encontrado, responde com um status HTTP 404 (Not Found) e uma mensagem de erro.

6. **deleteUser**:
    ```typescript
    export const deleteUser = (req: Request, res: Response) => {
      const { id } = req.params;
      users = users.filter(user => user.id !== parseInt(id));
      res.status(200).json({ message: 'User deleted' });
    };
    ```
    Esta função manipula o endpoint para deletar um usuário. Ela:
    - Extrai o ID dos parâmetros da requisição (`req.params`).
    - Filtra o array `users` para remover o usuário com o ID correspondente.
    - Responde com um status HTTP 200 e uma mensagem de confirmação da exclusão do usuário.

</details>

## 5. Testando a API

- Execute a aplicação.

```sh
npx ts-node index.ts
```

- **Testar usando ferramentas como Postman ou Insomnia**

  - Testar cada endpoint (`GET`, `POST`, `PUT`, `DELETE`)

    - Faça o download do Postman ou do Insomnia
      - [Postman](https://www.postman.com/)
      - [Insomnia](https://insomnia.rest/)

  - Verificar respostas e status codes

## 6. Melhorias e Boas Práticas

- **Validação de dados com bibliotecas como Joi ou class-validator**

- **Autenticação e Autorização**

  - JWT (JSON Web Token)

- **Tratamento de erros**

  - Middleware de tratamento de erros

## 7. Conclusão

- **Próximos passos**

  - Implementação de funcionalidades adicionais
  - Integração com banco de dados (MySQL, MongoDB, etc.)
