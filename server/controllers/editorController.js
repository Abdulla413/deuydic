// @ desc Register editor
//@route POST  /api/editor

const registerEditor = (req, res)=>{

res.json({message:"Register Editor"})
}


// @ desc Register editor
//@route POST  /api/editor/login

const loginEditor = (req, res)=>{

    res.json({message:"Login Editor"})
    }



module.exports = {
    registerEditor,
    loginEditor
}