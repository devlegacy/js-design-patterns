const Task = require('./1.1task');
const repoFactory = require('./factory/repo-factory');

const task = new Task(repoFactory.getRepository('task').get(1));
const task1 = new Task(repoFactory.getRepository('task').get(2));

const user = repoFactory.getRepository('user').get(1);
const project = repoFactory.getRepository('project').get(1);

task1.user = user;
task1.project = project;
console.log(task1);
task1.save();
