import { useContext } from "react"
import { ShoppingListContext } from "../../hooks/context/shoppingList.context"
import strings from "../../utils/strings.json"

export const CountProducts = () => {
    const { countProducts } = useContext(ShoppingListContext)

    return (
        <label>{strings.sum}: {countProducts} {strings.products}</label>
    )
}