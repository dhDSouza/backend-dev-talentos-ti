# Configuração do Ambiente de Desenvolvimento TypeScript no VSCode

## Passo 1: Instalar Node.js e npm

1. **Download e Instalação do Node.js**:
   - Acesse [nodejs.org](https://nodejs.org/) e baixe a versão recomendada para seu sistema operacional.
   - Siga as instruções de instalação fornecidas no site.

2. **Verifique a Instalação**:
   - Abra um terminal e execute os seguintes comandos:
     ```sh
     node -v
     npm -v
     ```
   - Estes comandos devem mostrar as versões instaladas do Node.js e npm, respectivamente.

---

## Passo 2: Instalar o TypeScript

1. **Instalar o TypeScript Globalmente**:
   - No terminal, execute o seguinte comando:
     ```sh
     npm install -g typescript
     ```

2. **Verifique a Instalação**:
   - Execute o comando:
     ```sh
     npx tsc -v
     ```
   - Este comando deve mostrar a versão instalada do TypeScript.

---

## Passo 3: Configurar o VSCode

1. **Instalar a Extensão do TypeScript**:
   - Abra o VSCode.
   - Vá para a aba de extensões (ícone de quadrado no lado esquerdo).
   - Procure por "TypeScript" e instale a extensão oficial do TypeScript.

2. **Configurar o Projeto**:
   - Crie uma pasta para seu projeto e abra-a no VSCode.
   - No terminal do VSCode, inicialize um projeto TypeScript com o seguinte comando:
     ```sh
     npx tsc --init
     ```
   - Este comando criará um arquivo `tsconfig.json` com as configurações padrão do TypeScript.

---

## Passo 4: Instalar o ts-node (Opcional)

1. **Instalar o ts-node Globalmente**:
   - Para facilitar a execução de arquivos TypeScript sem compilá-los manualmente, instale o `ts-node`:
     ```sh
     npm install -g ts-node
     ```

2. **Verifique a Instalação**:
   - Execute o comando:
     ```sh
     npx ts-node -v
     ```
   - Este comando deve mostrar a versão instalada do `ts-node`.

---

## Passo 5: Criar um Exemplo de Código em TypeScript

1. **Criar um Arquivo TypeScript**:
   - Na pasta do seu projeto, crie um arquivo chamado `main.ts`.

2. **Adicionar o Código da Classe**:
   ```typescript
   function greet(name: string): string {
     return "Hello, " + name;
   }

   console.log(greet("Daniel"));
   ```

---

## Passo 6: Compilar e Rodar o Código

### Opção 1: Usar o TypeScript Compiler (tsc)

1. **Compilar o TypeScript para JavaScript**:
   - No terminal do VSCode, execute o seguinte comando:
     ```sh
     npx tsc
     ```
   - Este comando gerará um arquivo `main.js` na mesma pasta.

2. **Executar o JavaScript**:
   - No terminal, execute o seguinte comando:
     ```sh
     node main.js
     ```
   - Isso deve imprimir a mensagem:
     ```
     Hello, Daniel
     ```

### Opção 2: Usar o ts-node

1. **Executar o Arquivo TypeScript Diretamente**:
   - No terminal do VSCode, execute o seguinte comando:
     ```sh
     npx ts-node main.ts
     ```
   - Isso deve imprimir a mensagem:
     ```
     Hello, Daniel
     ```

---

## Recursos Adicionais
- [Documentação oficial do Node.js](https://nodejs.org/en/docs/)
- [Documentação oficial do npm](https://docs.npmjs.com/)
- [Documentação oficial do TypeScript](https://www.typescriptlang.org/docs/)
- [Documentação oficial do ts-node](https://typestrong.org/ts-node/)
- [VSCode - Guia de Introdução](https://code.visualstudio.com/docs)