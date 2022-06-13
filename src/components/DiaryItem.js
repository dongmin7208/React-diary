/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import MyButton from "./MyButton";

const DiaryItem = ({ date, emotion, id, content }) => {
    const navigate = useNavigate();
    const { onRemove } = useContext(DiaryDispatchContext);
    const strDate = new Date(parseInt(date)).toLocaleDateString();

    const goDetail = () => {
        navigate(`/diary/${id}`);
    };

    const goEdit = () => {
        navigate(`/edit/${id}`);
    };

    const handleRemove = () => {
        if (window.confirm("本当に削除しますか？")) {
            onRemove(id);
        }
    };

    return (
        <div className="DiaryItem">
            <div
                className={[
                    "emotion-img-wrapper",
                    `emotion-img-wrapper--${emotion}`,
                ].join(" ")}
                onClick={goDetail}
            >
                <img
                    src={
                        process.env.PUBLIC_URL + `assets/emotion${emotion}.png`
                    }
                />
            </div>
            <div className="info-wrapper" onClick={goDetail}>
                <div className="diary-date">{strDate}</div>
                <div className="diary-content-preview">
                    {content.slice(0, 25)}
                </div>
            </div>
            <div className="btn-wrapper">
                <MyButton text={"edit"} onClick={goEdit} />
                <MyButton
                    text={"Delete"}
                    type={"negative"}
                    onClick={handleRemove}
                />
            </div>
        </div>
    );
};

export default React.memo(DiaryItem);
