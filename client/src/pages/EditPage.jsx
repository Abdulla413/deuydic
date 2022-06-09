import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EditForm from "../components/EditForm";


function EditPage() {

  const navigate = useNavigate()

  const { editor } = useSelector((state) => state.auth)

  useEffect(() => {

    if (!editor) {
      navigate("/login")
    }

  }, [editor, navigate])



  return (
    <>
      <h1 className="mt-6 text-2xl text-center font-alkatip uppercase"> !ئەپەندىم خوش كەلدىڭىز {editor.name} </h1>
      <EditForm/>

      
    </>
  )
}

export default EditPage