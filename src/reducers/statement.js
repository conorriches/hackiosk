import { snackspace } from "../config";

const statement = (state = [], action) => {
  switch (action.type) {
    case "SNACKSPACE_STATEMENT_ADD_ITEM":
      let barcode = action.barcode;
      let toReturn = false;

      snackspace.products.map(item => {
        if (item.barcode == barcode) {
          toReturn = {
            name: item.name,
            price: item.price,
            barcode: item.barcode
          };
        }
      });
      
      return toReturn?[...state, toReturn] : state;

    default:
      return state;
  }
};

export default statement;
