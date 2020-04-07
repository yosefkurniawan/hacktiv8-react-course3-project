const eventReducer = function(state = [], action) {
  switch (action.type) {
    case 'ADD_EVENT':
      return {
        ...state,
        message: action.event,
      };
    default:
      return state;
  }
};

export default eventReducer;
