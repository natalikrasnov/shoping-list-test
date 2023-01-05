import { createContext, useReducer } from "react";
import ProductsReducer, { productsInitialState } from "../reduce/shoppingList.reducer";

export const ShoppingListContext = createContext()

const ShoppingListContextProvider = (props) => {
    const [products, productsDispatch] = useReducer(ProductsReducer, productsInitialState)

    const countProducts = products.reduce((prevValue, currValue) => {
        return prevValue + (currValue.count || 1)
    }, 0)

    return (
        <ShoppingListContext.Provider value={{
            products,
            productsDispatch,
            countProducts
        }}>
            {props.children}
        </ShoppingListContext.Provider>
    )
}

export default ShoppingListContextProvider