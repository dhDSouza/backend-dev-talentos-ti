# Tipos Primitivos em TypeScript

| Tipo        | Descrição                                           | Exemplo                                             |
|-------------|-----------------------------------------------------|-----------------------------------------------------|
| `boolean`   | Representa um valor verdadeiro (`true`) ou falso (`false`).  | `let isActive: boolean = true;`                     |
| `number`    | Representa valores numéricos, incluindo inteiros e flutuantes. | `let age: number = 28;`                             |
| `string`    | Representa uma sequência de caracteres (texto).       | `let name: string = "Daniel";`                      |
| `array`     | Representa uma lista de valores de um tipo específico.        | `let scores: number[] = [85, 92, 78];`              |
| `tuple`     | Representa uma lista de valores de tipos específicos.        | `let person: [string, number] = ["Daniel", 28];`    |
| `enum`      | Representa um conjunto de valores nomeados.                  | `enum Direction { Up, Down, Left, Right }`          |
| `any`       | Representa qualquer tipo, permitindo a flexibilidade máxima.  | `let randomValue: any = "Hello";`                   |
| `void`      | Representa a ausência de valor (geralmente usado em funções que não retornam valor). | `function logMessage(): void { console.log("Hi"); }`|
| `null`      | Representa a ausência intencional de qualquer valor.          | `let emptyValue: null = null;`                      |
| `undefined` | Representa um valor não definido.                             | `let notAssigned: undefined = undefined;`           |
| `unknown`   | Representa um valor de tipo desconhecido, que requer verificação antes de ser usado. | `let value: unknown = "Hello"; if (typeof value === "string") { console.log(value.toUpperCase()); }` |
