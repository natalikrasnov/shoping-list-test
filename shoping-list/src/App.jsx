import "../node_modules/bootstrap/scss/bootstrap.scss"
import './styles/_main.style.scss'

import { Header } from "./components/header.component"
import { ShoppingList } from "./pages/shopping-list.component"
import ShoppingListContextProvider from "./hooks/context/shoppingList.context"

import strings from './utils/strings.json'

function App() {

  //If we had more than one page then the title would come from the router data
  const headerTitle = strings["shoppingList_title"]

  return (
    <>
      <Header title={headerTitle} />
      <ShoppingListContextProvider>
        <ShoppingList />
      </ShoppingListContextProvider>
    </>
  )
}

export default App
