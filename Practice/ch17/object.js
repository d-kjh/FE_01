const person1 = {
  name: '김주현',
  age: 20,
  married: false,
};

console.log(typeof person1);
console.log(person1);

console.log(person1.name);
console.log(person1.age);

person1.age = 10;

console.log('person1.age', person1.age);
console.log("person1['age']", person1['age']);

person1.job = 'programmer';
person1['bloodtype'] = 'O';

console.log(person1);
