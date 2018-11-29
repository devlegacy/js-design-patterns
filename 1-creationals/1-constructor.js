/**
 * Class representing a task.
 */
class Task {
  /**
   * Create a task.
   * @param {string} name - The name of task.
   * @param {string} description - The description for task.
   */
  constructor(name = '', description = '') {
    this.name = name;
    this.description = description;
    this.completed = false;
  }

  /**
   * @method complete()
   * Mark task as complete
   */
  complete() {
    console.log(`Completing task: ${task.name}`);
    this.completed = true;
  }
  /**
   * @method save()
   * Save task in DB
   */
  save() {
    console.log(`Saving task: ${this.name}`);
  }

}

const task = new Task('Task 1 - Demo');
const task1 = new Task('Task 2 - Demo');
const task2 = new Task('Task 3 - Demo');
const task3 = new Task('Task 4 - Demo');

task.complete();
task1.save();
task2.save();
task3.save();
