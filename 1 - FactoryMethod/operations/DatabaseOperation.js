class DatabaseOperation {
    constructor(model) {
      this.model = model;
    }
  
    async execute() {
      throw new Error("Method 'execute()' must be implemented.");
    }
  }
  
  module.exports = DatabaseOperation;
  