import "./index.css";
import PostCard from "../postCard/";
import { userPost } from "../../mocks/mock.js";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineGifBox } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";

const Content = () => {
  return (
    <div className="Content">
      <div className="larger_screen_content">
        <div className="larger_screen_content_header">
          <h2>Home</h2>
          <img
            className="header_img"
            src="https://img.icons8.com/material-outlined/256/sparkling.png"
            alt="trends menu icon"
          />
        </div>
        <div className="larger_screen_content_input">
          <div className="profile_img_container_input">
            <img
              className="profile_pic_input"
              src="https://images.unsplash.com/photo-1583147610149-78ac5cb5a303?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="profile pic"
            />
            <input type="text" placeholder="What's happening?" />
            <IoImageOutline className="input_icons" />
            <MdOutlineGifBox className="input_icons" />
            <VscGraph className="input_icons" />
          </div>
        </div>
        <div></div>
      </div>
      {userPost.map((post) => (
        <PostCard postData={post} key={post.id} />
      ))}
    </div>
  );
};

export default Content;
