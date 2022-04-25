import { useSearchParams, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import {  DiaryStateContext} from "../App";

const Edit = () => {
    const navigate = useNavigate();
    const { id} = useParams();
    console.log("id : ", id)
    const diaryList = useContext(DiaryStateContext);
    console.log(id);
    console.log(diaryList);

    useEffect(()=>{
        if (diaryList.length >= 1) {
            const targetDiary = diaryList.find(
                (it) => parseInt(it.id) === parseInt(id) 
            );
            console.log(targetDiary)
        }
    },[id, diaryList]);

    return (
        <div>
            <h1>Edit</h1>
            <p>ここはEditです。</p>
        </div>
    )
}

export default Edit;