const statement = (state = [], action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return [
          ...state,
          {
            name: action.name,
            price: action.price
          }
        ]
      default:
        return state
    }
  }
  
  export default statement