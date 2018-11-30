const nome = "pippo";

let cognome = "Rossi";
cognome = "pippone";

let age: number = 18;
age = 18;

let hasPowers: boolean = true;

let children: string[] = ["ciao", "ss", "dss"];

let Person: { nome: string, age: number };
Person = { nome: "Pippo", age: 30 };

function go(direction: string = "left", distance: number = 100) {
  console.log(direction, distance);
}
go();
go("right");
go("left", 50);


function drive(param: any) {
  console.log(param.distance);
}

let params = { distance: 100 };
drive(params);

function add(x: number = 10, y: number = 50): number {
  return x + y;
}

const p = add(10, 50) + 100;

const add2 = function (x) {

};

const multiply = (x) => {
  return x * 2;
};

const multiply3 = (x) => x * 2;

const multyply2 = function (x) {
  return x * 2;
};


