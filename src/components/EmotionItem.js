/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
const EmotionItem = ({emotion_id, emotion_img, emotion_descript, onClick, isSelected}) => {
    return (
        <div className={["EmotionItem", isSelected ? `EmotionItem-on--${emotion_id}` : `EmotionItem-off`].join(" ")} onClick={() => onClick(emotion_id)}>
        <img src={emotion_img} />
        <span>{emotion_descript}</span>
        </div>
    );
};

export default React.memo(EmotionItem);