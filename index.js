
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
const dog = new Dog("Rufio","female");
console.log(dog.speak());

class Cat{
  constructor(name,sex){
    this.name = name;
    this.sex = sex;
  }
  speak(){
    return this.name + " " +"says meow!";
  }
}
const cat = new Cat("","female");
console.log(dog.speak());

class Bird{
  constructor(name,sex){
    this.name = name;
    this.sex = sex;
  }
  speak(){
    return "It's me!"+ " " +this.name + "," +" the parrot!";
  }
}
const bird = new Bird("Pablo","");
console.log(bird.speak());
