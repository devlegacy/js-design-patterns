/**
 * Object creation
 */

let task = {
  title: 'My task',
  description: 'My description'
};
// task.toString = function () { return `${this.title} ${this.description}`; };
Object.defineProperty(task, 'toString', {
  value: function () { return `${this.title} ${this.description}`; },
  writable: false, //true,
  enumerable: false,
  configurable: false,
});
// Test writable
// task.toString = 'Hi'; // Test configurable
console.log(task.toString());
// Test enumerable
console.log(task);
// Object.defineProperty(task, 'toString', {
//   enumerable: true,
// }); // Test configurable
console.log(Object.keys(task));
let task2 = Object.create(Object.prototype);
task2.title = 'My task 2';
task2.description = 'My description';
task2.toString = function () { return `${this.title} ${this.description}`; };

console.log(task2.toString());

let task3 = new Object();
task3.title = 'My task 3';
task3.description = 'My description';
task3.toString = function () { return `${this.title} ${this.description}`; };

console.log(task3.toString());

class Task {
  constructor(title = '', description = '') {
    this.title = title;
    this.description = description;
  }

  toString() {
    return `${this.title} ${this.description}`;
  }
}

let task4 = new Task('My task 4', 'My description');
console.log(task4.toString());
