# Aula 1: Introdução ao Backend com TypeScript

## Introdução

### O que é Backend?
- **Definição**: Parte do sistema responsável por gerenciar a lógica de negócios, manipulação de dados e autenticação.
- **Função**: Responde a requisições do frontend, processando e retornando dados conforme necessário.

### Backend vs Frontend
- **Frontend**: 
  - O que o usuário vê e interage diretamente.
  - Tecnologias comuns: HTML, CSS, JavaScript.
- **Backend**: 
  - O que acontece nos bastidores, no servidor.
  - Responsável por lógica de negócios, gerenciamento de banco de dados e APIs.
  - Tecnologias comuns: Node.js, Express, MySQL.

---

## Diferenças entre Frontend e Backend

### Ferramentas Comuns
- **Frontend**: 
  - Frameworks e bibliotecas populares: React, Angular, Vue.js.
- **Backend**: 
  - Ambientes de execução e frameworks: Node.js, Express.
  - Bancos de dados: MySQL, PostgreSQL, MongoDB.

### Responsabilidades
- **Frontend**: 
  - Design e comportamento visual da aplicação.
  - Interatividade e experiência do usuário.
- **Backend**: 
  - Processamento de dados e lógica de negócios.
  - Armazenamento e recuperação de dados.
  - Autenticação e autorização.

---

## O que é TypeScript?

### JavaScript vs TypeScript
- **JavaScript**: 
  - Linguagem de programação dinâmica e interpretada.
  - Amplamente usada tanto no frontend quanto no backend.
- **TypeScript**: 
  - Superconjunto de JavaScript que adiciona tipagem estática.
  - Compila para JavaScript, permitindo a execução em qualquer ambiente que suporte JavaScript.

### Vantagens do TypeScript
- **Tipagem estática**: 
  - Permite identificar erros de tipo durante a compilação, em vez de em tempo de execução.
- **Melhor autocompletar e depuração**: 
  - Ferramentas de desenvolvimento (IDEs) podem fornecer sugestões de código mais precisas e detectar erros antes da execução.
- **Suporte a ES6 e além**: 
  - Inclui todas as funcionalidades mais recentes do JavaScript, permitindo o uso de recursos modernos.

---

## Exemplos Práticos

### Exemplo de Código em JavaScript
```javascript
function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Daniel"));
```

### Exemplo de Código em TypeScript
```typescript
function greet(name: string): string {
  return "Hello, " + name;
}

console.log(greet("Daniel"));
```

---

## Pŕoximo Passo
- [Configurando o âmbiente de desenvolvimento](./configurarcao.md)