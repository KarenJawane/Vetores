let num= [];
let numeros=0;
let contador= 0;


for (let i=0; i<15; i++) {
    num.push(parseInt(prompt(`Adicione o valor ${i}`)));

}
num= parseInt(prompt(`Entre com um numero`));

for (let i=0; i<15; i++){
    if (num[i] == numeros){
        contador++;
    }
}

console.log(`O numero ${num} aparece ${contador} vezes no array`)

