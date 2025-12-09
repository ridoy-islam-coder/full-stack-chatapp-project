import axios from 'axios';


const url = 'http://localhost:5050/api';


export const addUser =async (data) => {
 try {
  const response = await axios.post(`${url}/google-login`, data);
  console.log(response.data);
  
  } catch (error) {
    console.log(error.message);
  }
};