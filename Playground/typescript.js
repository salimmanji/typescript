var x = function (a, b) {
    return a + b;
};
console.log(x(4, 5));
x(22, 42);
var isCool = true;
var age = 56;
var eyeColour = 'brown';
var favoriteQuote = "I'm not old, I'm only ".concat(age);
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
var wizard = {
    a: 'john'
};
// Null and undefined
var meh = undefined;
var noo = null;
// Tuple
var basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
var sizeName = Size[2];
console.log(sizeName);
var sizeName2 = Size.Small;
console.log(sizeName2);
// Any Type
var whatever = 'abc!';
whatever = true;
whatever = basket;
whatever = 'blue';
whatever = 224.4;
// Void
var sing = function () {
    console.log('La la la');
};
var sing2 = function () {
    console.log('La la la');
    return 'lala';
};
// never
// never returns
// variable under a typeguard is never true. Usually throws an error
var error = function () {
    throw Error('oops');
};
// Robots paramter is of type RobotArmy
var fightRobotArmy = function (robots) {
    console.log('Fight');
};
;
var dog = {};
// dog.count --> error
var moose = {};
moose.count;
moose = {
    count: 10,
    types: 'yellow'
};
// Function
var fightRobotArmy2 = function (robots) {
    console.log('Fight');
};
var fightRobotArmy4 = function (robotA) {
    console.log('Fight');
    return 5;
};
// Classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.roar = "Grrr";
        this.isAlive = true;
        this.roar = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello, ".concat(this.roar);
    };
    return Animal;
}());
var lion = new Animal('Raawr');
console.log(lion.greet());
console.log(lion.roar);
// console.log(lion.isAlive);
// error, private variable
// Union
var union = 'Hello';
union = 5;
// union = true
// error
