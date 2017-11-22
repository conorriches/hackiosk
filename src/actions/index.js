export const addItem = (barcode) => ({
    type: 'SNACKSPACE_STATEMENT_ADD_ITEM',
    barcode
});

export const clearItems = (name, price, barcode) => ({
    type: 'STATEMENT_CLEAR',
    name,
    price,
    barcode
});