/**
 * @typedef ProjectRepository
 * @type {object}
 */
/**
 * @typedef TaskRepository
 * @type {object}
 */
/**
 * @typedef UserRepository
 * @type {object}
 */

/**
 * Factory to get repositories
 */
class RepoFactory {
  /**
   * @method getRepository - Get repository class by name
   * @param {string} repoName - Name of repository to create
   * @returns {ProjectRepository|TaskRepository|UserRepository} A repository class
   */
  getRepository(repoName) {
    return require(`./${repoName}-repository.js`);
  }
}

module.exports = new RepoFactory();
