import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";

const Edit = () => {

    const[originData, setOriginData] = useState();
    const diaryList = useContext(DiaryStateContext);
    
    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(()=>{
        if (diaryList.length >= 1) {
            const targetDiary = diaryList.find(
                (it) => parseInt(it.id) === parseInt(id) 
            )
            console.log(targetDiary)
            if(targetDiary) {
                setOriginData(targetDiary);
            } else {
                alert("存在していない日記です。")
                navigate('/', {replace : true});
            }
        }
    },[id, diaryList, navigate])

    return (
        <div>
            {originData && <DiaryEditor isEdit={true} originData={originData} />}
        </div>
    )
}

export default Edit;