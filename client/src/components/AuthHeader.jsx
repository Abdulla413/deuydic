import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout, reset } from "../features/auth/authSlice"



export default function AuthHeader() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { editor } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate("/")
    }





    return (
        <header className="bg-blue-700 text-gray-100 shadow w-full">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">

                {editor ? (<div className="flex flex-wrap  font-alkatip  md:w-4/5 items-center justify-end text-base md:ml-auto">

                    <button to="/login" className="cursor-pointer bg-blue-900 rounded px-2 py-1 font-alkatip hover:text-indigo-300" onClick={onLogout} >
                        چىكىنىش
                    </button>
                    <p className="px-2 uppercase ">{editor.name}</p>

                    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                    </div>

                </div>) : (<>

                    <nav className="flex flex-wrap  font-alkatip  md:w-4/5 items-center justify-end text-base md:ml-auto">
                        <Link to="/login" className="cursor-pointer uppercase hover:text-indigo-300" >
                            كىرىش
                        </Link>
                        <Link to="/register" className=" mx-5 cursor-pointer uppercase hover:text-indigo-300">
                            تىزىملىتىش
                        </Link>
                    </nav>
                </>)}

            </div>
        </header>
    )
}


