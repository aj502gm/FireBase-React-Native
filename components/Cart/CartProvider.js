import React, {useState, createContext, useEffect} from 'react';

export const cartContext = createContext("Shopping Cart Provider");

export const CartProvider = ({children})=> {
    
    const [cartList, setCartList] = useState([]);
    /*
        [{
            id_producto,
            nombre,
            precio,

            cantidad
        },{

        }]
    */
   const [toPay, setToPay] = useState(0);

   const addToCart = (product) => {
       try{
        setCartList(product);
          //console.log("CLICK")
       }catch(err){
           console.log(
               err
           );
       }
   }
   useEffect(() => {
       console.log(cartList)
   }, [cartList]);

    return (
        <cartContext.Provider value = {{toPay, addToCart, cartList}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider
