import "./index.css";

const PostCard = ({ postData }) => {
  const { userName, email, img, body } = postData;
  return (
    <div className="PostCard">
      <div className="img_container">
        <img className="profile_pic" src={img} alt="Profile picture" />
      </div>
      <div className="post_content">
        <div className="user_info">
          <span className="user_name">{userName}</span>
          <span className="user_email">{email}</span>
        </div>
        <p>{body}</p>
        <div className="icons_container">
          <div>
            <img
              className="post_icons"
              src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/256/external-comments-social-media-ui-tanah-basah-basic-outline-tanah-basah.png"
              alt="comment icon"
            />
            <span>5</span>
          </div>

          <div>
            <img
              className="post_icons"
              src="https://img.icons8.com/fluency-systems-regular/256/retweet.png"
              alt="retweet icon"
            />
            <span>5</span>
          </div>

          <div>
            <img
              className="post_icons"
              src="https://img.icons8.com/material-outlined/256/hearts.png"
              alt="heart icon"
            />
            <span>5</span>
          </div>

          <div>
            <img
              className="post_icons"
              src="https://img.icons8.com/external-becris-lineal-becris/256/external-upload-mintab-for-ios-becris-lineal-becris.png"
              alt="upload icon"
            />
            <span>5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
