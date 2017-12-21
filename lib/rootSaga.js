const { fork } = require('redux-saga/effects');

const sagaCreator = (saga) => function* () {
  yield [
    fork(saga)
  ];
}

module.exports = sagaCreator;