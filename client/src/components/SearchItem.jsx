import { useSelector, useDispatch } from "react-redux"
import {deleteLughet} from "../features/lughets/lughetSlice"


function SearchItem({ result }) {

    const { editor } = useSelector((state) => state.auth)

    const dispatch = useDispatch()

    const onUpdate=()=>{

    }


    function hanleUtterance(e) {
        e.preventDefault();
        const text = result.deutsch
        const utterance = new SpeechSynthesisUtterance(text);
        if (utterance.text !== text) {
            utterance.text = text
          }

        const  synth = window.speechSynthesis;
        const voices = synth.getVoices();
        utterance.voice=voices[2]
        utterance.lang="de-DE"
        utterance.rate=1
        utterance.pitch=1
        utterance.volume=1
        speechSynthesis.speak(utterance);
    }

    return (
        <div>
            <div className='mt-3  w-72'>
                <div className="bg-gray-100 rounded-lg border-t-4 p-1 m-2 mt-0 border-green-500 " key={result._id}>
                    <p className='flex items-center bg-green-300 flex font-dm font-bold text-sm h-7 px-3 pt-1'> Deutsch

                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-6 w-6" onClick={hanleUtterance} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        </svg>
                    </p>

                    <h2 className='font-lora flex mx-3 my-1 text-md'> {result.artikel && <p>{result.artikel}  &nbsp; </p>} {result.deutsch}

                    </h2>
                    <h2 className='px-3 text-md bg-gray-300'> {result.verben && <p>{result.verben}  &nbsp; </p>}
                    </h2>
                    <p className="bg-green-300 h-7 pt-1 px-3 pb-1 font-alkatip font-bold" dir="auto">ئۇيغۇرچە</p>
                    <p className='mx-3 pb-1 mb-2 my-1 pt-1 font-alkatip' dir="auto"> {result.uyghur}</p>

                    <div>
                        {editor && (<><div className="flex flex-end font-alkatip r-0  md:w-4/5 items-center justify-end text-base md:ml-auto"> <button className='bg-red-700 text-white px-2 mx-2 rounded' onClick={onUpdate} >تەھرىرلەش</button>{" "}{" "}<button className='font-alkatip bg-red-700 text-white px-2 mx-2 rounded' onClick={()=>dispatch(deleteLughet(result._id))} >ئۆچۈرۈش</button>   </div></>)}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchItem