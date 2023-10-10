class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  public getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  private tenants: Person[];

  constructor(protected key: Key) {
    this.key = key;
  }

  public comeIn(person: Person) {
    if (this.door) this.tenants.push(person);
  }

  public openDoor(key: Key) {}
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  public openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) this.door = true;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
