import { createContext, useEffect, useState } from "react";
import { food_list } from "../Assets/assets";

export const Storecontext = createContext(null);

const StoreContextProvier = (props) =>{
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) =>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }
    
    const getTotalCartAmount = ()=>{
        let total = 0;
        
        for (const item in cartItems) {
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product)=>product._id === item);
                total = total + itemInfo.price * cartItems[item];
            }
        }
        return total;
    }

    useEffect(()=>{
    }, [cartItems])

    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        setCartItems,
        getTotalCartAmount,
    }

    return (
        <Storecontext.Provider value={contextValue}>
            {props.children}
        </Storecontext.Provider>
    )
}
export default StoreContextProvier;