const eventReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
        console.log('hai');
        console.log(state.events);
        console.log(...state.events, action.event);
        console.log(action.event);
      return {events: [...state.events, action.event]};
    default:
      return state;
  }
};

export default eventReducer;
