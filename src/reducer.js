const clone = require('clone')
const _ = require('lodash')


module.exports = function (state, action) {
  const newState = clone(state)
  console.log('action ',action);

  switch (action.type) {
    case 'USER_PROFILE':
    console.log('USER_PROFILE',action.payload);
      // newState.userProfile

      return newState

    case 'REMOVE_FROM_CART':

      return newState

    default:
      return newState
  }
}
