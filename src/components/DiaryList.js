import React,{useState} from "react"
import {useNavigate} from "react-router-dom"
import DiaryItem from "./DiaryItem"
import MyButton from "./MyButton"

const sortOptionList = [
    {value: "latest", name:"new"},
    {value : "oldest", name:"old"},
]

const filterOptionList = [
    {value:"all", name:"all emotion"},
    {value:"good", name:"good emotion"},
    {value:"bad", name:"all bed"},
]

const ControlMenu = ({value, onChange, optionList,e}) => {
    return(
        <select className="ControlMenu" value={value} onChange={(e.target.value)}>
            {optionList.map((it, index) => (
                <option key={index} value={it.value}>
                    {it.name}
                </option>
            ))}
        </select>
    )
}

const DiaryList = ({DiaryList}) => {
    const navigate = useNavigate()

    const [sortType, setSortType] = useState("latest")
    const [filter, setFilter] = useState("all")

    const filterCallback = (item) => {
        if (filter === "good"){
            return parseInt(item.emotion) >= 3
        }
        else{
            return parseInt(item.emotion) < 3
        }
    }

    const getProcessedDiaryList = () => {
        const compare = (a,b) => {
            if(sortType === "latest") {
                return parseInt(b.date) - parseInt(a.date)
            }
            else{
                return parseInt(a.date) - parseInt(b.date)
            }
        }

        const copyList = JSON.parse(JSON.stringify(DiaryList))
        const filteredList = filter === 'all' ? copyList : copyList.filter((it) => filterCallback(it))
        const sortedList = filteredList.sort(compare)
        return sortedList
    }

    return (
        <div className="DiaryList">
            <div className="menu-wrapper">
                <div className="left-col">
                    <ControlMenu value={sortType} onChange={setSortType} optionList={sortOptionList}/>
                    <ControlMenu value={filter} onChange={setFilter} optionList={filterOptionList}/>
                </div>
                <div className="right-col">
                    <MyButton type={"positive"} text={"new Diary"} onClick={()=>navigate("/new")}/>
                </div>
            </div>
            {getProcessedDiaryList().map((it) =>
                <DiaryItem key={it.id} {...it} />
            )}
        </div>
    )
    DiaryList.defalutProps = {
        diaryList : [],
    }
}
export default DiaryList