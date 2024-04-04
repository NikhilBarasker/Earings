import axios from 'axios';

const URL = ''

export const varifyUser = async (info)=>{
  try {
    console.log(info)
    return await axios.post(`${URL}/varify`, info);
  } catch (error) {
    console.log(`Occured error while varifing ${error}`)
  }
}
export const addUser = async (info)=>{
  try {
    console.log(info);
    return await axios.post(`${URL}/varify`, info);
  } catch (error) {
    console.log(`Occured error while varifing ${error}`)
  }
}
