import axios from "axios";

const API_URL = "http://localhost:8080";

//face data
const users = [
  {
    id: "1",
    email: "huynhca@gmail.com",
    phoneNumber: "0813436664",
    firstName: "Cai Hoang",
    lastName: "Huynh",
    role: "Admin",
  },
  {
    id: "2",
    email: "nguyenvana@gmail.com",
    phoneNumber: "0123456789",
    firstName: "Nguyen",
    lastName: "Van A",
    role: "Admin",
  },
  {
    id: "3",
    email: "tranvand@gmail.com",
    phoneNumber: "0987654321",
    firstName: "Tran",
    lastName: "Van D",
    role: "User",
  },
  {
    id: "4",
    email: "lethix@gmail.com",
    phoneNumber: "0365897412",
    firstName: "Le",
    lastName: "Thi X",
    role: "User",
  },
  {
    id: "5",
    email: "phamdinhb@gmail.com",
    phoneNumber: "0912345678",
    firstName: "Pham",
    lastName: "Dinh B",
    role: "Editor",
  },
  {
    id: "6",
    email: "truongvanh@gmail.com",
    phoneNumber: "0876543210",
    firstName: "Truong",
    lastName: "Van H",
    role: "Editor",
  },
  {
    id: "7",
    email: "maihoa@gmail.com",
    phoneNumber: "0357913579",
    firstName: "Mai",
    lastName: "Hoa",
    role: "Admin",
  },
  {
    id: "8",
    email: "phungdinhc@gmail.com",
    phoneNumber: "0964827319",
    firstName: "Phung",
    lastName: "Dinh C",
    role: "User",
  },
  {
    id: "9",
    email: "hongnga@gmail.com",
    phoneNumber: "0837149250",
    firstName: "Hong",
    lastName: "Nga",
    role: "User",
  },
  {
    id: "10",
    email: "tranducd@gmail.com",
    phoneNumber: "0946248371",
    firstName: "Tran",
    lastName: "Duc D",
    role: "Editor",
  },
  {
    id: "11",
    email: "nguyenhieuc@gmail.com",
    phoneNumber: "0918237465",
    firstName: "Nguyen",
    lastName: "Hieu C",
    role: "Admin",
  },
  {
    id: "12",
    email: "lengoch@gmail.com",
    phoneNumber: "0857241638",
    firstName: "Le",
    lastName: "Ngoc H",
    role: "User",
  },
  {
    id: "13",
    email: "phamhongn@gmail.com",
    phoneNumber: "0973641258",
    firstName: "Pham",
    lastName: "Hong N",
    role: "User",
  },
  {
    id: "14",
    email: "tranquangb@gmail.com",
    phoneNumber: "0369284715",
    firstName: "Tran",
    lastName: "Quang B",
    role: "Editor",
  },
  {
    id: "15",
    email: "nguyenkimt@gmail.com",
    phoneNumber: "0923476159",
    firstName: "Nguyen",
    lastName: "Kim T",
    role: "Admin",
  },
  {
    id: "16",
    email: "lethik@gmail.com",
    phoneNumber: "0847192365",
    firstName: "Le",
    lastName: "Thi K",
    role: "User",
  },
  {
    id: "17",
    email: "dinhphongn@gmail.com",
    phoneNumber: "0985741629",
    firstName: "Dinh",
    lastName: "Phong N",
    role: "User",
  },
  {
    id: "18",
    email: "hoangxuant@gmail.com",
    phoneNumber: "0374612958",
    firstName: "Hoang",
    lastName: "Xuan T",
    role: "Editor",
  },
  {
    id: "19",
    email: "nguyenthanhx@gmail.com",
    phoneNumber: "0937426185",
    firstName: "Nguyen",
    lastName: "Thanh X",
    role: "Admin",
  },
  {
    id: "20",
    email: "lethik@gmail.com",
    phoneNumber: "0865234791",
    firstName: "Le",
    lastName: "Thi K",
    role: "User",
  },
  {
    id: "21",
    email: "vanchid@gmail.com",
    phoneNumber: "0946231875",
    firstName: "Van",
    lastName: "Chi D",
    role: "User",
  },
  {
    id: "22",
    email: "tranthik@gmail.com",
    phoneNumber: "0829374651",
    firstName: "Tran",
    lastName: "Thi K",
    role: "Editor",
  },
  {
    id: "23",
    email: "lengoch@gmail.com",
    phoneNumber: "0374962138",
    firstName: "Le",
    lastName: "Ngoc H",
    role: "Admin",
  },
  {
    id: "24",
    email: "phamthih@gmail.com",
    phoneNumber: "0951842736",
    firstName: "Pham",
    lastName: "Thi H",
    role: "User",
  },
  {
    id: "25",
    email: "duongvanq@gmail.com",
    phoneNumber: "0862497315",
    firstName: "Duong",
    lastName: "Van Q",
    role: "User",
  },
  {
    id: "26",
    email: "thithuc@gmail.com",
    phoneNumber: "0931746285",
    firstName: "Thi",
    lastName: "Thuc",
    role: "Editor",
  },
  {
    id: "27",
    email: "nguyentuana@gmail.com",
    phoneNumber: "0847351962",
    firstName: "Nguyen",
    lastName: "Tuan A",
    role: "Admin",
  },
  {
    id: "28",
    email: "hoangvand@gmail.com",
    phoneNumber: "0974631825",
    firstName: "Hoang",
    lastName: "Van D",
    role: "User",
  },
  {
    id: "29",
    email: "trangthih@gmail.com",
    phoneNumber: "0863251947",
    firstName: "Trang",
    lastName: "Thi H",
    role: "User",
  },
  {
    id: "30",
    email: "dinhvanb@gmail.com",
    phoneNumber: "0917482536",
    firstName: "Dinh",
    lastName: "Van B",
    role: "Editor",
  },
  {
    id: "31",
    email: "nguyenhuyd@gmail.com",
    phoneNumber: "0936175248",
    firstName: "Nguyen",
    lastName: "Huy D",
    role: "Admin",
  },
  {
    id: "32",
    email: "thimaih@gmail.com",
    phoneNumber: "0857314926",
    firstName: "Thi",
    lastName: "Mai H",
    role: "User",
  },
  {
    id: "33",
    email: "levanb@gmail.com",
    phoneNumber: "0976482315",
    firstName: "Le",
    lastName: "Van B",
    role: "User",
  },
  {
    id: "34",
    email: "phamthit@gmail.com",
    phoneNumber: "0862957314",
    firstName: "Pham",
    lastName: "Thi T",
    role: "Editor",
  },
  {
    id: "35",
    email: "thimyv@gmail.com",
    phoneNumber: "0915342976",
    firstName: "Thi",
    lastName: "My V",
    role: "Admin",
  },
  {
    id: "36",
    email: "hoangvanl@gmail.com",
    phoneNumber: "0936284715",
    firstName: "Hoang",
    lastName: "Van L",
    role: "User",
  },
  {
    id: "37",
    email: "nguyenvanq@gmail.com",
    phoneNumber: "0874612935",
    firstName: "Nguyen",
    lastName: "Van Q",
    role: "User",
  },
  {
    id: "38",
    email: "tranhoaih@gmail.com",
    phoneNumber: "0854719263",
    firstName: "Tran",
    lastName: "Hoai H",
    role: "Editor",
  },
  {
    id: "39",
    email: "huyenb@gmail.com",
    phoneNumber: "0916287435",
    firstName: "Huyen",
    lastName: "B",
    role: "Admin",
  },
  {
    id: "40",
    email: "tranminhn@gmail.com",
    phoneNumber: "0936471528",
    firstName: "Tran",
  },
];

//get all user
export const getAllUser = async () => {
  try {
    // const response = await axios.get(API_URL + "/users");
    // return response.data;
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

//tao nguoi dung moi
export const createUser = async (userData) => {
  try {
    const response = await axios.post(API_URL + "/create", userData);
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
      `${API_URL + "/edit"}/${userId}`,
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
    const response = await axios.delete(`${API_URL + "/delete"}/${userId}`);
    return response.data;
  } catch (error) {
    console.log(`Error deleting user with ID ${userId}:`, error);
    throw error;
  }
};
