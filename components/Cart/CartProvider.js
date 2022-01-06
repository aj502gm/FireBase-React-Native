import React, {useState, createContext, useEffect} from 'react';

export const cartContext = createContext("Shopping Cart Provider");

export const CartProvider = ({children})=> {
    
    const [cartList, setCartList] = useState(undefined);
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

   const checkIfProductIsListed = (product) => {
       let isListed  = false;
       let indexTemp = 0;
       cartList?.forEach((value,index)=>{
           if(value.id_product === product.id_product){
               console.log("hallado");
               indexTemp = index;
               isListed = true;
           }
       });
       if(isListed){
        //    cartList[indexTemp].id_product 
        //    setCartList()
           return;
       }
       setCartList((typeof cartList === 'undefined')?[product]:[...cartList, product])
       
   }

   const addToCart = (product) => {
       try{
           checkIfProductIsListed(product);
           //setCartList((typeof cartList === 'undefined')?[product]:[...cartList, product]);
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
