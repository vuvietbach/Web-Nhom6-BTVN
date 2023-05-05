import { Link } from "react-router-dom";
export default function SideBar() {
    return (
        <div class="text-white bg-dark side-bar p-3">
        <h3>Blog nhóm 6</h3>
        <hr/>
        <ul class="nav nav-pills flex-column">
            <li class="nav-item">
                <Link to="/">Xem danh sách bài viết</Link>
            </li>
            <li class="nav-item">
                <Link to="/create-blog">Tạo bài viết</Link>
            </li>
        </ul>
    </div>
    )
}