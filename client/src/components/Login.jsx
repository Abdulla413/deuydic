
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";


function Login() {
  const [formData, setFormData] = useState({
    
    email: "",
    password: ""
    
  });

  const { email, password} = formData

  const onChange= (e)=>{
    setFormData((prevState)=>({
...prevState,
[e.target.name]:e.target.value 
    }))

    
  }
  
  const onSubmit=(e)=>{
    e.preventDefault()

  }

  return (
    <>
      <section>
<form onSubmit={onSubmit}>
          <div className="bg-grey-200 min-h-screen flex flex-col font-alkatip">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">كىرىش</h1>

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

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-blue-700 text-white hover:bg-green-dark focus:outline-none my-1"
              >كىرىش</button>

            </div>

            <div className="text-grey-dark mt-6">
             تەھرىرلەش ھېسابىڭىز بولمىسا؟
              <Link className="no-underline border-b border-blue-600 text-blue-800 font-bold px-2" to="/login">

                تىزىملىتىڭ

              </Link>
            </div>
          </div>
        </div>
        </form>


      </section>

    </>
  )
}

export default Login