import React, {useState, createContext, useEffect} from 'react';

export const cartContext = createContext("Shopping Cart Provider");

export const CartProvider = ({children})=> {
    const [cartList, setCartList] = useState(undefined);
   
   const [toPay, setToPay] = useState(0);

   const checkIfProductIsListed = (product) => {
       let isListed  = false;
       let indexTemp = 0;
       cartList?.forEach((value,index)=>{
           if(value.id_product === product.id_product){
               
               indexTemp = index;
               isListed = true;
           }
       });
       if(isListed){
           /*IF THERE IS A MATCH, THAT MEANS WE NEED TO GET THE INDEX AND UPDATE THE AMOUNT + 1*/ 
           handleUpdatesCartList(indexTemp, 'INCREASE');
       }else{
            setCartList((typeof cartList === 'undefined')?[product]:[...cartList, product])
       }
   }
   const handleUpdatesCartList = (index, operation) =>{
       let products = [...cartList]; //TEMP LIST
       let newCartListItem = (operation === 'INCREASE')?{...products[index], amount: products[index].amount += 1}: {...products[index], amount: products[index].amount -= 1}; //CURRENT MATCH POSITION CHANGE
       products[index] = newCartListItem //UDPATE ELEMENT AT "INDEX" POSITION 
       setCartList(products);
   }
   const getToPay = () => {
        let balance = 0;
        cartList?.forEach((value,index) => {
            balance += value.amount * value.price;
       });
       console.log(cartList);
       console.log("Total: " + balance);
       setToPay(balance);
   }
   const addToCart = (product) => {
       try{
           checkIfProductIsListed(product);
       }catch(err){
           console.log(
               err
           );
       }
   }
   useEffect(() => {
       getToPay();
   }, [cartList]);
   

    return (
        <cartContext.Provider value = {{toPay, addToCart, cartList, handleUpdatesCartList}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider
