/**
 * @typedef Project
 * @type {object}
 * @property {string} name - The name of project.
 * @property {string} description - The description for project.
 */
const Repo = () => {
  const db = {

  };


  const get = (id) => {
    console.log(`Getting project ${id}`);
    return {
      name: `New project ${id} from db`,
    }
  };

  const save = ({ name, description }) => {
    console.log(`Saving ${name} to the db`);
  };

  return {
    /**
     * @function get() - Get the project from id
     * @param {number} id - The id from project to return
     * @returns {Project} The project from id
     */
    get,
    /**
     * @function save() - Storage project in db
     * @param {Object} project - The project data {name, description}
     * @param {string} project.name - The name of project.
     * @param {string} project.description - The description for project.
     */
    save,
  };
};

module.exports = Repo();
