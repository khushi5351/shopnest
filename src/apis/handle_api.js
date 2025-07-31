import axios from "axios";
import { CATEGORY_URL, ORDER_URL, URL, USER_URL } from "./api";

export async function addProduct(product) {
    try {
      const res=await axios.post(URL,product)  
      return res
    } catch (error) {
        console.log(error);
        
    }
}
export async function addCategory(category) {
    try {
      const res=await axios.post(CATEGORY_URL,category)  
      return res
    } catch (error) {
        console.log(error);
        
    }
}
export async function getProduct() {
    try {
      const res=await axios.get(URL)  
      console.log(res);
      return res
    } catch (error) {
        console.log(error);
        
    }
}
export async function deleteProduct(id) {
  await axios.delete(`${URL}/${id}`)
}

export async function getOrders() {
  try {
    const res = await axios.get(ORDER_URL);
    return res.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
}

export const fetchUsers = async () => {
  try {
    const res = await axios.get(USER_URL);
    console.log(res.data);
    
    return res.data;
  } catch (err) {
    console.error("Error fetching users:", err);
    return [];
  }
};



export const deleteCategory = async (id) => {
  try {
    await axios.delete(`${CATEGORY_URL}/${id}`);
  } catch (err) {
    console.error("Failed to delete category", err);
  }
};

export  async function getCategories() {
  const res = await axios.get(CATEGORY_URL);
  return res.data;
};

export async function addUser(user) {
  try {
    const res = await axios.post(`${USER_URL}`);
    console.log(res);
    alert("Register successfully");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
export async function getUser(email, password) {
  try {
    const res = await axios.get(`${USER_URL}?email=${email}&password=${password}`);

    if (res.data.length === 1) {
      alert("Login successful");
      sessionStorage.setItem("userId", res.data[0].id);
      return res.data[0];
    } else {
      alert("Invalid email or password");
      return null;
    }
  } catch (error) {
    console.log("Login Error:", error);
    alert("Server error");
    return null;
  }
}
// import axios from 'axios';

export const updateProduct = (id, data) => axios.put(`${URL}/${id}`, data);

export const updateCategory = (id, data) => {
  return axios.put(`${CATEGORY_URL}/${id}`, data);
};

export async function placeOrderrr (order) {
  try {
    const res=await axios.post(ORDER_URL,order)
    return res
  } catch (error) {
    console.log(error);
    
  }
}