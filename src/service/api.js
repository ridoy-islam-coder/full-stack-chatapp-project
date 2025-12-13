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




export const getUsers =async () => {
 try {
   const response = await axios.get(`${url}/ProfileDetails`);
    return response.data;

  } catch (error) {
    console.log(error.message);
  }
};



export const setConversation=async(data)=>{
  try{
    await axios.post(`${url}/conversation/add`,data);
  }catch(error){
    console.log(error.message);
  }
}


export const getConversation=async(data)=>{
  try{
  let response= await axios.post(`${url}/conversation/get`,data);
   return response.data;
  }catch(error){
    console.log(error.message);
  }
}