class Class {
  constructor() {}
  static staticMethod() {
    this.something;
  }
}
const c = new Class();
c.staticMethod();

function func(param) {
  return;
}
func();

const num = 123;
let string = 'string';

// comment

console.log();

const obj = {
  a: 1,
  b: '2',
  c: true
};

if (something) {
} else if (somethingElse) {
} else {
}

switch (thing) {
  case 'blah':
    break;
  default:
    break;
}

const template = `${obj.b} abcdefghijk ${elemeno} pqrstuvwxyz ${func()}`;

for (let i = 0; i < 10; i++) {}
for (const thing of stuff) {
}
for (const thing in stuff) {
}
while (false) {}

const regex = /^abc|def[A-Z]$/gim;

const asyncFunc = async () => {
  await operation();
};
