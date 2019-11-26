import ActionTypes from './ActionTypes';
import axios from 'axios';
import { API_ROOT } from '../constants/AppConstants'

export const urgencyTypesAll_REQ = () => ({
  type: ActionTypes.URGENCYTYPES_ALL_REQ,
});

export const urgencyTypesAll_OK = (urgencyTypeList) => ({
  type: ActionTypes.URGENCYTYPES_ALL_OK,
  urgencyTypeList: urgencyTypeList
});

export const urgencyTypesAll_X = () => ({
  type: ActionTypes.URGENCYTYPES_ALL_X,
});

export function fetchAllUrgencyTypes() {
  return async (dispatch, getState) => {

    dispatch(urgencyTypesAll_REQ());

    const ajaxRequest = {
      method: 'get',
      url: API_ROOT + '/urgencyType/all',
    };

    axios(ajaxRequest)
      .then((response) => {
        dispatch(urgencyTypesAll_OK(response.data));
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(urgencyTypesAll_X());
      })
      .then(() => {
        return {
          type: null
        };
      });
  }
}

// GET urgencytype by id
export const urgencyTypesById_REQ = () => ({type: ActionTypes.URGENCYTYPES_BYID_REQ});

export const urgencyTypesById_OK = (urgencyTypeById) => ({type: ActionTypes.URGENCYTYPES_BYID_OK, urgencyTypeById: urgencyTypeById});

export const urgencyTypesById_X = () => ({type: ActionTypes.URGENCYTYPES_BYID_X});

export function fetchUrgencyTypesById(id) {
  return async (dispatch, getState) => {
      dispatch(urgencyTypesById_REQ());

      const ajaxRequest = {
          method: 'get',
          url: API_ROOT + `/urgencyType/${id}`
      };

      axios(ajaxRequest).then((response) => {
          dispatch(urgencyTypesById_OK(response.data));
      }).catch((error) => {
          console.error("Error: " + error);
          dispatch(urgencyTypesById_X());
      }).then(() => {
          return {type: null};
      });
  }
}

//delete urgencytype
export const urgencyDelete_REQ = id => ({
  type: ActionTypes.URGENCYTYPES_DELETE_REQ,
  id: id
});
export const urgencyDelete_OK = () => ({
  type: ActionTypes.URGENCYTYPES_DELETE_OK
});
export const urgencyDelete_X = () => ({
  type: ActionTypes.URGENCYTYPES_DELETE_X
});

export function deleteUrgency(id) {
  return async (dispatch, getState) => {
    dispatch(urgencyDelete_REQ(id));
    console.dir("Delete by this id: " + id);

    const ajaxRequest = {
      method: "delete",
      url: API_ROOT + "/urgencyType/" + id
    };

    axios(ajaxRequest)
      .then(response => {
        dispatch(urgencyDelete_OK());
        dispatch(fetchAllUrgencyTypes());
      })
      .catch(error => {
        console.error("Error: " + error);
        dispatch(urgencyDelete_X());
      })
      .then(() => {
        return {
          type: null
        };
      });
  };
}
