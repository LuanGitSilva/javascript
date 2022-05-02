let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
//console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/* a variável pos começa com 0, e enquanto pos for < tamanho do veto o pos recebe pos +1
for(let pos=0; pos < valores.length; pos++)
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) */

/* para cada posição na variável composta vai mostrar o num pos } */
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
