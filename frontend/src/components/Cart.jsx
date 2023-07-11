import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  incrementByAmount,
  resetCart,
  removeItem,
} from "../store/cartReducer";
const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0)
  return (

    <div>
      <button onClick={() => dispatch(addToCart({ _id: "dsa", quantity: 1 }))}>
        add
      </button>
      <button onClick={() => dispatch(removeItem({ _id: "dsa", quantity: 1 }))}>
        remove
      </button>
      <button
        onClick={() => dispatch(incrementByAmount({ quantity }))}
      >
        addQuant
      </button>
      <button onClick={() => dispatch(resetCart({ _id: "dsa", quantity: 1 }))}>
        reset
      </button>
    </div>
  );
};

export default Cart;
