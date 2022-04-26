import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import EmotionItem from "./EmotionItem";

import MyButton from "./MyButton";
import MyHeader from "./MyHeader";

import { getStringDate } from "../util/date";
import { emotionList } from "../util/emotionList";

const DiaryEditor = ({isEdit, originData}) => {

  const contentRef = useRef();
  const [content, setContent] = useState("");
  const [emotion, setEmotion] = useState(3);
  const [date, setDate] = useState(getStringDate(new Date()));

  const navigate = useNavigate();
  const {onCreate, onEdit, onRemove} = useContext(DiaryDispatchContext)

  const handleClickEmote = useCallback((emotion) => {
    setEmotion(emotion);
  },[]);

  const handleSubmit = () =>{
    if(content.length < 1){
      contentRef.current.focus();
      return;
    }

    if(window.confirm(isEdit ? "日記を修正しますか・" : "新しい日記を作成しますか？")){
      if(!isEdit){
        onCreate(date, content, emotion);
      }else{
        onEdit(originData.id, date, content, emotion);
      }
    };

    navigate(`/`,{replace:true});
  }

  const handleRemove = () => {
    if(window.confirm("削除しますか")){
      onRemove(originData.id);
      navigate('/', {replace:true})
    }
  }

  useEffect(() => {
    if(isEdit){
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setEmotion(originData.emotion);
      setContent(originData.content);
    }
  },[])


  return (
    <div className="DiaryEditor">
      <MyHeader 
        headText = {isEdit ? "日記を修正" : "新しい日記を作る"}
        leftChild = {
          <MyButton text={'< back'} onClick={()=>navigate(-1)} />
        }
        rightChild = {
          isEdit && (
            <MyButton text={'削除'} type={"negative"} onClick={handleRemove} />
          )
        }
      />
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input-box">
            <input className="input-date" value={date} onChange={(e) => setDate(e.target.value)} type="date" />
          </div>
        </section>
        <section>
          <h4>오늘의 감정</h4>
          <div className="input-box emotion-list-wrapper">
            {emotionList.map((it) => (
              <EmotionItem key={it.emotion_id} {...it} onClick={handleClickEmote} isSelected={it.emotion_id === emotion}/>
            ))}
          </div>
        </section>
        <section>
          <h4>오늘의 일기</h4>
          <div className="input-box, text-wrapper">
            <textarea placeholder="今日はどうだったの?" ref={contentRef} value={content} onChange={(e)=>setContent(e.target.value)}/>
          </div>
        </section>
        <section>
          <div className="control-box">
              <MyButton text={"キャンセル"} onClick={()=>navigate(-1)} />
              <MyButton text={"完了"} type={"positive"} onClick={handleSubmit}/>
          </div>
        </section>
      </div>
      
    </div>
  );
}

export default DiaryEditor;