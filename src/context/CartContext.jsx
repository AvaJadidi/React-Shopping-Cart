import { createContext, useContext, useReducer } from "react";
import { sumProuducts } from "../helpers/helper";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  chekout: false,
};

const reducer = (state, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumProuducts(state.selectedItems),
        chekout: false,
      
      };

    case "REMOVE_ITEM":
      { const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumProuducts(newSelectedItems),
      }; }
    case "INCREASE":
      { const increaseindex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[increaseindex].quantity++;
      return {
        ...state,
        ...sumProuducts(state.selectedItems),
      }; }
      case "DECREASE":
        { const decreaseIndex = state.selectedItems.findIndex(
          (item) => item.id === action.payload.id
        );
        state.selectedItems[decreaseIndex].quantity--;
        return {
          ...state,
          ...sumProuducts(state.selectedItems),
        }; }

        case "CHECKOUT":
            return{
            selectedItems:[],
            itemsCounter:0,
            total:0,
            checkout:true,
        }

    default:
      throw new Error("Invalid Action");
  }

};

const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartProvider;
export { useCart };
