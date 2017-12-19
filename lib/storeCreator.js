const { createStore, compose } = require('redux');

const reducerCreator = require('./rootReducer');

module.exports = (reducer, state) => {
  const composeEnhancers = (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  const store = createStore(
    reducerCreator(reducer),
    state,
    composeEnhancers()
  );

  return store;
};
