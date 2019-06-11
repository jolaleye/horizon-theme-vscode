let num = 29;
var bool = true;
const string = 'string';
const template = `something${something}something${something()}`;
const regex = /^abc|def[A-Z]$/gim;

// comment

class Class {
  constructor() {
    this.something;
  }
  static method() {}
}

const something = new Class();

something.method();

async function func(param) {
  await op();
  return;
}

func();

console.log();

try {
} catch (err) {}

const obj = {
  a: something
};

if (something) {
} else if (something) {
} else {
}

switch (something) {
  case 'something':
    break;
  default:
    break;
}

for (let i = 0; i < 10; i++) {}

for (const something of things) {
}

for (const soemthing in things) {
}

while (something) {}

do {} while (something);

debugger;

import something from '';
export default something;
