/**
 * @typedef Task
 * @type {object}
 * @property {string} name - The name of task.
 * @property {string} description - The description for task.
 */
const Repo = () => {
  const db = {

  };


  const get = (id) => {
    console.log(`Getting task ${id}`);
    return {
      name: `New task ${id} from db`,
    }
  };

  const save = ({ name, description }) => {
    console.log(`Saving ${name} to the db`);
  };

  return {
    /**
     * @function get() - Get the task from id
     * @param {number} id - The id from task to return
     * @returns {Task} The task from id
     */
    get,
    /**
     * @function save() - Storage task in db
     * @param {Object} task - The task data {name, description}
     * @param {string} task.name - The name of task.
     * @param {string} task.description - The description for task.
     */
    save,
  };
};

module.exports = Repo();
