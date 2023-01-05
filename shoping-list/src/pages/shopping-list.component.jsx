import { ShoppingListContext } from "../hooks/context/shoppingList.context"
import { CountProducts } from "../components/shoppingList/countProducts.component"
import { AddNewItem } from "../components/shoppingList/AddNewItem.component"
import { ShoppingListList } from "../components/shoppingList/shoppingList-list.component"
import { useContext, useEffect } from "react"
import { initProductsAction } from "../hooks/actions/shoppingList.actions"
import { getAllProducts } from "../utils/apiRequests"

export const ShoppingList = () => {
    const { productsDispatch } = useContext(ShoppingListContext)

    useEffect(() => {
        initialProducts()
    }, [])

    const initialProducts = async () => {
        const products = await getAllProducts()
        productsDispatch(initProductsAction(products))
    }

    return (
        <div className="shopping-list__page">
            <CountProducts />
            <AddNewItem />
            <div className="separator"></div>
            <ShoppingListList />
        </div>
    )
}