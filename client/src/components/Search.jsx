import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { toast } from "react-toastify"
import SearchItem from './SearchItem'



export default function Search() {


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
        }))
        .catch((err) => {
          console.log(err)
          toast.error(err)
        })
    }

  }, [searchTerm])


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

        <section className='mt-3  w-72'>

          {searchResults.length>0 && (<div>
            {searchResults.map((result)=>(<SearchItem key={result._id } result={result}/>) )}
          </div>)}
        </section>

      </div>

    </div>

  )
}



