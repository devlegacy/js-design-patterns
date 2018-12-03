/**
 * Create a Flyweight task.
 * @param {string} project - The project for task.
 * @param {number} priority - The priority for task.
 * @param {string} user - The user for task.
 * @param {boolean} completed - The complete state for task.
 */
class Flyweight {
  constructor(project, priority, user, completed) {
    this.project = project;
    this.priority = priority;
    this.user = user;
    this.completed = completed;
  }
}
/**
 * Create a Flyweight task factory.
 */
const FlyweightFactory = new class {
  constructor() {
    this.flyweight = {};
  }

  get(project, priority, user, completed) {
    if (!this.flyweight[`${project}${priority}${user}${completed}`]) {
      this.flyweight[`${project}${priority}${user}${completed}`] = new Flyweight(project, priority, user, completed);
    }

    return this.flyweight[`${project}${priority}${user}${completed}`];
  }

  getCount() {
    return Object.keys(this.flyweight).length
  }
}


/**
 * Class representing a task.
 */
class Task {
  /**
   * Create a task.
   * @param {Object} task - The task data
   * @param {string} [task.name=Default name] - The name of task.
   * @param {number} [task.priority=0] - The priority for task.
   * @param {string} task.project - The project for task.
   * @param {string} task.user - The user for task.
   * @param {boolean} task.complete - The complete state for task.
   */
  constructor(task) {
    this.name = task.name || 'Default name';
    this.flyweight = FlyweightFactory.get(task.project, task.priority, task.user, task.completed);
    // this.priority = task.priority || 0;
    // this.project = task.project;
    // this.user = task.user;
    // this.completed = task.completed || false;
  }
}

/**
 * Class representing a task collection.
 */
class TaskCollection {
  constructor() {
    this.task = {};
    this.count = 0;
  }
  /**
   *
   * @param {Task} task - The task data
   * @param {string} task.name - The name of task
   * @param {number} task.priority - The priority for task.
   * @param {string} task.project - The project for task.
   * @param {string} task.user - The user for task.
   * @param {boolean} task.complete - The complete state for task.
   */
  add(task) {
    this.task[task.name] = new Task(task);
    this.count++;
  }

  /**
   * @method
   * Describe method
   * @param {string} name
   * @returns {Task} A task
   */
  get(name) {
    return this.task[name];
  }

  /**
   * @method
   * Describe method
   * @returns {number} Amount of task in collection
   */
  getCount() {
    return this.count;
  }

}

const tasks = new TaskCollection();

const projects = ['none', 'courses', 'training', 'project'];
const priorities = [1, 2, 3, 4, 5];
const users = ['Jon', 'Erica', 'Amanda', 'Nathan'];
const completed = [true, false];

const initalMemory = process.memoryUsage().heapUsed;
for (let i = 0; i < 10000000; i++) {
  tasks.add({
    name: `Task ${i}`,
    priority: priorities[Math.floor(Math.random() * 5)],
    project: projects[Math.floor(Math.random() * 4)],
    user: users[Math.floor(Math.random() * 4)],
    completed: completed[Math.floor(Math.random() * 2)],
  });
}
const afterMemory = process.memoryUsage().heapUsed;

console.log(`Used memory: ${((afterMemory - initalMemory) / 1000000)}`);
console.log(`Tasks: ${tasks.getCount()}`);
console.log(`Flyweights: ${FlyweightFactory.getCount()}`);
