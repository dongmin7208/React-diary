import { useSearchParams } from "react-router-dom";

const Edit = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id')
    console.log("id : ", id)
    return (
        <div>
            <h1>Edit</h1>
            <p>ここはEditです。</p>
        </div>
    )
}

export default Edit;