const { combineReducers } = require('redux');

// function test(state = { text: [123123] }, action) {
//   switch (action.type) {
//     case 'test':
//       return {
//         text: action.payload.text
//       };
//     default:
//       return state;
//   }
// }

const reducerCreator = (reducer) => combineReducers({
  reducer
});

module.exports = reducerCreator;
