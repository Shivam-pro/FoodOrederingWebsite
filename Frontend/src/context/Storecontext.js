import { createContext, useEffect, useState } from "react";
import axios from 'axios'
// import { food_list } from "../Assets/assets";

export const Storecontext = createContext(null);

const StoreContextProvier = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:3000";
    const [token, setToken] = useState("")
    const [food_list, setFoodList] = useState([])

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if (token) {
            await axios.post(url + '/api/cart/add', { itemId }, { headers: { token } });
        }
    }
    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (token) {
            await axios.post(url + '/api/cart/remove', { itemId }, { headers: { token } });
        }
    }

    const getTotalCartAmount = () => {
        let total = 0;

        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                total = total + itemInfo.price * cartItems[item];
            }
        }
        return total;
    }

    const fetchFoodList = async () => {
        const response = await axios.get(url + '/api/food/list');
        setFoodList(response.data.data);
    }

    const loadCartData = async (token) => {
        const response = await axios.post(url + '/api/cart/get', {}, { headers: { token } });
        setCartItems(response.data.cartData);
    }
    useEffect(() => {
    }, [cartItems])

    useEffect(() => {
        async function loadData() {
            await fetchFoodList()
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData()
    }, [])

    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        setCartItems,
        getTotalCartAmount,
        url,
        token,
        setToken,
    }

    return (
        <Storecontext.Provider value={contextValue}>
            {props.children}
        </Storecontext.Provider>
    )
}
export default StoreContextProvier;