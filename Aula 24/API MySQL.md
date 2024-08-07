# Criação de API CRUD com MySQL

Vamos criar uma API REST CRUD simples em TypeScript usando `mysql2`, estruturada com `models`, `controllers` e `routes`.

### Passo 1: Configuração do Projeto

Crie um novo diretório para o seu projeto e inicialize um novo projeto Node.js:

```bash
mkdir api-cursos
cd api-cursos
npm init -y
```

### Passo 2: Instalação das Dependências

Instale as dependências necessárias:

```bash
npm install express mysql2 typescript ts-node-dev @types/express
```

### Passo 3: Configuração do TypeScript

Crie um arquivo `tsconfig.json` na raiz do seu projeto:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

### Passo 4: Estrutura de Pastas

Crie a seguinte estrutura de pastas:

```
api-cursos/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── index.ts
│   └── db.ts
├── tsconfig.json
└── package.json
```

### Passo 5: Configuração do Banco de Dados

Crie o arquivo `src/db.ts` para configurar a conexão com o banco de dados:

```typescript
import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'API'
});
```

### Passo 6: Modelos

Crie os modelos `Curso` e `Aluno` em `src/models/curso.ts` e `src/models/aluno.ts`:

#### `src/models/curso.ts`:

```typescript
import { db } from '../db';

export class Curso {
  private id: number;
  private nome: string;
  private descricao: string;

  constructor(id: number, nome: string, descricao: string) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
  }

  static async getAll() {
    const [rows] = await db.query('SELECT * FROM CURSOS');
    return rows;
  }

  static async getById(id: number) {
    const [rows] = await db.query('SELECT * FROM CURSOS WHERE ID = ?', [id]);
    return rows[0];
  }

  static async create(nome: string, descricao: string) {
    const [result] = await db.query('INSERT INTO CURSOS (NOME, DESCRICAO) VALUES (?, ?)', [nome, descricao]);
    return result;
  }

  static async update(id: number, nome: string, descricao: string) {
    const [result] = await db.query('UPDATE CURSOS SET NOME = ?, DESCRICAO = ? WHERE ID = ?', [nome, descricao, id]);
    return result;
  }

  static async delete(id: number) {
    const [result] = await db.query('DELETE FROM CURSOS WHERE ID = ?', [id]);
    return result;
  }
}
```

#### `src/models/aluno.ts`:

```typescript
import { db } from '../db';

export class Aluno {
  private id: number;
  private nome: string;
  private email: string;
  private idCurso: number;

  constructor(id: number, nome: string, email: string, idCurso: number) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.idCurso = idCurso;
  }

  static async getAll() {
    const [rows] = await db.query('SELECT * FROM ALUNOS');
    return rows;
  }

  static async getById(id: number) {
    const [rows] = await db.query('SELECT * FROM ALUNOS WHERE ID = ?', [id]);
    return rows[0];
  }

  static async create(nome: string, email: string, idCurso: number) {
    const [result] = await db.query('INSERT INTO ALUNOS (NOME, EMAIL, ID_CURSO) VALUES (?, ?, ?)', [nome, email, idCurso]);
    return result;
  }

  static async update(id: number, nome: string, email: string, idCurso: number) {
    const [result] = await db.query('UPDATE ALUNOS SET NOME = ?, EMAIL = ?, ID_CURSO = ? WHERE ID = ?', [nome, email, idCurso, id]);
    return result;
  }

  static async delete(id: number) {
    const [result] = await db.query('DELETE FROM ALUNOS WHERE ID = ?', [id]);
    return result;
  }
}
```

### Passo 7: Controladores

Crie os controladores `cursoController` e `alunoController` em `src/controllers/cursoController.ts` e `src/controllers/alunoController.ts`:

#### `src/controllers/cursoController.ts`:

```typescript
import { Request, Response } from 'express';
import { Curso } from '../models/curso';

export class CursoController {
  static async getAll(req: Request, res: Response) {
    const cursos = await Curso.getAll();
    res.json(cursos);
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    const curso = await Curso.getById(parseInt(id, 10));
    res.json(curso);
  }

  static async create(req: Request, res: Response) {
    const { nome, descricao } = req.body;
    const result = await Curso.create(nome, descricao);
    res.json(result);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, descricao } = req.body;
    const result = await Curso.update(parseInt(id, 10), nome, descricao);
    res.json(result);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    const result = await Curso.delete(parseInt(id, 10));
    res.json(result);
  }
}
```

#### `src/controllers/alunoController.ts`:

```typescript
import { Request, Response } from 'express';
import { Aluno } from '../models/aluno';

export class AlunoController {
  static async getAll(req: Request, res: Response) {
    const alunos = await Aluno.getAll();
    res.json(alunos);
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    const aluno = await Aluno.getById(parseInt(id, 10));
    res.json(aluno);
  }

  static async create(req: Request, res: Response) {
    const { nome, email, idCurso } = req.body;
    const result = await Aluno.create(nome, email, idCurso);
    res.json(result);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, email, idCurso } = req.body;
    const result = await Aluno.update(parseInt(id, 10), nome, email, idCurso);
    res.json(result);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    const result = await Aluno.delete(parseInt(id, 10));
    res.json(result);
  }
}
```

### Passo 8: Rotas

Crie os arquivos de rotas `cursoRoutes` e `alunoRoutes` em `src/routes/cursoRoutes.ts` e `src/routes/alunoRoutes.ts`:

#### `src/routes/cursoRoutes.ts`:

```typescript
import { Router } from 'express';
import { CursoController } from '../controllers/cursoController';

const router = Router();

router.get('/cursos', CursoController.getAll);
router.get('/cursos/:id', CursoController.getById);
router.post('/cursos', CursoController.create);
router.put('/cursos/:id', CursoController.update);
router.delete('/cursos/:id', CursoController.delete);

export default router;
```

#### `src/routes/alunoRoutes.ts`:

```typescript
import { Router } from 'express';
import { AlunoController } from '../controllers/alunoController';

const router = Router();

router.get('/alunos', AlunoController.getAll);
router.get('/alunos/:id', AlunoController.getById);
router.post('/alunos', AlunoController.create);
router.put('/alunos/:id', AlunoController.update);
router.delete('/alunos/:id', AlunoController.delete);

export default router;
```

### Passo 9: Arquivo Principal

Crie o arquivo principal `src/index.ts` para iniciar o servidor e configurar as rotas:

```typescript
import express from 'express';
import cursoRoutes from './routes/cursoRoutes';
import alunoRoutes from './routes/alunoRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cursoRoutes);
app.use(alunoRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

### Passo 10: Scripts do NPM

Adicione os scripts de execução no `package.json`:

```json
"scripts": {
  "start": "ts-node-dev src/index.ts"
}
```

### Conclusão

Para iniciar o servidor, basta rodar o seguinte comando no terminal:

```bash
npm start
```
