import axios from "axios";

const api_url = process.env.REACT_APP_API_URL || "http://localhost:8080";

//get all user
export const getAllUser = async () => {
  try {
    const response = await axios.get(api_url + "/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

//tao nguoi dung moi
export const createUser = async (userData) => {
  try {
    const response = await axios.post(api_url + "/users/create", userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

//chinh sua nguoi dung moi
export const updateUser = async (userId, updatedUserData) => {
  try {
    const response = await axios.put(
      `${api_url + "/users/update"}/${userId}`,
      updatedUserData
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating user with ID ${userId}:`, error);
    throw error;
  }
};

//xoa nguoi dung
export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(
      `${api_url + "/users/delete"}/${userId}`
    );
    return response.data;
  } catch (error) {
    console.log(`Error deleting user with ID ${userId}:`, error);
    throw error;
  }
};

//upload hinh anh user
export const uploadImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const response = await axios.post(api_url + "/users/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error upload image:", error);
    throw error;
  }
};
