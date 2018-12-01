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
    this.priority = task.priority || 0;
    this.project = task.project;
    this.user = task.user;
    this.completed = task.completed || false;
  }
}

const TaskService = new class {
  /**
   * @method
   * Describe method
   * @param {Task} task
   */
  complete(task) {
    task.completed = true;
    console.log(`Completin task: ${task.name}`);
  }
  /**
   * @method
   * Describe method
   * @param {Task} task
   */
  setCompleteDate(task) {
    task.completeDate = new Date();
    console.log(`${task.name} completed on ${task.completeDate}`);
  }
  /**
   * @method
   * Describe method
   * @param {Task} task
   */
  notifyCompletion(task, user) {
    console.log(`Notifying ${user} of completion of ${task.name}`);
  }
  /**
   * @method
   * Describe method
   * @param {Task} task
   */
  save(task) {
    console.log(`Saving task ${task.name}`);
  }
};

const TaskServiceWrapper = new class {
  completeAndNotify(task) {
    TaskService.complete(myTask);
    if (myTask.completed) {
      TaskService.setCompleteDate(myTask);
      TaskService.notifyCompletion(myTask);
      TaskService.save(myTask);
    }
  }
};

const myTask = new Task({
  name: 'My task',
  priority: 1,
  project: 'Courses',
  user: 'Jon',
  completed: false,
});
TaskServiceWrapper.completeAndNotify(myTask);
console.log(myTask);
