import { useDispatch } from 'react-redux';
import { deleteBlogByID } from 'myRedux';
import axios from 'axios';
import non_id_url from 'constants/URL';
import { Link } from 'react-router-dom';
export default function BlogCard({blog}) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        axios.delete(`${non_id_url}${blog._id}`).then(() => {
            dispatch(deleteBlogByID(blog.id));
        });
    }
    return (
        <div class='blog-card'>
            <div class="d-flex flex-row-reverse">
                <div class="dropdown">
                <button class="dropdown-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                    </svg>
                </button>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    {/* <a class="dropdown-item" href="#">Xoá</a>
                    <a class="dropdown-item" href="#">Sửa</a> */}
                    <button type="button" onClick={handleDelete}>Xoá</button>
                    <button type="button"><Link to={`/edit-blog/${blog._id}`}>Sửa</Link></button>
                </div>
            </div>
            </div>
                <div class="px-3 pb-3">
                    <h2>{blog.title}</h2>
                    <hr/>
                    <img class="d-block mb-2 mx-auto" src={blog.image}/>
                    <div class="blog-content">
                        {blog.body}
                    </div>
            </div>
        </div>
    )
}