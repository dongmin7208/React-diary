import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import { useContext, useEffect, useState } from "react";
import DiaryEditor from "../components/DiaryEditor";

const Edit = () => {

    const [originData, setOriginData] = useState();
    const navigate = useNavigate();
    const { id } = useParams();

    console.log("id : ", id)
    const diaryList = useContext(DiaryStateContext);
    console.log(id);
    console.log(diaryList);

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
                navigate("/", {replace: true});
            }
        }
    },[id, diaryList]);

    return (
        <div>
            {originData && <DiaryEditor isEdit={true} originData={originData}/>}
        </div>
    )
}

export default Edit;