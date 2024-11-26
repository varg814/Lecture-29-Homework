//1. შექმენი კლასი Person, რომელსაც ექნება name და age ატრიბუტები. დაამატე მეთოდი introduce(), რომელიც დააბრუნებს ტექსტს:
//Hello, my name is [name] and I am [age] years old.

// 2. დაამატე სტატიკური მეთოდი isAdult(age) კლასთან Person, რომელიც დააბრუნებს true თუ ასაკი მეტია ან ტოლია 18-ის და false - წინააღმდეგ შემთხვევაში.
// დავალება: შექმენი ახალი ობიექტი და შეამოწმე ეს სტატიკური მეთოდი.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }

  static isAdult(age) {
    return age >= 18;
  }
}

let person1 = new Person("giorgi", 19);
person1.introduce();
console.log(Person.isAdult(person1.age));

// 3. კლასების მემკვიდრეობა (Inheritance)
// შექმენი კლასი Animal, რომელსაც ექნება name და მეთოდი speak(). შექმენი შვილობილი კლასი Dog, რომელსაც ექნება მეთოდი speak(), რომელიც დააბრუნებს: [name] says: Woof!

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} says: woof`);
  }
}

const dog = new Dog("dog");
dog.speak();

// 4. DOM-ის გამოყენება
// შექმენი კლასი Button, რომელსაც ექნება label და color პარამეტრები კონსტრუქტორში. დაამატე მეთოდი render(containerId), რომელიც შეიქმნის ღილაკს შესაბამისი ფერით და ტექსტით და დაამატებს კონტეინერში.
// დავალება: შექმენი ორი ღილაკი და დაამატე div ელემენტში.

class Button {
  constructor(label, color) {
    this.label = label;
    this.color = color;
  }
  render(containerId) {
    let btn = document.createElement("button");
    container.appendChild(btn);
    btn.innerHTML = this.label;
    btn.style.color = this.color;
  }
}

const container = document.createElement("div");
document.body.appendChild(container);
container.id = "containerId";

const button1 = new Button("Click me", "green");
const button2 = new Button("Click me 2", "red");

button1.render(container);
button2.render(container);

// 5. შექმენი კლასი Vehicle, რომელსაც ექნება brand და speed ატრიბუტები და მეთოდი describe(). შემდეგ შექმენი Car კლასი, რომელიც მემკვიდრეობით მიიღებს Vehicle-ს და დაამატე თვისება model.
// დავალება: შექმენი რამდენიმე Car ობიექტი და დაიბეჭდე მათი მონაცემები.

class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  describe() {
    console.log(`${this.brand}'s car can go ${this.speed} kmh`);
  }
}

class Car extends Vehicle {
  constructor(brand, model, speed) {
    super(brand, speed);
    this.model = model;
  }

  describe() {
    console.log(`${this.brand}'s ${this.model} can go ${this.speed} kmh`);
  }
}

const car1 = new Car("bmw", "m5", 40000);
car1.describe();

// 6. შექმენი კლასი Product, რომელსაც ექნება name, price და category ატრიბუტები. დაამატე სტატიკური მეთოდი filterByCategory(products, category), რომელიც გამოიყვანს კონკრეტული კატეგორიის პროდუქტებს.
// დავალება: შექმენი რამდენიმე პროდუქტი და ფილტრაციით აჩვენე მხოლოდ electronics კატეგორიის პროდუქტები.

class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  static filterByCategory(products, category) {
    return products.filter((products) => {
      return products.category === category;
    });
  }
}

let product1 = new Product("product 1", 15, "electronics");
let product2 = new Product("product 2", 15, "electronics");
let product3 = new Product("product 3", 20, "other");
let product4 = new Product("product 4", 20, "other");

let products = [product1, product2, product3, product4];

let filteredProducts = Product.filterByCategory(products, "electronics");
console.log(filteredProducts);

// 7. შექმენი კლასი Event, რომელსაც ექნება name და date ატრიბუტები. დაამატე მეთოდი isUpcoming(), რომელიც დაადგენს, ღონისძიება მომავალშია თუ არა.
// დავალება: დაამატე რამდენიმე ღონისძიება და შეამოწმე ისინი.

class Event {
  constructor(name, date) {
    this.name = name;
    this.date = date;
  }

  static isUpcoming(events, date) {
    return events.filter((events) => {
      return events.date > date;
    });
  }
}

let event1 = new Event("event 1", "2024-06-27");
let event2 = new Event("event 2", "2024-09-07");
let event3 = new Event("event 3", "2024-03-17");
let event4 = new Event("event 4", "2024-01-09");

let events = [event1, event2, event3, event4];

let filteredEvents = Event.isUpcoming(events, "2024-05-01");
console.log(filteredEvents);

// 8. შექმენი კლასი Character, რომელსაც ექნება name და health თვისებები. შექმენი შვილობილი კლასი Warrior, რომელსაც დაემატება attack() მეთოდი,
// რომელიც შეამცირებს health-ს 10-ით.
// დავალება: შექმენი ორი პერსონაჟი და გამოიყენე მათი attack() მეთოდი.

class Character {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
}

class Warrior extends Character {
  attack() {
    this.health -= 10;
    console.log(`${this.name} has attacked! Health is now ${this.health}.`);
  }
}

let warrior1 = new Warrior("warrior1", 100);
let warrior2 = new Warrior("warrior2", 100);

warrior1.attack();
warrior2.attack();

// 9. შექმენი კლასი Task, რომელსაც ექნება title, completed და priority ატრიბუტები. დაამატე მეთოდი toggleCompleted(), რომელიც შეცვლის ტასქის სტატუსს (completed).
// დაამატე სტატიკური მეთოდი filterByPriority(tasks, priority), რომელიც დააბრუნებს მხოლოდ იმ ტასქებს, რომლებსაც შესაბამისი პრიორიტეტი აქვთ.

class Task {
  constructor(title, priority, completed) {
    this.title = title;
    this.priority = priority;
    this.completed = completed;
  }

  toggleCompleted(){
    this.completed = !this.completed;
  }

  static filterByPriority(tasks, priority) {
    return tasks.filter((tasks) => {
      return tasks.priority === priority;
    });
  }
}

let task1 = new Task("task name1", "low", false);
let task2 = new Task("task name2", "low", false);
let task3 = new Task("task name3", "high", true);
let task4 = new Task("task name4", "high", true);

let tasks = [task1, task2, task3, task4];

let filtered = Task.filterByPriority(tasks, "high");
console.log(filtered);

// 10. შექმენი კლასი Appointment, რომელსაც ექნება title და date ატრიბუტები. დაამატე მეთოდი isToday(), რომელიც დააბრუნებს true,
// თუ ღონისძიება დღეს უნდა გაიმართოს და false, წინააღმდეგ შემთხვევაში.

class Appointment {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static isToday(appointment, date) {
    return appointment.date === date;
  }
}

let today = new Date()
let appointment1 = new Appointment("appointment 1", "2024-06-27");
let appointment2 = new Appointment("appointment 2", "2024-09-07");
let appointment3 = new Appointment("appointment 3", "2024-03-17");
let appointment4 = new Appointment("appointment 4", "2024-05-01");

console.log(Appointment.isToday(appointment1, "2024-05-01"));
console.log(Appointment.isToday(appointment2, "2024-05-01"));
console.log(Appointment.isToday(appointment3, "2024-05-01"));
console.log(Appointment.isToday(appointment4, "2024-05-01"));
