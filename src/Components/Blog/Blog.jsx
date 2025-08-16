import React from 'react';
import PropTypes from 'prop-types';
import { CiBookmark } from 'react-icons/ci';

const Blog = ({ blog, handleBookmarks, handleMarkAsRead }) => {
    
    const { author, author_img, title, cover, posted_date, reading_time, hashtags } = blog;

    return (
        <div className='mb-20 '>
            <img className='' src={cover} alt="" />
            <div className='flex justify-between mb-6 mt-4'>
                <div className='flex gap-4 mt-2'>
                    <img className='w-12 h-12 rounded-full' src={author_img} alt="" />
                    <div>
                        <h5 className='text-2xl font-bold'>{author}</h5>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='flex justify-center'>{reading_time} min read <button onClick={() => handleBookmarks(blog)}><CiBookmark /></button></span>
                </div>
               
            </div>
            <h2 className='text-3xl mb-4 font-semibold'>{title}</h2>
            <p className='mb-2'>
                {
                    hashtags.map(hash => <span><a className='mx-2' href="">{hash}</a></span>)
                }
            </p>

            <button className='text-blue-500 underline' onClick={()=> handleMarkAsRead(reading_time)}>Mark as Read</button>

           
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;