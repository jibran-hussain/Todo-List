import axios from 'axios'

export const load=async()=>{
    try{
        const response=await axios.get(`http://localhost:8000/api/list`);
        const {rows}= response.data;
        return {rows};

    }catch(error){
        console.log(error)
    }
}