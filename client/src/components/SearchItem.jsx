import { useSelector, useDispatch } from "react-redux"
import { deleteLughet } from "../features/lughets/lughetSlice"
import { toast } from "react-toastify"


function SearchItem({ result }) {

    const { editor } = useSelector((state) => state.auth)

    const dispatch = useDispatch()

    const onDelete = (e) => {


        if (window.confirm("بۇ سۆزنى راستلا ئۆچۈرەمسىز؟")) {
            dispatch(deleteLughet(result._id), toast("بۇ سۆز ئۈچۈرۈلدى"))
        }

    }



    function hanleUtterance(e) {
        e.preventDefault();
        const text = result.deutsch

        const utterance = new SpeechSynthesisUtterance(text);
        if (utterance.text !== text) {
            utterance.text = text
        }

        const synth = window.speechSynthesis;
        const voices = synth.getVoices();
        utterance.voice = voices[2]
        utterance.lang = "de-DE"
        utterance.rate = 1
        utterance.pitch = 1
        utterance.volume = 1
        window.speechSynthesis.speak(utterance);
    }

    const copyHandle = async () => {
        const text = [
            result.deutsch,
            result.uyghur,
            result.verben,
            result.satze,
            result.uysatze,
            "www.tesnim.de"
        ]
       
        if ('clipboard' in navigator) {
            await navigator.clipboard.writeText(text);
            alert('مەزمۇنلار كۆچۈرۈلدى');

        } else {
            return Document.execCommand('copy', true, text);

        }

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

                    <h2 className='font-lora flex mx-3 my-1 text-md'> {result.artikel && <p>{result.artikel}  &nbsp; </p>} {result.deutsch}</h2>
                    <h2 className='px-3 text-md bg-gray-300'> {result.verben && <p>{result.verben}  &nbsp; </p>} </h2>
                    <h2 > {result.satze && <p className='px-3 text-md'>{result.satze}  &nbsp; </p>}
                    </h2>
                    <p className="bg-green-300 h-7 pt-1 px-3 pb-1 font-alkatip font-bold" dir="auto">ئۇيغۇرچە
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={copyHandle} className="inline-block mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>

                    </p>
                    <p className='mx-3 pb-1 mb-2 my-1 pt-1 font-alkatip' id="uyghur" dir="auto"> {result.uyghur}</p>
                    <h2  dir="auto"> {result.uysatze && <p className='px-3 text-md bg-gray-300 font-alkatip rounded-lg pt-1' > {result.uysatze}</p>} </h2>

                    <div>
                        {editor && (<><div className="flex flex-end font-alkatip r-0  md:w-4/5 items-center justify-end text-base md:ml-auto"> {" "}<button className='font-alkatip bg-red-700 text-white px-2 mx-2 rounded' onClick={onDelete} >ئۆچۈرۈش</button>   </div></>)}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchItem