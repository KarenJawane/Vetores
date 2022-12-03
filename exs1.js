let num =[];
let media=0;

for (let i=0; i<4; i++) {
    num.push(parseInt(prompt(`Adicione o valor ${i}`)));

}
media= (num[0] + num[1] + num[2] + num[3]) /4;
console.log(`Media Aritmética=`, media)



