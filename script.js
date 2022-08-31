/*// Vamos criar um programa que peça ao usuário para inserir seu nome, e sua cor favorita. 
const nome = prompt("Qual o seu nome?")
const cor = prompt ("Qual a sua cor favorita?")
// Altere a primeira string para que a pessoa também envie sua citação favorita.
const citacao = prompt("Cite algo.") 
// Faça com que o nome da pessoa sempre seja exibido em letras maiúsculas;
const nomeMaiusculo = nome.toUpperCase()

//Em seguida, o programa deve imprimir a mensagem:
// A cor favorita de pessoa é cor; 

// Vamos fazer o programa duas vezes. Na primeira, com concatenação, e a segunda com Template Strings.
//Essa citação deve ser impressa entre aspas.
console.log("O seu nome é: " + nomeMaiusculo + ", a sua cor favorita é: " + cor + ", sua citação é: \"" + citacao + "\".")

// Altere a segunda string que criamos, para que seja impressa dessa forma (utilizando apenas um console.log):
console.log(`O seu nome é: ${nomeMaiusculo} \nA sua cor favorita é: ${cor}`)
// Exiba no console quantos caracteres tem o nome da pessoa.
console.log(`Quantos caracteres seu nome tem? ${nome.length}` ) 

// Cheque se o nome da pessoa possui a letra A
const verificaLetra = nome.includes("a")
console.log("Seu nome tem letra A? " + verificaLetra)
*/

const nomeUsusario = prompt("Qual seu nome?") 
const emailUsuario = prompt("Qual seu e-mail?") 
const verificaarroba = emailUsuario.includes("@")
const letras = nomeUsusario.replaceAll("r" , "l")

console.log("O e-mail " + emailUsuario + " foi cadastrado com sucesso. Boas vindas, " + nomeUsusario + "! \nSeu nome tem " + nomeUsusario.length + " caracteres." )
console.log("Seu e-mail tem @? " + verificaarroba)
console.log("Seu novo nome é: " + letras)
