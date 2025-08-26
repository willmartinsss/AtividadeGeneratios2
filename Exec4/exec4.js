const read = require("readline-sync");

let nome = read.question("Digite o nome do colaborador: ");
let codigoCargo = read.questionInt("Digite o código do cargo (1 a 6): ");
let salario = read.questionFloat("Digite o salário: ");
let novoSalario;
let cargo;

switch (codigoCargo) {
  // Gerente
  case 1:
    novoSalario = salario + salario * 0.1;
    cargo = "Gerente";
    break;
  // Vendedor
  case 2:
    novoSalario = salario + salario * 0.07;
    cargo = "Vendedor";
    break;
  // Supervisor
  case 3:
    novoSalario = salario + salario * 0.09;
    cargo = "Supervisor";
    break;
  // Motorista
  case 4:
    novoSalario = salario + salario * 0.06;
    cargo = "Motorista";
    break;
  // Estoquista
  case 5:
    novoSalario = salario + salario * 0.05;
    cargo = "Estoquista";
    break;
  // Técnico de TI
  case 6:
    novoSalario = salario + salario * 0.08;
    cargo = "Técnico de TI";
    break;
  default:
    console.log("Digite um número válido entre 1 e 6.");
    break;
}

if (novoSalario !== undefined) {
  console.log("\n--- Resultado ---");
  console.log("Nome do colaborador: " + nome);
  console.log("Cargo: " + cargo);
  console.log("Salário: R$ " + novoSalario.toFixed(2));
}
