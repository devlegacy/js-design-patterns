const Repo = require('./2-module-pattern');
/**
 * Class representing a task.
 */
class Task {
  /**
   * Create a task.
   * @param {Object} task - The task data {name, description}
   * @param {string} [task.name=Default name] - The name of task.
   * @param {string} [task.description=Default name] - The description for task.
   */
  constructor({ name, description }) {
    this.name = name || 'Default name';
    this.description = description || 'Default description';
    this.completed = false;
  }

  /**
   * @method complete()
   * Mark task as complete
   */
  complete() {
    console.log(`Completing task: ${this.name}`);
    this.completed = true;
  }
  /**
   * @method save()
   * Save task in DB
   */
  save() {
    console.log(`Saving task: ${this.name}`);
    Repo.save(this);
  }

}

module.exports = Task;
