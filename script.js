// Estrutura de repetição FOR

for(let i=0; i<10; i++){
    console.log(i);
}

// Estrutura de repetição WHILE

let f=0;
while(f<10){
    console.log(f)
    ++f;
}

// do while

let w = 0;

do{
    console.log(w);
    w++;
}
while(w<20);

// funcões

function ola(nome){
    console.log(`Eu me chamo ${nome}`);
    document.write(`Seja bem vindo ${nome}`);
}

ola("gabriel")