import { createContext, useContext, useEffect, useState } from "react";
import ShoppingCart from '../component/ShoppingCart'


const ShoppingCartContxt=createContext({})

const initialCartItems = localStorage.getItem("shopping-cart")? JSON.parse(localStorage.getItem("shopping-cart")): [];

  

const ShoppingCartContxtProvider=({children})=>{



    const [cartItems,setCarItems]=useState(initialCartItems)

    useEffect(() => {
        localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
      }, [cartItems]);



    const getItemsQuantity=(id)=>{
        return cartItems.find((ele)=>ele.id===id)?.quantity  || 0
    }


    const increaseCartQuantity=(id)=>{
        setCarItems((current)=>{
            if(current.find((ele)=>ele.id===id)==null){
                return [...current,{id,quantity:1}]
            }
            else{
                return current.map((ele)=>{
                    if(ele.id===id){
                        return {...ele,quantity:ele.quantity+1}
                    }
                    else{
                        return ele
                    }
                })
            }
        })

    }


    const decreaseCartQuantity=(id)=>{
        setCarItems((current)=>{
            if(current.find((ele)=>ele.id===id)==null){
                return current.filter((ele)=>ele.id!==id)
            }
            else{
                return current.map((ele)=>{
                    if(ele.id===id){
                        return {...ele,quantity:ele.quantity-1}
                    }
                    else{
                        return ele
                    }
                })
            }
        })

    }


    const removeItemFromCart=(id)=>{
        setCarItems((current)=>current.filter((ele)=>ele.id!==id))
    }




    const[isOpen,setIsOpen]=useState(false)


    const openCart=()=>{
        setIsOpen(true)
    }

    const closeCart=()=>{
        setIsOpen(false)
    }

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
      );





    return (
<ShoppingCartContxt.Provider value={{cartItems,getItemsQuantity,increaseCartQuantity,decreaseCartQuantity,removeItemFromCart,openCart,closeCart,cartQuantity}}>

        {children}
        <ShoppingCart isOpen={isOpen}/>

</ShoppingCartContxt.Provider>
    )

}

export default ShoppingCartContxtProvider

export const useShoppingCartContext=()=>{
    return useContext(ShoppingCartContxt)
}