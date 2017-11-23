export const addItem = (barcode) => ({
    type: 'SNACKSPACE_STATEMENT_ADD_ITEM',
    barcode
});

export const startCheckout = () => ({
    type: 'SNACKSPACE_START_CHECKOUT',
});

export const clearBasket = () => ({
    type: 'SNACKSPACE_STATEMENT_CLEAR'
});