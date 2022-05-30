const asyncHandler =require("express-async-handler")

const Lughets = require("../models/lughetModel")

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

    const lughet=await Lughets.find({deutsch:{$regex:`${q}`, $options:"i"}}).limit(10)
    // .sort({ deutsch: 1 }).collation({ locale: "de", caseLevel: true }) 
    
    res.status(200).json(lughet)
    console.log(lughet, " i am lughet")
})

const addLughets= asyncHandler(async (req, res)=>{
    if(!req.body.deutsch){
        res.status(400)
        throw new Error("تېكىست قوشۇڭ")

    }
    const lughet = await Lughets.create({
        deutsch: req.body.deutsch,
        artikel: req.body.artikel,
        verben: req.body.verben,
        uyghur: req.body.uyghur,
        satze: req.body.satze,
        uysatze: req.body.uysatze
    })
   console.log(req.body)
   res.status(200).json(lughet)
})


module.exports={
    getLughets,
    addLughets
}