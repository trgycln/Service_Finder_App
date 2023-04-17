// Action Types
export const CategoryActions = {
  SET_CATEGORİES: "SET_CATEGORİES",
};


// Category Actions
export const categoryAction = (payload) => {
  return {
    type: CategoryActions.SET_CATEGORİES,
    payload,
  };
};


// Reducer
const initialState = {
  categories: [],
  initialized:false
};

export const categoryReducer = (state = initialState, action) => {

  switch (action.type) {
    case CategoryActions.SET_CATEGORİES:
      return {
        categories:action.payload,
        initialized:true
      };

    default:
      return state;
  }
};
