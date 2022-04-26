import { useParams } from "react-router-dom";
const Diary = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <div className="DiaryPage">
            <MyHeader headText={`${getStringDate(new Date(data.date))} 記録`}
            leftChild={
                <MyButton text={"<back"} onClick={() => navigate(-1)}/>
            }
            />
        </div>
    )
}

export default Diary;