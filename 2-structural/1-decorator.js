class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  }

  complete() {
    console.log(`Completing task: ${this.name}`);
    this.complete = true;
  }

  save() {
    console.log(`Saving task: ${this.name}`);
    this.complete = true;
  }
}

const myTask = new Task('Legacy task');
myTask.complete();
myTask.save();


const urgentTask = new Task('Urgent task');
urgentTask.priority = 2;
urgentTask.notify = function () {
  console.log('Notifying importany people');
};
// urgentTask.notify();
urgentTask.complete();
// urgentTask.save();
urgentTask.save = function () {
  this.notify();
  Task.prototype.save.call(this);
};
urgentTask.save();
