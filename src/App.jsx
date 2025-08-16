import React from 'react';
import Header from './Components/Header/Header';
import Blogs from './Components/Blogs/Blogs';
import BookMarks from './Components/BookMarks/BookMarks';
const App = () => {
  return (
    <div className='w-10/12 mx-auto'>
      <Header></Header>
      <div className='md:flex '>
        <Blogs ></Blogs>
        <BookMarks></BookMarks>
      </div>
    </div>
  );
};

export default App;