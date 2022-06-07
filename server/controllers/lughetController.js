const asyncHandler =require("express-async-handler")

const Lughet = require("../models/lughetModel")
const Editor = require("../models/editorModel")

const getLughets= asyncHandler(async (req, res)=>{

    
    let q=req.query.q;

//     const agg=[
//             {
//                 "$search":{
//                     "autocompelet":{
//                         "query":`${q}`,
//                         "path":"deutsch",
//                         "fuzzy":{
//                             "maxEdits":2
//                         }
//                     }
//                 }
//             }
//         ]


// const lughet = await Lughets.aggregate(agg).toArray();

    const lughets=await Lughet.find({deutsch:{$regex:`${q}`, $options:"i"}}).limit(10)
    // .sort({ deutsch: 1 }).collation({ locale: "de", caseLevel: true }) 
    
    res.status(200).json(lughets)
    console.log(lughets, " i am lughet")
})

const addLughets= asyncHandler(async (req, res)=>{
    if(!req.body.deutsch){
        res.status(400)
        throw new Error("تېكىست قوشۇڭ")
    }
    const lughets = await Lughet.create({
        deutsch: req.body.deutsch,
        artikel: req.body.artikel,
        verben: req.body.verben,
        uyghur: req.body.uyghur,
        satze: req.body.satze,
        uysatze: req.body.uysatze,
        editor:req.editor.id
    })
   res.status(200).json(lughets)
})



const updateLughets= asyncHandler(async (req, res)=>{
    console.log(req.body)
    console.log(req.headers, "i am headers")
    

    const lughets = await Lughet.findById(req.params.id)
    if(!lughets){
        res.status(400)
        throw new Error("سۆز تېپىلمىدى")
    }

   
    if(!req.editor){
        res.status(401)
        throw new Error("Editor not found")
    }

    const updatedLughets = await Lughet.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
//    console.log(req.body)
   res.status(200).json(updatedLughets)
})

const deleteLughets= asyncHandler(async (req, res)=>{
    const lughets=await Lughet.findById(req.params.id)

    if(!lughets){
        res.status(400)
        throw new Error("سۆزلۈك تېپىلمىدى")
    }
await lughets.remove()
   res.status(200).json(req.params.id)
})



module.exports={
    getLughets,
    addLughets,
    updateLughets,
    deleteLughets
}