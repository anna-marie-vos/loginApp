const clone = require('clone')
const _ = require('lodash')


module.exports = function (state, action) {
  const newState = clone(state)
  console.log('action ',action);

  switch (action.type) {
    case 'RENDER_PIC1':
    console.log('action.payload',action.payload);
      newState.renderedPic = state.pics[action.payload.id]

      return newState

    case 'REMOVE_FROM_CART':

      return newState

    default:
      return newState
  }
}
