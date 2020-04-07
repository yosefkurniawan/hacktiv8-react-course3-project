const eventReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return {events: [...state.events, action.event]};
    default:
      return state;
  }
};

export default eventReducer;
