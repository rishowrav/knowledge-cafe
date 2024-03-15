import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    reading_time,
    author_img,
    author,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`cover picture of the title ${title}`}
      />
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="text-2xl"
          >
            <CiBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl my-4">{title}</h2>
      <p>
        {hashtags.map((hash, index) => (
          <span key={index}>
            <a href="#">{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(id, reading_time)}
        className="text-purple-600 font-bold underline"
      >
        Mark As Read
      </button>
    </div>
  );
};

Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
};

export default Blog;
