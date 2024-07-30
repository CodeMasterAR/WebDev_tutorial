import Navbar from "./components/Navbar";
import CartContainer from './components/CartContainer';
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";
import { openModal } from './features/modal/modalSlice';

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  useEffect(() => {
    dispatch(getCartItems())
  },[])

  if(isLoading){
    return (
    <div className='loading'>
      <h1>Loading...</h1>
    </div>)
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
      <button onClick={() => dispatch(openModal())}>Open Modal</button>
    </main>
  );
}

export default App;
