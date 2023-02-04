import axios from "axios";


const getDegrees = async (setdegrees) => {
  try{
    const response = await axios.get('https://resume.redberryinternship.ge/api/degrees')
    setdegrees(response.data)
  }catch(error){
    console.log(error)
  }
};

export default getDegrees
