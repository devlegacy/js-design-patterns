// const Repo = require('./repo');
// const myRepo = new Repo();

const myRepo = require('./repo');

class TaskHandler {
  save() {
    myRepo.save('Hi from task handler');
  }
}

module.exports = new TaskHandler();
