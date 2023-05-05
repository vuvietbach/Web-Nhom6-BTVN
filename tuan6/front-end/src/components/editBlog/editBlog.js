import Form from "../form/form"
import { useParams } from 'react-router-dom';
import non_id_url from "constants/URL";
import axios from "axios";
import { getBlogByID } from "myRedux";
export default function EditBlog() {
    const {id} = useParams();
    const onSubmit = (blog) => {
        axios.put(`${non_id_url}${id}`, blog)
        .then(res => {alert('Sửa bài viết thành công')})
        .catch(err => {alert(`Sửa bài viết thất bại. Log lỗi: ${err}`)})
    }
    return (
        <div>
            <h1>Chỉnh sửa bài viết</h1>
            <Form onSubmit={onSubmit} blog={getBlogByID(id)}/>
        </div>
    )
}