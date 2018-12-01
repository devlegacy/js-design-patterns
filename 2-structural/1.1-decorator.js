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

class UrgentTask extends Task {
  constructor(name, priority) {
    super(name);
    this.priority = priority;
  }
  notify() {
    console.log('Notifying importany people');
  }
  save() {
    this.notify();
    super.save();
  }
}

const myTask = new Task('Legacy task');
myTask.complete();
myTask.save();


const urgentTask = new UrgentTask('Urgent task', 2);
console.log(urgentTask);
urgentTask.complete();
urgentTask.save();
