import { snackspace } from "../config";

const statement = (state = [], action) => {
  switch (action.type) {
    case "SNACKSPACE_STATEMENT_ADD_ITEM":
      let barcode = action.barcode;
      let toReturn = false;

      if(!barcode) return state;  
      snackspace.products.map(item => {
        if (item.barcode == barcode) {
          toReturn = {
            name: item.name,
            price: item.price,
            barcode: item.barcode
          };
        }
      });
      
      return toReturn?[...state, toReturn] : [...state,{name:"Unknown Item",price:0, barcode: "Manually deduct from Balance"}];
    case "SNACKSPACE_STATEMENT_CLEAR":
      return [];
    default:
      return state;
  }
};

export default statement;
