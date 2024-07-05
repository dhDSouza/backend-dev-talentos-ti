# Desafio de Polimorfismo em TypeScript

Você foi contratado por uma empresa que está desenvolvendo um sistema para um jogo de RPG online. Cada personagem no jogo possui habilidades únicas que devem ser modeladas utilizando `TypeScript`. Siga as instruções abaixo para criar as classes necessárias:

1. Crie uma classe base chamada `Personagem` que possui os seguintes atributos **`privados`**:

- `nome: string`
- `vida: number`
- `ataque: number`

2. Implemente métodos públicos para `encapsular` esses atributos através de `getters` e `setters`.

3. Crie também um método `atacar` que demonstra que o personagem está atacando e a força do seu `ataque`;

4. Crie três `classes filhas` de Personagem:

**`Guerreiro`**: este personagem tem um ataque físico poderoso, e pode usar habilidades especiais como `golpeDuplo()`, que aumenta temporariamente seu ataque.

**`Mago`**: este personagem utiliza magias poderosas, e pode lançar feitiços como `bolaDeFogo()`, que causa dano em área.

**`Arqueiro`**: este personagem é habilidoso com arcos e flechas, podendo realizar ataques precisos como `ataquePreciso()`, que causa dano crítico.

Cada classe deve implementar métodos específicos que demonstram suas habilidades únicas, mantendo a herança de Personagem.

5. Crie instâncias de um `Guerreiro`, um `Mago` e um `Arqueiro`. Configure seus atributos e chame seus métodos especiais (além do método `atacar()` herdado de `Personagem`) para demonstrar suas habilidades únicas.