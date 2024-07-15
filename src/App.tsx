import React, { useState } from 'react';
import { create } from 'zustand'
import './App.css';
import  {NavBar }from './Component/NavBar';
import { Body } from './Component/Body';
import { buttonContext } from "./Context/butonContext";
import { count } from 'console';
// import imageProduct1 from '../images/imageProduct1.jpg'
// import imageProduct2 from '../images/imageProduct2.jpg'
// import imageProduct3 from '../images/imageProduct3.jpg'
// import imageProduct4 from '../images/imageProduct4.jpg'

 type State = {
  count: number
  cart: any[],
  increment: () => void
  decrement: () => void
  addProduct: (count: number, image: any) => void
  cleanCart: () => void
  deleteProduct: (id: number) => void
 }

 const useCountStore = create<State>((set, get) => ({
  cart: [],
  count: 1,
  increment: () => set((state) => ({count: state.count + 1})),
  decrement: () => set((state) => ({count: state.count + 1})),
  addProduct: (count: number, image: any) =>  { const existingProductIndex = get().cart.findIndex(
    (item) => item.image === image
  );
  if (existingProductIndex !== -1) {
    const updatedCart = get().cart.map((item, index) => {
      if (index === existingProductIndex) {
        return { ...item, count: item.count + count };
      }
      return item;
    });
    set(() => ({ cart: updatedCart }));
  } else {
    set(() => ({ cart: [...get().cart, {count, image}] }));
  }
  
    
    },
  cleanCart: () => set((state) => ({cart: []})),
  deleteProduct: (id: number) =>{ const updatedCart = get().cart.filter(( index) => index === id); 
    set((state) => ({ cart: updatedCart }))} 

 }))


function App() {
  const [open, setOpen] = useState(false)
  const count = useCountStore((state) => state.count)
  const cart = useCountStore((state) => state.cart)
  const increment = useCountStore((state) => state.decrement)
  const decrement = useCountStore((state) => state.decrement)
  const addProduct = useCountStore((state) => state.addProduct)
  const cleanCart = useCountStore((stat) => stat.cleanCart)
  const deleteProduct = useCountStore((state) => state.deleteProduct )

const handleOpen = () => {
  setOpen(!open)
}

  return (
    <div className="">

        <NavBar onDeleteProduct={deleteProduct} onCleanCart={cleanCart} count={count} cart={cart}  />
         <buttonContext.Provider value={{
          showBackground: open,
          onOpen: handleOpen,
         }}>
             <Body onAddProduct={addProduct} count={count} onIncrease={increment} onDecrease={decrement} />
         </buttonContext.Provider>
           
         
    </div>
  );
}

export default App;
