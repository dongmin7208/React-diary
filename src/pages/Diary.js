import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import MyButton from "../components/MyButton";
import { getStringDate } from "../util/date";
import { emotionList } from "../util/emotionList";
import MyHeader from "../components/MyHeader";

const Diary = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState();
    const diaryList = useContext(DiaryStateContext);
    console.log(id)

    useEffect(()=> {
        if(diaryList.length >= 1){
            const targetDiary = diaryList.find(
                (it) => parseInt(it.id) === parseInt(id)
            );

            if(targetDiary) {
                setData(targetDiary);
            }else{
                alert("存在してない日記です。")
                navigate("/", {replace : true})
            }
        }
    },[id, diaryList])
    if(!data){
        return <div className="DiaryPage">Loding...</div>
    }else{
        const currentEmotionData = emotionList.find(
            (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
        );
        console.log(currentEmotionData);
    

    return (
        <div className="DiaryPage">
          <MyHeader 
            headText={`${getStringDate(new Date(data.date))} 기록`} 
            leftChild = {<MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)}/>}
            rightChild = {<MyButton text={"수정하기"} onClick={() => navigate(`/edit/${data.id}`)} />}
          />
          <article>
            <section>
              <h4>오늘의 감정</h4>
              <div className={["diary-img-wrapper", `diary-img-wrapper--${data.emotion}`].join(" ")}>
                <img src={currentEmotionData.emotion_img} />
                <div className="emotion-descript">
                  {currentEmotionData.emotion_descript}
                </div>
              </div>
            </section>
            <section>
              <h4>오늘의 일기</h4>
              <div className="diary-content-wrapper">
                <p>{data.content}</p>
              </div>
            </section>
          </article>
        </div>
      )
    }
  }
  
  export default Diary;