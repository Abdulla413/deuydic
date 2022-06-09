import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {register, reset} from "../features/auth/authSlice"
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";



function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    rohset:""
  });

  const { name, email, password, password2, rohset } = formData

  const navigate =useNavigate()
  const dispatch = useDispatch()

  const {editor, isLoading, isError, isSuccess, message}=useSelector((state)=>state.auth)

useEffect(()=>{
  if(isError){
    toast.error(message)
  }

  if(isSuccess || editor){
    navigate("/editpage")
  }

  dispatch(reset())

}, [editor, isError, isSuccess, message, navigate, dispatch])  

  const onChange= (e)=>{
    setFormData((prevState)=>({
...prevState,
[e.target.name]:e.target.value 
    }))

    
  }
  
  const onSubmit=(e)=>{
    e.preventDefault()
    if(password !== password2 ){
      toast.error("مەخپى  نۇمۇر ماس كەلمىدى")
    }else{
      const editorData={
        name, email, password, rohset
      }
      dispatch(register(editorData))
    }
    
  }

  if(isLoading){
    return <Spinner/>
  }

  return (
    <>
      <section>
<form onSubmit={onSubmit}>
          <div className="bg-grey-100 min-h-screen flex flex-col font-alkatip">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">تىزىملىتىش</h1>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="name"
                value={name}
                onChange={onChange}
                placeholder="ئىسمى" />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="ئېمىل" />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="مەخپى نۇمۇر" />
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password2"
                value={password2}
                onChange={onChange}
                placeholder="مەخپى نۇمۇرنى جەزىملەش" />
                <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="rohset"
                value={rohset}
                onChange={onChange}
                placeholder="روخسەت كودىنى كىرگۈزۈڭ" />

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-blue-700 text-white hover:bg-green-dark focus:outline-none my-1"
              >ھېساب ئېچىش</button>

            </div>

            <div className="text-grey-dark mt-6">
             تەھرىرلەش ھېسابىڭىز بولسا؟
              <Link className="no-underline border-b border-blue-600 text-blue-800 font-bold px-2" to="/login">

                كىرىڭ

              </Link>
            </div>
            <p dir="rtl" className="py-2 px-2 my-1"><span className="font-bold bg-gray-600 text-white px-2 py-1 ml-2  ">ئەسكەرتىش: </span>ئەگەر سىزدە روخسەت كودى بولمىسا تور باشقۇرغۇچى بىلەن ئالاقىلىشىپ روخسەت كودىغا ئېرىشىڭ </p>
          </div>
        </div>
        </form>


      </section>

    </>
  )
}

export default Register