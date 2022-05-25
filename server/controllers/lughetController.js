const asyncHandler =require("express-async-handler")

const Lughets = require("../models/lughetModel")

const getLughets= asyncHandler(async (req, res)=>{

    
    let q=req.query.q;

    // console.log(q, " i am query")

    const lughet=await Lughets.find({"deutsch":{$regex:`${q}`, $options:"i"}}).limit(10).sort({ deutsch: 1 }).collation({ locale: "en", caseLevel: true }) 
    
    res.status(200).json(lughet)
})

const addLughets= asyncHandler(async (req, res)=>{
    if(!req.body.deutsch){
        res.status(400)
        throw new Error("تېكىست قوشۇڭ")

    }
    const lughet = await Lughet.create({
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