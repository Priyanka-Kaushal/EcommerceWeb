import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  CLEAR_CART,
} from "../action/ActionType";

const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
  totalAmount: JSON.parse(localStorage.getItem("cartTotalAmount")) || 0,
};

const saveCartToLocalStorage = (items, totalAmount) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
  localStorage.setItem("cartTotalAmount", JSON.stringify(totalAmount));
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const existingProduct = state.items.find((item) => item.id === product.id);

      let updatedItems;
      if (existingProduct) {
        updatedItems = state.items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedItems = [...state.items, { ...product }];
      }

      const updatedTotalAmount = updatedItems.reduce(
        (sum, item) => sum + item.selectedQuatity * item.price,
        0
      );

      // Save to localStorage
      saveCartToLocalStorage(updatedItems, updatedTotalAmount);

      return { ...state, items: updatedItems, totalAmount: updatedTotalAmount };
    }

    case REMOVE_FROM_CART: {
      const productId = action.payload;
      const updatedItems = state.items.filter((item) => item.id !== productId);

      const updatedTotalAmount = updatedItems.reduce(
        (sum, item) => sum + item.selectedQuatity * item.price,
        0
      );

      // Save to localStorage
      saveCartToLocalStorage(updatedItems, updatedTotalAmount);

      return { ...state, items: updatedItems, totalAmount: updatedTotalAmount };
    }

    case UPDATE_QUANTITY: {
      const { id, quantity } = action.payload;
      debugger;
      const updatedItems = state.items.map((item) =>
        item.id === id ? { ...item, selectedQuatity: quantity } : item
      );

      const updatedTotalAmount = updatedItems.reduce(
        (sum, item) => sum + item.selectedQuatity * item.price,
        0
      );

      // Save to localStorage
      saveCartToLocalStorage(updatedItems, updatedTotalAmount);

      return { ...state, items: updatedItems, totalAmount: updatedTotalAmount };
    }

    case CLEAR_CART: {
      // Clear localStorage
      saveCartToLocalStorage([], 0);

      return { ...state, items: [], totalAmount: 0 };
    }

    default:
      return state;
  }
};

export default cartReducer;
