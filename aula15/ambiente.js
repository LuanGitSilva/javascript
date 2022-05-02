// num.push() adiciona um elemento na última vaga
// num.length conta quantos elementos tem
// num.sort() organiza os elementos em ordem crescente

let num = [1, 4, 2]
num[3] = 6
console.log(num)
num.push(3)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
num.sort()
console.log(num) 
let pos = num.indexOf(9)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 6 está na posição ${pos}`)
}