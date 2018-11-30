/**
 * @typedef User
 * @type {object}
 * @property {string} name - The name of user.
 * @property {string} description - The description for user.
 */
const Repo = () => {
  const db = {

  };


  const get = (id) => {
    console.log(`Getting user ${id}`);
    return {
      name: `New user ${id} from db`,
    }
  };

  const save = ({ name, description }) => {
    console.log(`Saving ${name} to the db`);
  };

  return {
    /**
     * @function get() - Get the user from id
     * @param {number} id - The id from user to return
     * @returns {User} The user from id
     */
    get,
    /**
     * @function save() - Storage user in db
     * @param {Object} user - The user data {name, description}
     * @param {string} user.name - The name of user.
     * @param {string} user.description - The description for user.
     */
    save,
  };
};

module.exports = Repo();
