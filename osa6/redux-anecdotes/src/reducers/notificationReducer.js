export const setNotification = (content) => {
  return {
    type: 'SET_NOTIFICATION',
    data: {
      content
    }
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR_NOTIFICATION',
    data: {
      content: null
    }
  }
}

const initialState = null

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data.content
    case 'CLEAR_NOTIFICATION':
      return initialState
    default:
      return state
  }
}

export default reducer