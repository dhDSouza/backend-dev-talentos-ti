import { Freelancer } from './Freelancer';
import { Cliente } from './Cliente';
import { Projeto } from './Projeto';
import { Avaliacao } from './Avaliacao';
import { Feedback } from './Feedback';

const freelancer1 = new Freelancer('Daniel', 'daniel@email.com', 'Desenvolvedor');
const freelancer2 = new Freelancer('Gabriel', 'gabriel@email.com', 'Design Gráfico');
const freelancer3 = new Freelancer('Lucas', 'lucas@email.com', 'Marketing');

const cliente1 = new Cliente("Emily", "emily@email.com");
const cliente2 = new Cliente("Roberto", "roberto@email.com");

const projeto1 = new Projeto('Website para Empresa X', 'Desenvolver um website responsivo para a Empresa X', cliente1);
const projeto2 = new Projeto('Logo para Startup Y', 'Criar um logo moderno para a Startup Y', cliente2);

console.log("----------------------");
console.log("Atribuindo Freelancers aos Projetos");

projeto1.atribuirFreelancer(freelancer1);
projeto1.atribuirFreelancer(freelancer3);  // Adicionando um segundo freelancer ao mesmo projeto
projeto2.atribuirFreelancer(freelancer2);

console.log("----------------------");
console.log(`Freelancers do projeto 1:`);
projeto1.getFreelancers().forEach(freelancer => console.log(freelancer.getNome()));
console.log("----------------------");
console.log(`Freelancers do projeto 2:`);
projeto2.getFreelancers().forEach(freelancer => console.log(freelancer.getNome()));
console.log("----------------------");

console.log("Projetos dos Freelancers");
console.log("----------------------");
console.log(`Projetos do Freelancer 1:`);
freelancer1.getProjetos();
console.log("----------------------");
console.log(`Projetos do Freelancer 2:`);
freelancer2.getProjetos();
console.log("----------------------");
console.log(`Projetos do Freelancer 3:`);
freelancer3.getProjetos();
console.log("----------------------");

console.log("Desatribuindo Freelancers dos Projetos");

projeto1.desatribuirFreelancer(freelancer1);
projeto2.desatribuirFreelancer(freelancer2);

console.log("----------------------");
console.log(`Freelancers do projeto 1:`);
projeto1.getFreelancers().forEach(freelancer => console.log(freelancer.getNome()));
console.log("----------------------");
console.log(`Freelancers do projeto 2:`);
projeto2.getFreelancers().forEach(freelancer => console.log(freelancer.getNome()));
console.log("----------------------");
console.log("Projetos dos Freelancers após desatribuição");
console.log("----------------------");
console.log(`Projetos do Freelancer 1:`);
freelancer1.getProjetos();
console.log("----------------------");
console.log(`Projetos do Freelancer 2:`);
freelancer2.getProjetos();
console.log("----------------------");
console.log(`Projetos do Freelancer 3:`);
freelancer3.getProjetos();
console.log("----------------------");

console.log("Testando atribuição inválida de nota");

try {
    const avaliacaoInvalida = new Avaliacao(freelancer1, projeto1, 11); // Nota fora dos limites
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    } else {
        console.log("Erro desconhecido");
    }
}

console.log("----------------------");

const avaliacao1 = new Avaliacao(freelancer1, projeto1, 9);
const avaliacao2 = new Avaliacao(freelancer2, projeto2, 8);

projeto1.setConcluido(true);
projeto2.setConcluido(false);  // Projeto não concluído

// Testando se avaliação é feita em projetos não concluídos
console.log("Tentando avaliar projeto não concluído:");
avaliacao2.avaliar();
projeto2.setConcluido(true);  // Conlcuíndo projeto após o teste

console.log("----------------------");
console.log(`Avaliação 1 antes do Feedback:`);
avaliacao1.avaliar();
console.log("----------------------");
console.log(`Avaliação 2 antes do Feedback:`);
avaliacao2.avaliar();
console.log("----------------------");

const feedback1 = new Feedback(cliente1, projeto1, "Não gostei. Amei.", 10);
const feedback2 = new Feedback(cliente2, projeto2, "Não gostei", 0);

avaliacao1.adicionarFeedback(feedback1);
avaliacao2.adicionarFeedback(feedback2);

console.log(`Avaliação 1 depois do Feedback:`);
avaliacao1.avaliar();
console.log("----------------------");
console.log(`Avaliação 2 depois do Feedback:`);
avaliacao2.avaliar();
console.log("----------------------");