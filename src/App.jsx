import { useState } from "react";
import "./App.css";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Blogs from "./components/Header/Blogs/Blogs";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    setBookmarks([...bookmarks, blog]);
  };
  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time);
    // remove bookmarks
    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmarks);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks
          readingTime={readingTime}
          bookmarks={bookmarks}
          handleMarkAsRead={handleMarkAsRead}
        ></Bookmarks>
      </div>
    </>
  );
}

export default App;
