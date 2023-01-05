import axios from "axios";

const baseUrl = "http://localhost:3000";

export async function getAllProducts() {
  try {
    const response = await axios.get(baseUrl + "/products");
    return response.data;
  } catch (error) {
    console.error("error on get from server:", error);
    return [];
  }
}

export async function addNewProduct(product) {
  try {
    const response = await axios.post(baseUrl + "/products/new", product);
    return response.data;
  } catch (error) {
    console.error("error on get from server:", error);
    throw Error(error?.response?.data?.message);
  }
}

export async function getAllCategories() {
  try {
    const categories = await axios.get(baseUrl + "/categories");
    return categories.data;
  } catch (error) {
    console.error("error on get categories from server:", error);
    //for production=> on production server is down
    return ["מוצרי נקיון", "גבינות", "ירקות ופירות", "בשר ודגים", "מאפים"];
  }
}
