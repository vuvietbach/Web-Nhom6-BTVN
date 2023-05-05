import Form from "../form/form"
import axios from "axios";
import non_id_url from "constants/URL";

export default function CreateBlog() {
    function onsubmit(blog) {
        axios.post(non_id_url, blog)
        .then(res => {alert('Tạo bài viết thành công')})
        .catch(err => {alert(`Tạo bài viết thất bại. Log lỗi: ${err}`)})
    }
    return (
        <div>
            <h1>Tạo bài viết</h1>
            <Form onSubmit={onsubmit}/>
        </div>
    )
}