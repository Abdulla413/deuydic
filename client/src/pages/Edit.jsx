import { Link } from "react-router-dom"

function Edit() {
    return (
        <div className=" font-alkatip ">
            <h1 className="text-lg font-bold text-center my-6">لۇغەت تەھرىرلەش ئۈچۈن تىزىملىتىڭ</h1>
            <div className="flex justify-center">
            <Link to="/login">
                
                <li className='block text-center flex-auto w-40 py-2 px-3 leading-tight bg-gray-900   border border-gray-300 text-white mr-1 hover:bg-gray-600 cursor-pointer'>
                    كېرىش
                </li>
            </Link>
            <Link to="/register">
                <li className='block text-center flex-auto w-40 py-2 px-3 leading-tight bg-gray-900 border border-gray-300 text-white mr-1 hover:bg-gray-600 cursor-pointer'>
                    تىزىملىتىش
                </li>
            </Link>
            </div>

        </div>
    )
}

export default Edit