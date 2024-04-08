const FindOperation = require('../operations/FindOperation');
const InsertOperation = require('../operations/InsertOperation');

class OperationFactory {
  static operationMap = {
    find: FindOperation,
    insert: InsertOperation,
  };

  static createOperation(operationType, model, data = null) {
    const OperationClass = this.operationMap[operationType];
    
    if (!OperationClass) {
      throw new Error('Unsupported operation type');
    }

    return new OperationClass(model, data);
  }
}

module.exports = OperationFactory;
