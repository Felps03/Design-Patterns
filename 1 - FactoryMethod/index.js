const mongoose = require('mongoose');
const UserModel = require('./models/UserModel');
const OperationFactory = require('./factories/OperationFactory');

mongoose.connect('mongodb://localhost:27017/desingPatterns');

(async () => {
  try {

    const insertOperation = OperationFactory.createOperation('insert', UserModel, { name: 'Jane Doe', age: 28 });
    await insertOperation.execute();
    console.log('User inserted');

    const findOperation = OperationFactory.createOperation('find', UserModel);
    const users = await findOperation.execute();
    console.log('Users found:', users);
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    await mongoose.disconnect();
  }
})();
