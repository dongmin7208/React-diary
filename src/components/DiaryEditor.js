const [date, setDate] = useState(getStringDate(new Date()));

const { onCreate} = useContext(DiaryDispatchContext);
const handleClickEmote = (emotion) => {
    setEmotion(emotion);
};
const navigate = useNavigate();

const handleSubmit = () => {
    if (content.length < 1 ){
        return;
    }

    onCreate(date, content, emotion);
    navigate("/", { replace: true });
};

// return (
//     <div className="DiaryEditor">
//         <MyHeader
//          headText={"new diary wirte"}
//          leftChild={
//              <MyButton text={"< back"} onClick={() => navigate(-1)} />
//          }
//          />
// )