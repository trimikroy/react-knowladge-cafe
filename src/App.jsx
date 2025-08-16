import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Blogs from './Components/Blogs/Blogs';
import BookMarks from './Components/BookMarks/BookMarks';
const App = () => {

    const [bookmarks, setBookmarks] = useState([]);
    const [readingTime, setReadingTime] = useState(0);


    const handleBookmarks = (blog) => {
      const newBookmarks = [...bookmarks, blog]
      setBookmarks(newBookmarks);
    }

    const handleMarkAsRead = (time) =>{
      setReadingTime(readingTime + time)
    }
 
  

  return (
    <div className='w-10/12 mx-auto'>
      <Header></Header>
      <div className='md:flex mt-6 gap-6'>
        <Blogs handleBookmarks={handleBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <BookMarks bookmarks={bookmarks} readingTime={readingTime} ></BookMarks>
      </div>
    </div>
  );
};

export default App;