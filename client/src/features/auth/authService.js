import axios from "axios"

const API_URL = "/api/editor/"

// Register editor

const register =async (editorData)=>{

const response = await axios.post(API_URL, editorData)

if(response.data){
    localStorage.setItem("editor", JSON.stringify(response.data))
}

return response.data

}

// Login user

const login =async (editorData)=>{

    const response = await axios.post(API_URL + "login", editorData)
    
    if(response.data){
        localStorage.setItem("editor", JSON.stringify(response.data))
    }
    
    return response.data
    
    }

// Logout editor

const logout = ()=>{
    localStorage.removeItem("editor")
}

const authService = {
    register,
    logout,
    login
}



export default authService