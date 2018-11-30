const Task = require('./1.1task');
const Repo = require('./2-module-pattern');

const task = new Task(Repo.get(1));
const task1 = new Task({ name: 'Task 2 - Demo' });
const task2 = new Task({ name: 'Task 3 - Demo' });
const task3 = new Task({ name: 'Task 4 - Demo' });

task.complete();
task1.save();
task2.save();
task3.save();
