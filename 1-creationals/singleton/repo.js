class Repo {
  constructor() {
    console.log('Newing up task repo');
    this.called = 0;
  }

  save(task) {
    this.called++;
    console.log(`Saving ${task} \n\tCalled ${this.called} times`);
  }
}

module.exports = new Repo();
