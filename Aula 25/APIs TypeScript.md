
# Aula: Introdução a APIs com TypeScript

## 1. Introdução às APIs
- **O que é uma API?**
  - API (Application Programming Interface) é um conjunto de definições e protocolos para construir e integrar software de aplicação.
  - Permite que diferentes sistemas se comuniquem entre si.

- **Tipos de APIs**
  - RESTful APIs
  - GraphQL
  - SOAP

## 2. Conceitos Fundamentais
- **Endpoints**
  - Pontos de acesso na API que respondem a diferentes tipos de requisições HTTP (GET, POST, PUT, DELETE).

- **Métodos HTTP**
  - GET: Recuperar dados.
  - POST: Enviar dados para criar um novo recurso.
  - PUT: Atualizar um recurso existente.
  - DELETE: Excluir um recurso.

- **Status Codes**
  - 200: OK
  - 201: Created
  - 400: Bad Request
  - 404: Not Found
  - 500: Internal Server Error

## 3. Configuração do Ambiente
- **Instalação do Node.js e npm**
- **Criação de um projeto TypeScript**
  ```bash
  mkdir api-ts-example
  cd api-ts-example
  npm init -y
  npm install typescript ts-node express @types/express
  npx tsc --init
  ```

## 4. Criando uma API Simples com TypeScript

### 4.1. Estrutura do Projeto
```
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

## 5. Testando a API
- **Testar usando ferramentas como Postman ou Insomnia**
  - Testar cada endpoint (GET, POST, PUT, DELETE)
  - Verificar respostas e status codes

## 6. Melhorias e Boas Práticas
- **Validação de dados com bibliotecas como Joi ou class-validator**
- **Autenticação e Autorização**
  - JWT (JSON Web Token)
- **Tratamento de erros**
  - Middleware de tratamento de erros

## 7. Conclusão
- **Recapitulação dos conceitos**
- **Próximos passos**
  - Implementação de funcionalidades adicionais
  - Integração com banco de dados (MySQL, MongoDB, etc.)
