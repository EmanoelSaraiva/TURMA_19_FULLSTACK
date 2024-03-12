let a = 10; //B
let b = 20;
let temp = a; // alocação memoria

a = b;

//A -> 20 A === B

document.write("Estou definindo A igual a B " + a.toString() + "\n");
b = temp;

document.write("Estou definindo B igual a A " + b.toString() + "\n");
