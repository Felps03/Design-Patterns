const DatabaseOperation = require('./DatabaseOperation');

class InsertOperation extends DatabaseOperation {
  constructor(model, data) {
    super(model);
    this.data = data;
  }

  async execute() {
    const document = new this.model(this.data);
    return await document.save();
  }
}

module.exports = InsertOperation;
