export const initialState = {
  basket: [],
  user: null
};

// Selectors [Standard Practice to have it for calculations!]
// refer Array.prototype.reduce()
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      // Find the index of the item being clicked!
      const indexToBeRemoved = state.basket.findIndex(
        (item) => item.id === action.id
      );

      const newBasket = [...state.basket];

      if (indexToBeRemoved >= 0) {
        // Item exists
        newBasket.splice(indexToBeRemoved, 1);
      } else {
        // Item Not Found!
        console.warn(`Cannot remove the product [id : + ${action.id} +].`);
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user
      }


    default:
      return state;
  }
};

export default reducer;
