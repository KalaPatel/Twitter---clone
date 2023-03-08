import "./index.css";
import { useEffect, useState } from "react";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { BiUpload } from "react-icons/bi";

const PostCard = ({ postData }) => {
  const [userData, setUserData] = useState([]);
  const { body, userId } = postData;

  useEffect(() => {
    fetch(`https://dummyjson.com/user/${userId}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div className="PostCard">
      <div className="img_container">
        <img
          className="profile_pic"
          src={userData.image}
          alt="Profile picture"
        />
      </div>
      <div className="post_content">
        <div className="user_info">
          <span className="user_name">{userData.username}</span>
          <span className="user_email">{userData.email}</span>
        </div>
        <p>{body}</p>
        <div className="icons_container">
          <div>
            <FaRegComment className="post_icons comment" />
            <span>5</span>
          </div>
          <div>
            <AiOutlineRetweet className="post_icons retweet" />
            <span>5</span>
          </div>
          <div>
            <FaRegHeart className="post_icons heart" />
            <span>5</span>
          </div>

          <div>
            <BiUpload className="post_icons upload" />
            <span>5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
