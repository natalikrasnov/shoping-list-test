import { useContext, useEffect, useState } from "react"
import { ShoppingListContext } from "../../hooks/context/shoppingList.context"
import { addNewProductAction } from "../../hooks/actions/shoppingList.actions"
import { addNewProduct, getAllCategories } from "../../utils/apiRequests"
import strings from "../../utils/strings.json"
import { ErrorAlert } from "../utils/errorAlert.component"
import { DropDown } from "../utils/dropdown.component"

export const AddNewItem = ({ }) => {
    const { productsDispatch } = useContext(ShoppingListContext)

    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [productInput, setProductInput] = useState("")
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        getCategories()
    }, [])

    const getCategories = async () => {
        const data = await getAllCategories()
        setCategories([...data])
    }

    const addNewItem = async () => {
        if (!productInput || selectedCategory) {
            setErrorMessage(strings.invalidProductInputMessage)
            return
        }
        const newProduct = {
            product: productInput,
            category: selectedCategory
        }
        try {
            await addNewProduct(newProduct)
            productsDispatch(addNewProductAction(newProduct))
        } catch (error) {
            setErrorMessage(error.toString())
        }
    }

    const onInputChange = (event) => {
        setProductInput(event.target.value)
    }

    const closeAlert = () => {
        setErrorMessage(null)
    }

    return (
        <div className="add-new-product" >
            <input placeholder={strings.product} onInput={onInputChange} />
            <DropDown
                placeholder={selectedCategory || strings.category}
                activeElement={selectedCategory}
                data={categories}
                onSelect={setSelectedCategory}
            />
            <button className="add-button" type="button" onClick={addNewItem}>{strings.add}</button>

            {errorMessage && <ErrorAlert message={errorMessage} isShow={!!errorMessage} closeAlert={closeAlert} />}
        </div>
    )
}