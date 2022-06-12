import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { reset } from "../features/lughets/lughetSlice"
import Spinner from "../components/Spinner";
import { addLughet } from "../features/lughets/lughetSlice";



function EditForm() {

  const [formData, setFormData] = useState({
    deutsch: "",
    plural:"",
    artikel: "",
    verben: "",
    uyghur: "",
    satze: "",
    uysatze: "",
  })

  const { deutsch, artikel, verben, uyghur, satze, uysatze } = formData

  const navigate =useNavigate()
  const dispatch = useDispatch()

  const {isLoading, isError, isSuccess, message}=useSelector((state)=>state.lughet)
  

useEffect(()=>{

  if(isError){
    toast.error(message)
  }

  if(isSuccess){
    navigate("/editpage")
    toast("سۆز قوشۇلدى")
  }

  dispatch(reset())

}, [isLoading, isError, isSuccess, message, navigate, dispatch])  



  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }



  const onSubmit = (e) => {
    e.preventDefault()
    const lughetData={deutsch, artikel, verben, uyghur, satze, uysatze}
    dispatch(addLughet(lughetData))
    setFormData({ 
    deutsch: "",
    plural:"",
    artikel: "",
    verben: "",
    uyghur: "",
    satze: "",
    uysatze: ""})
  }

  if(isLoading){
    return <Spinner/>
  }



  return (
    <section>
      <form onSubmit={onSubmit}>
        <div className="bg-grey-200 min-h-screen flex flex-col font-alkatip">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-2xl text-center">لۇغەتكە سۆزلۈك قوشۇڭ</h1>

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="deutsch"
                value={deutsch}
                onChange={onChange}
                placeholder="  گېرمانچە سۆز" />
              <textarea
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="uyghur"
                value={uyghur}
                onChange={onChange}
                placeholder="ئۇيغۇرچە تەرجىمىسى" />
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="artikel"
                value={artikel}
                onChange={onChange}
                placeholder="Artikel" />
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="verben"
                value={verben}
                onChange={onChange}
                placeholder="verben" />

              <textarea
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="satze"
                value={satze}
                onChange={onChange}
                placeholder="Deutscher Satz" />
              <textarea
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="uysatze"
                value={uysatze}
                onChange={onChange}
                placeholder="ئۇيغۇرچە جۈملە" />

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-blue-700 text-white hover:bg-green-dark focus:outline-none my-1"
              >تاپشۇرۇش</button>

            </div>

            <div className="text-grey-dark mt-6">
              <p dir="rtl"><span className="bg-gray-800 text-white px-2 ">ئەسكەرتىش</span> گىرمانچە سۆزلۈك بىلەن ئۇيغۇرچە تەرجىمىسىنى بوش قالدۇرۇشقا بولمايدۇ، باشقا ئورۇنلار ئەھۋالغا ئاساسەن تولدۇرۇلسا ياكى بوش قالسا بولىدۇ</p>

            </div>
          </div>
        </div>
      </form>


    </section>
  )
}

export default EditForm