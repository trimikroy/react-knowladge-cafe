import React from 'react';
import BookMark from '../BookMark/BookMark';

const BookMarks = ({ bookmarks, readingTime }) => {

    return (
        <>

            <div className='w-1/3 flex flex-col gap-4'>
                <div className='border-1 border-indigo-500 rounded-md h-[50px] px-4 flex items-center  bg-indigo-100 '>
                    <h3 className='text-blue-500 font-semibold'>
                        Spent time on Read: <span className='text-xl'>{readingTime}</span> min</h3>
                </div>

                <div className='bg-gray-300 flex flex-col rounded-md h-full'>
                    <h3 className='py-2 px-4 font-semibold'>Bookmarks Blogs :  {bookmarks.length}</h3>

                    {
                        bookmarks.map(bookmark => <BookMark bookmark={bookmark} readingTime={readingTime}></BookMark>)
                    }
                </div>
            </div>
        </>
    );
};

export default BookMarks;