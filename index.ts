const seuNome: string = 'João';
const suaIdade: number = 27;
const eMaiordeIdade: boolean = true;

const minhaFunc = (nome: string, idade: number): string => {
    return `${nome} tem ${idade} anos`;
}

(nome: string, idade: number): string => {
    return `${nome} tem ${idade} anos`;
}

function minhaFunc2(nome: string, idade: number): string {
    return `${nome} tem ${idade} anos`;
}

const meuArray: number[] = [1, 2, 3, 4, 5];
const meuArray2: Array<number> = [1, 2, 3, 4, 5];

const meuArrayComDoisValores: Array<number | string> =[1,"João"]
const meuArrayComDoisValores2: (number | string)[ ] = [1,"João"]
// 1- Pode ser um número ou string independente da ordem
const meuArrayTupla: [number, string] = [1, "João"];
//1- limite é dois valores
//tipo de dado de acordo a posição

type Humano = {
    nome: string,
    idade: number,
    peso: number
}

interface Gato {
    nome: string,
    idade: number,
    peso: number,
}


type Animais = Humano | Gato;

const portugueses: Array<Humano> = [
    {idade: 27, peso: 80, nome: 'João'},
    {idade: 27, peso: 80, nome: 'João'},
]

const brasileiros: Humano[] = [
    {idade: 27, peso: 80, nome: 'João'},
    {idade: 27, peso: 80, nome: 'João'},
]



const getAnimais = (): Animais[] => {
    return [
        {idade: 27, peso: 80, nome: 'João'},
        {idade: 27, peso: 80, nome: 'João'},
    ]
}

let animais: Animais[] = [] as Animais[]; 

const postAnimais = (): Omit<Animais, "idade"> => {
    return {
        nome: 'João',
        peso: 80,
    }
}

const postAnimais2 = (): Partial<Humano> => {
    return {
        nome: 'João',
    }
}



