const DatabaseOperation = require('./DatabaseOperation');

class FindOperation extends DatabaseOperation {
  async execute() {
    return await this.model.find({});
  }
}

module.exports = FindOperation;
