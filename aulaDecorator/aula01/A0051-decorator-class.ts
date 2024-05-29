export class Animal {
  constructor(public cor: string) {}
}

// function decorator(target: any): any {
//   console.log("Oiee.. do decorator");
//   return target;
// }
function decorator<T extends new (...args: any[]) => void>(target: T): T {
  console.log("Oiee.. do decorator");
  return target;
}

const AnimalDecorated = decorator(Animal);
const animal = new AnimalDecorated("roxo");
console.log(animal);
