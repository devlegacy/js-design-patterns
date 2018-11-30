const taskHandler = require('./singleton/task-handler');
// const Repo = require('./singleton/repo');
// const myRepo = new Repo();

const myRepo = require('./singleton/repo');

myRepo.save('From main');
myRepo.save('From main');
myRepo.save('From main');

taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();
