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
    , [])
    const handleSubmit = async (event) => {
        event.preventDefault();
        const search = event.target.search.value;
        await axios.get(non_id_url + "find?title=" + search)
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
    return (
        <div>
            <h1>Danh sách bài viết</h1>
            <form onSubmit={handleSubmit}>
                <input class="search-area" type="text" placeholder="Tìm kiếm bài viết theo tên" name="search"/>
                <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>                
                </button>
            </form>
            <br></br>
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