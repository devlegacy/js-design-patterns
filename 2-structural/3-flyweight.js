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
