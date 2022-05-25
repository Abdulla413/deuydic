import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'


export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [error, setError] = useState();

useEffect( ()=>{
    if (searchTerm === '') {
        setSearchResults([])
      } else {
fetch(`https://deuydic.herokuapp.com/api/lughet/?q=${searchTerm}`)
.then(res=>{
    if(!res.ok){
      return setError({error:true})
    }
    return res.json() 
})
.then((data=>{
     setSearchResults(data) 
     console.log(data)    
}))
.catch((err)=>{
    console.log(err)
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
         {error && <p>Oops, Songthing went wrong</p>}
      <div className='container mx-auto flex flex-col items-center justify-center'>
        <div className='relative text-gray-600 w-72'>
          <form>
            <input
              type='search'
              name='search'
              id='search'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='form-control bg-white h-10 px-5 pr-10 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none w-72'
              placeholder='گىرمانچە سۆز كىرگۈزۈڭ'
              dir="auto"
            />
            <FaSearch className='absolute top-0 right-0 text-black mt-3 mr-4' />
          </form>
        </div>
        <div className='mt-3  w-72'>
            {searchResults.map((result)=>(
                
            <div className="bg-gray-100 rounded-lg border-t-4 border-green-500 " key={result._id}>
                <p className='bg-green-300 flex font-dm font-bold text-sm h-7 px-3 pt-1'>Deutsch
                {/* <img
                            className="ml-3 mt-1 w-4 h-4"
                            src="/audio.png"
                            alt=""
                            onClick={hanleUtterance}
                        /> */}
            
                
                </p>
                <h2 className='font-lora flex mx-3 my-1 text-md'> {result.artikel && <p>{result.artikel}  &nbsp; </p>} {result.deutsch}
                
                
                </h2>
                <p className="bg-green-300 h-7 pt-1 px-3 pb-1 font-alkatip font-bold" dir="auto">ئۇيغۇرچە</p>
                <p className='mx-3 pb-1 mb-2 my-1 pt-1 font-alkatip' dir="auto"> {result.uyghur}</p>
            </div>))}
 
        </div>
      </div>

      


     
     </div> 

  )
}



