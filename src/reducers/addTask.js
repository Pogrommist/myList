const initialState = [];

export default function addTask(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        action.payload
      ];
    default:
      return state
  }
}
