/**
 * @typedef Task
 * @type {object}
 * @property {string} name - The name of task.
 * @property {string} description - The description for task.
 */

/**
  * This is a description of the SingletonTaskRepo class.
  */
class SingletonTaskRepo {
  constructor() {
    /**
     * @access private
     */
    this._instance;
  }
  /**
   * @access private
   * @method
   * Create the instance of task,
   * "init" is from the Singleton pattern
   */
  _init() {
    console.log('>> getInstance() > instance created!');
    this._instance = new Object('taks');
    return this._instance;
  }
  /**
   * @access public
   * @method
   * Create and return the instance of task only once and return
   * @returns {Task} A task
   */
  getInstance() {
    return this._instance ? this._instance : this._init();
  }
}

const TaskRepo = new SingletonTaskRepo();

const repo1 = TaskRepo.getInstance();
const repo2 = TaskRepo.getInstance();
const repo3 = TaskRepo.getInstance();
const repo4 = TaskRepo.getInstance();
if (repo1 === repo2) {
  console.log('Same taskRepo');
} else {
  console.log('Not same taskRepo :(');
}
