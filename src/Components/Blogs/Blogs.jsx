import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleBookmarks }) => {
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
                     
                     ></Blog>)
            }
        </div>
    );
};

export default Blogs;