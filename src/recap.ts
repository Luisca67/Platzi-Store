const myName = 'Luis';
const myAge = 20;
const add = (a: number, b: number) => {
  return a + b;
};
console.log(add(12, 12));

class Persona {
  constructor(
    private age: number,
    private name: string,
  ) {}

  getSummary() {
    return `my Name is ${this.name}, ${this.age}`;
  }
}

const nicolas = new Persona(15, 'Nicolas');
nicolas.getSummary();
