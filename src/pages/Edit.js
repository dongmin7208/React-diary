import { useSearchParams, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {  DiaryStateContext} from "../App";

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
            );
            console.log(targetDiary)
            if(targetDiary) {
                setOriginData(targetDiary);
            } else {
                navigate("/", {replace: true});
            }
        }
    },[id, diaryList]);

    return (
        <>
            {/* {originData && <DiaryEditor isEdit={true} originData={}} */}
        </>
    )
}

export default Edit;