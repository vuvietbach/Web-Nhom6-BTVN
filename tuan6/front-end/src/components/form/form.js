import React, { useState } from 'react';

export default function Form({onSubmit, blog}) {
    const [title, setTitle] = useState(blog?.title || '');
    const [body, setBody] = useState(blog?.body || '');
    const [image, setImage] = useState(blog?.image || '');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({title, body, image});
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div class="form-group">
                <label for="blogTitle">Tiêu đề bài viết</label>
                <input type="text" class="form-control" id="blogTitle" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div class="form-group">
                <label for="blogContent">Nội dung bài viết</label>
                <textarea class="form-control" id="blogContent" rows="10" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
            </div>
            <div class="form-group">
                <label for="blogImageURL">URL ảnh bài viết</label>
                <input type="text" class="form-control" id="blogImageURL" value={image} onChange={(e) => setImage(e.target.value)}/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}