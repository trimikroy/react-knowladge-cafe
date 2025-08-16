import React from 'react';
import BookMark from '../BookMark/BookMark';

const BookMarks = ({ bookmarks }) => {

    return (
        <>
            <div className='w-1/3 bg-gray-300 flex flex-col rounded-xl'>
                <h3 className='py-2 px-4 font-semibold'>Bookmarks Blogs :  {bookmarks.length}</h3>

                {
                    bookmarks.map(bookmark => <BookMark bookmark={bookmark}></BookMark>)
                }
            </div>
        </>
    );
};

export default BookMarks;