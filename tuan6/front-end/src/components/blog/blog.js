import React, { useState, useEffect } from 'react';
import axios from 'axios';
import non_id_url from 'constants/URL';
import BlogCard from './blogCard';
import { useSelector, useDispatch } from 'react-redux';
import { setBlogs } from 'myRedux';
export default function Blog() {
    const blogs = useSelector(state => state.blogs);
    const dispatch = useDispatch();
    
    useEffect(
        () => {
            axios.get(non_id_url)
            .then(
                (response) => {
                    dispatch(setBlogs(response.data.data));
                }
            )
            .catch(
                (err) => {
                    console.log(err)
                }
            )
        }
    )
    return (
        <div>
            <h1>Danh sách bài viết</h1>
            <div>
                {blogs.map(blog => {
                    return (
                        <BlogCard blog={blog} key={blog.id}/>
                    )
                })}
            </div>
        </div>
    )
}