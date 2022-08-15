const x = (a: number, b: number) => {
    return a + b;
};

console.log(x(4, 5));

x(22, 42);

let isCool: boolean = true;

let age: number = 56;

let eyeColour: string = 'brown';

let favoriteQuote: string = `I'm not old, I'm only ${age}`;

let pets: string[] = ['cat', 'dog', 'pig'];
let pets2: Array<string> = ['lion', 'dragon', 'lizard'];

let wizard: object = {
    a: 'john',
};

// Null and undefined
let meh: undefined = undefined;

let noo: null = null;

// Tuple
let basket: [string, number];
basket = ['basketball', 5];

// Enum
enum Size { Small = 1, Medium = 2, Large = 3};
let sizeName: string = Size[2];
console.log(sizeName);

let sizeName2: number = Size.Small;
console.log(sizeName2);

// Any Type
let whatever: any = 'abc!';
whatever = true;
whatever = basket;
whatever = 'blue';
whatever = 224.4;

// Void
let sing = (): void => {
    console.log('La la la');
};

let sing2 = (): string => {
    console.log('La la la');
    return 'lala';
};

// never
// never returns
// variable under a typeguard is never true. Usually throws an error
let error = (): never => {
    throw Error('oops');
};

// Interface
// Create a new name (Robot A)
interface RobotA {
    count: number,
    types: string,
    magic: string,
}

// Type alias
type RobotB = {
    count: number,
    types: string,
    magic: string,
}

// Robots paramter is of type RobotArmy
let fightRobotArmy = (robots: RobotA) => {
    console.log('Fight')
};

// Type assertions
// ? optional field for interface
interface RobotC {
    count: number,
    types: string,
    magic?: string,
};

let dog = {};
// dog.count --> error

let moose = {} as RobotC
moose.count;

moose = {
    count: 10,
    types: 'yellow',
};

// Function
let fightRobotArmy2 = (robots: RobotA): void => {
    console.log('Fight')
};

let fightRobotArmy4 = (robotA: RobotA): number => {
    console.log('Fight');
    return 5;
};

// Classes
class Animal {
    roar: string = "Grrr";
    private isAlive = true;
    constructor(sound: string) {
        this.roar = sound;
    }

    greet() {
        return `Hello, ${this.roar}`;
    }
}

let lion = new Animal('Raawr');

console.log(lion.greet());
console.log(lion.roar);

// console.log(lion.isAlive);
// error, private variable

// Union
let union: string | number = 'Hello';
union = 5;
// union = true
// error
