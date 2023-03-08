import "./index.css";
import PostCard from "../postCard";
import { useEffect, useState } from "react";

const PostList = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(({ posts }) => setPostData(posts));
  }, []);

  return (
    <div>
      {postData.map((post) => (
        <PostCard postData={post} key={post.id} />
      ))}
    </div>
  );
};
export default PostList;
