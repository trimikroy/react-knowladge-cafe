import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleBookmarks, handleMarkAsRead }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])
   // console.log(blogs);
    return (
        <div className='md:w-2/3 '>
           
            {
                blogs.map(blog => <Blog 
                    key={blog.id}
                     blog={blog}
                    handleBookmarks={handleBookmarks}
                    handleMarkAsRead={handleMarkAsRead}
                     
                     ></Blog>)
            }
        </div>
    );
};

export default Blogs;