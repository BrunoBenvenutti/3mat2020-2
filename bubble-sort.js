function bubbleSort(vetor){
    let trocas
    do {
        trocas = 0

        // Percurso do vetor do inicio até a PENÚLTIMA (length - 2)
        for(let i = 0; i <= vetor.length - 2; i++){
            if (vetor[i] > vetor[i + 1]){
                //Fazer a troca entre os elementos
                trocas++
            }
        }

    }while (trocas > 0)

}

let a = 12, b = 4

let aux = a
a = b
b = aux