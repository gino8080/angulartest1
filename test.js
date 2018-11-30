var nome = "pippo";
var cognome = "Rossi";
cognome = "pippone";
var age = 18;
age = 18;
var hasPowers = true;
var children = ["ciao", "ss", "dss"];
var Person;
Person = { nome: "Pippo", age: 30 };
function go(direction, distance) {
    if (direction === void 0) { direction = "left"; }
    if (distance === void 0) { distance = 100; }
    console.log(direction, distance);
}
go();
go("right");
go("left", 50);
function drive(param) {
    console.log(param.distance);
}
var params = { distance: 100 };
drive(params);
function add(x, y) {
    if (x === void 0) { x = 10; }
    if (y === void 0) { y = 50; }
    return x + y;
}
var p = add(10, 50) + 100;
var add2 = function (x) {
};
var multiply = function (x) {
    return x * 2;
};
var multiply3 = function (x) { return x * 2; };
var multyply2 = function (x) {
    return x * 2;
};
