import { DiaryDispatchContext } from "../App";
import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";
import React,{useContext} from "react";

const DiaryItem = ({date, emotion, id, content}) =>{
    const navigate = useNavigate()

    const{onRemove} = useContext(DiaryDispatchContext)
    const strDate = new Date(parseInt(date)).toLocaleDateString()

    const goDetail = () => {
        navigate(`/diary/${id}`)
    }

    const goEdit = () => {
        navigate(`/edit/${id}`);
    }

    const handleRemove = () => {
        if(window.confirm("本当に削除しますか？")){
            onRemove(id);
        }
    }

    return (
        <div className="DiaryItem">
            <div className={["emotion-img-wrapper", `emotion-img-wrapper--${emotion}`].join(" ")} onClick={goDetail}>
                <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`}/>
            </div>
            <div className="info-wrapper" onClick={goDetail}>
                <div className="diary-date">{strDate}</div>
                <div className="diary-content-preview">{content.slice(0,25)}</div>
            </div>
            <div className="btn-wrapper">
                <MyButton text={"edit"} onClick={goEdit} />
                <MyButton text={"Delete"} type={navigate} onClick={handleRemove} />
            </div>
        </div>
    )
}





export default DiaryItem;