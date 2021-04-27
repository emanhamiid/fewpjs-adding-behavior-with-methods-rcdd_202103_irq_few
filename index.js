
// Your code here
class Dog{
constructor(name,sex){
this.name = name;
this.sex = sex;
}
speak(){
  return this.name + " " +"says woof!";
}
}
const dog = new Dog("","female");
console.log(dog.speak());

class Cat{
  constructor(name,sex){
    this.name = name;
    this.sex = sex;
  }
  speak(){
    return this.name + " " +"says woof!";
  }
}
class Bird{
  constructor(name,sex){
    this.name = name;
    this.sex = sex;
  }
}
