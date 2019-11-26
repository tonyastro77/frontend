import ActionTypes from "../actions/ActionTypes";

export const initialState = {
  isLoading: false,
  urgencyTypeList: [],
  urgencyTypeIdsFound: null,
  urgencyTypeById: []
};

export default function urgencytypes(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.URGENCYTYPES_ALL_REQ:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.URGENCYTYPES_ALL_OK:
      return {
        ...state,
        urgencyTypeList: action.urgencyTypeList,
        isLoading: false,
      }
    case ActionTypes.URGENCYTYPESTYPES_ALL_X:
      return {
        ...state,
        isLoading: false
      }
      case ActionTypes.URGENCYTYPES_BYID_REQ:
        return {
            ...state,
            isLoading: true
        }
    case ActionTypes.URGENCYTYPES_BYID_OK:
        return {
            ...state,
            urgencyTypeById: action.urgencyTypeById,
            isLoading: false
        }
    case ActionTypes.URGENCYTYPESTYPES_BYID_X:
        return {
            ...state,
            isLoading: false
        }
    case null:
      return state;
    default:
      return state;
  }
}

