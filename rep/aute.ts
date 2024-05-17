class Person {
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }

  get age(): number {
    return this._age;
  }

  // If you need to change the age, you can add a method to do so safely.
  public setAge(newAge: number): void {
    if (newAge > 0) {
      this._age = newAge;
    } else {
      console.error('Invalid age');
    }
  }
}

const jk = new Person(22);
console.log(jk.age); // Outputs: 22
// jk.age = 22; // This will cause a compile-time error as expected.
jk.setAge(23); // Correct way to set the age, if needed.
console.log(jk.age); // Outputs: 23
