
const snackspace = (state = [], action) => {
  switch (action.type) {
    case "SNACKSPACE_STATEMENT_ADD_ITEM":
      return {...state, redirect: true};
    case "SNACKSPACE_START_CHECKOUT":
      return {...state, checkout:1};
    case "SNACKSPACE_STATEMENT_CLEAR":
      return [];
    default:
      return state;
  }
};

export default snackspace;
