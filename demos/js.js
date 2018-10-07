class Banana {
  constructor(goodOrNah) {
    this.quality = goodOrNah;
  }

  eat() {
    // omnomomnomom
    const om = 'om\nnom';
  }

  static peelTime(length) {
    const magicNumber = 123;
    return length * magicNumber;
  }
}

const banana = new Banana(10);
banana.eat();
console.log(Banana.peelTime(100));

function makeBanana(num) {}

for (let i = 0; i < 10; i++) {
  makeBanana();
}
for (const thing of stuff) {}
for (let thing in stuff) {}

const regex = /banana/;
const regexdos = /[.*+?^${}()|[\]\\]/g;

if (true) {}
while (true) {}

switch (fruit) {
  case 'banana':
    break;
  default:
    break;
}

const asyncFetchBananas = async () => {
  let bananas = await findBananas();

  const specialBanana = new Banana(11);
  bananas.push(specialBanana);
}