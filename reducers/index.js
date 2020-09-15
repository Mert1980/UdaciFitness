import { RECEIVE_ENTRIES, ADD_ENTRY, SELECT_DATE } from "../actions/index";

function entries(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ENTRIES:
      return {
        ...state,
        ...action.entries,
      };
    case ADD_ENTRY:
      return {
        ...state,
        ...action.entry,
      };
    // case SELECT_DATE:
    //   return {
    //     ...state,
    //     date: action.date,
    //   };
    default:
      return state;
  }
}

export default entries;
