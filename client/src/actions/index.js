export const addItem = barcode => ({
  type: "SNACKSPACE_STATEMENT_ADD_ITEM",
  barcode
});

export const cancelCheckout = barcode => ({
  type: "SNACKSPACE_CANCEL_CHECKOUT"
});

export const startCheckout = total => ({
  type: "SNACKSPACE_START_CHECKOUT",
  total
});

export const clearBasket = () => ({
  type: "SNACKSPACE_STATEMENT_CLEAR"
});
