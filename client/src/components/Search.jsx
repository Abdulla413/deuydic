import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useSelector } from "react-redux"
import { Navigate } from 'react-router-dom'
import { toast } from "react-toastify"
import axios from 'axios'



export default function Search() {
  const {editor} = useSelector((state) => state.auth)

  console.log(editor, "i ma editor in search")




  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])


  useEffect(() => {
    if (searchTerm === '') {
      setSearchResults([])
    } else {
      fetch(`/api/lughet/?q=${searchTerm}`)
        .then(res => {
          if (!res.ok) {
            toast.error("خاتالىق بايقالدى")
          }
          return res.json()
        })
        .then((data => {
          setSearchResults(data)
          console.log(data)
        }))
        .catch((err) => {
          console.log(err)
          toast.error(err)
        })
    }

  }, [searchTerm])

  // function hanleUtterance (e) {
  //     e.preventDefault();
  //     const text = searchResults.map((result)=>
  //         (result.deutsch)
  //     );
  //     console.log(text, "i am text");
  //     const utterance = new SpeechSynthesisUtterance(text);
  //     utterance.lang = "de-DE";
  //     speechSynthesis.speak(utterance);
  // }

  return (


    <div className='relative p-4'>
      <div className='container mx-auto flex flex-col items-center justify-center'>
        <div className='relative text-gray-600 w-72'>
          <form>
            <input
              type='search'
              name='search'
              id='search'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }}
              className='form-control font-alkatip  bg-white h-10 px-5 pr-10 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none w-72'
              placeholder='گىرمانچە سۆز كىرگۈزۈڭ'
              dir="auto"
            />
            <FaSearch className='absolute top-0 right-0 text-black mt-3 mr-4' />
          </form>
        </div>
        <div className='mt-3  w-72'>
          {searchResults.map((result) => (

            <div className="bg-gray-100 rounded-lg border-t-4 p-1 m-2 mt-0 border-green-500 " key={result._id}>
              <p className='bg-green-300 flex font-dm font-bold text-sm h-7 px-3 pt-1'> Deutsch
              </p>

              <h2 className='font-lora flex mx-3 my-1 text-md'> {result.artikel && <p>{result.artikel}  &nbsp; </p>} {result.deutsch}


              </h2>
              <h2 className='px-3 text-md bg-gray-300'> {result.verben && <p>{result.verben}  &nbsp; </p>}
              </h2>
              <p className="bg-green-300 h-7 pt-1 px-3 pb-1 font-alkatip font-bold" dir="auto">ئۇيغۇرچە</p>
              <p className='mx-3 pb-1 mb-2 my-1 pt-1 font-alkatip' dir="auto"> {result.uyghur}</p>

              <div>
                {editor && (<><div className="flex flex-end font-alkatip r-0  md:w-4/5 items-center justify-end text-base md:ml-auto"> <button className='bg-red-700 text-white px-2 mx-2 rounded'>تەھرىرلەش</button>{" "}{" "}<button className='font-alkatip bg-red-700 text-white px-2 mx-2 rounded'>ئۆچۈرۈش</button>   </div></>)}

              </div>
            </div>

          ))}


        </div>
      </div>

    </div>

  )
}



