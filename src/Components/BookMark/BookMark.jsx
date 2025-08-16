import React from 'react';

const BookMark = ({ bookmark }) => {
    
    const {title} = bookmark;
    return (
        <div className='px-4 '>
            <h4 className='bg-white p-4 my-2 rounded-xl'> { title}</h4>
        </div>
    );
};

export default BookMark;