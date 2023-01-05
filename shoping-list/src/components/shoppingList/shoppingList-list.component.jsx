import { useContext } from "react";
import { ShoppingListContext } from "../../hooks/context/shoppingList.context";
import strings from '../../utils/strings.json'
import { List } from "../list.components";

export const ShoppingListList = ({ }) => {

    const { products } = useContext(ShoppingListContext)

    const getProductsByCategories = products && products.reduce((x, y) => ((
        x[y.category] = [
            ...(x[y.category] || []),
            {
                product: y.product, count: y.count || 1
            }
        ]
    ), x), {});

    const displayDataElementKey = (productObject) => {
        const count = productObject.count > 1 ? `(${productObject.count})` : ''
        return `${productObject.product} ${count}`
    }

    return (
        <div className="shopping-list__list">
            <h3>{strings.addProducts_message}</h3>
            <div className="list-of-products">
                {getProductsByCategories &&
                    Object.keys(getProductsByCategories).map(key => (
                        <div className="list" key={key}>
                            <h5>{key}</h5>
                            <List
                                data={getProductsByCategories[key]}
                                displayDataElementKey={displayDataElementKey}
                            />
                        </div>
                    ))}
            </div>
        </div>
    )
}