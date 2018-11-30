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
  constructor() {
    this.repo = {};
    this.repoList = [
      {
        name: 'project',
        source: './project-repository.js'
      },
      {
        name: 'task',
        source: './task-repository.js'
      },
      {
        name: 'user',
        source: './user-repository.js'
      },
    ];
    this.repoList.forEach(repository => {
      Object.assign(this.repo, this.getRepository(repository))
    });
    // console.log(this.repo);
  }

  /**
   * @method getRepository - Get repository class by name
   * @param {object} repository - Repository info {name, source}
   * @param {string} repository.name - Name of repository to create
   * @param {string} repository.source - Source of repository
   * @returns {ProjectRepository|TaskRepository|UserRepository} A repository class
   */
  getRepository(repository) {
    const name = repository.name;
    const repo = {};
    repo[name] = require(repository.source);
    return repo;
  }
}

module.exports = new RepoFactory();
