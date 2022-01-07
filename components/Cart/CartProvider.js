import React, {useState, createContext, useEffect} from 'react';

export const cartContext = createContext("Shopping Cart Provider");

export const CartProvider = ({children})=> {
    /*
    
        LA CARTLISTTEMP MARCA UNDEFINED PORQUE EL ESTADO NO SE CONSERVA, HACE UN RE-RENDER 
        Y SE VUELVE A PONER COMO UNDEFINED
    */ 
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
           handleUpdatesCartList(indexTemp);
       }else{
            setCartList((typeof cartList === 'undefined')?[product]:[...cartList, product])
        console.log("Nuevo");
       }
   }
   const handleUpdatesCartList = (index) =>{
       let products = [...cartList]; //TEMP LIST
       let newCartListItem = {...products[index], amount: products[index].amount += 1}; //CURRENT MATCH POSITION CHANGE
       products[index] = newCartListItem //UDPATE ELEMENT AT "INDEX" POSITION 
       setCartList(products);
   }
//    const getToPay = () => {
//         let balance = 0;
//         cartList.forEach((value,index) => {
//             balance += value.amount * value.price;
//        });
//        setToPay(balance);
//    }
   const addToCart = (product) => {
       try{
           //checkIfProductIsListed(product);
           setCartList((typeof cartList === 'undefined')?[product]:[...cartList, product]);
           checkIfProductIsListed(product);
       }catch(err){
           console.log(
               err
           );
       }
   }
   useEffect(() => {
      console.log(cartList); //CHECK CART LIST CHANGES ON UPDATE
   }, [cartList]);
   

    return (
        <cartContext.Provider value = {{toPay, addToCart, cartList}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider
