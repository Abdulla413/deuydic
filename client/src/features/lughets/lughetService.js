import axios from "axios";

const API_URL = "/api/lughet/"

//Add lughet

const addLughet=async(lughetData, token)=>{
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }

    const response= await axios.post(API_URL, lughetData, config)

    return response.data
}

// Delete lughet


const deleteLughet=async(lughetId, token)=>{
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }

    const response= await axios.delete(API_URL + lughetId, config)

    return response.data
}



const lughetService = {
    addLughet,
    deleteLughet
}

export default lughetService