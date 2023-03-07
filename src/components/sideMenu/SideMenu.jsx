import "./index.css";

const SideMenu = ({ styleType }) => {
  return (
    <div className={styleType}>
      <ul className="list_container">
        <li className="list_Item">
          <img
            className="footer_img"
            src="https://img.icons8.com/color/256/top-menu.png"
            alt="home icon"
          />
          <span>Home</span>
        </li>
        <li className="list_Item">
          <img
            className="header_img"
            src="https://img.icons8.com/fluency-systems-filled/256/hashtag-large.png"
            alt="twitter logo"
          />
          <span>Explore</span>
        </li>
        <li className="list_Item">
          <img
            className="header_img"
            src="https://img.icons8.com/fluency-systems-regular/256/appointment-reminders--v1.png"
            alt="notification icon"
          />
          <span>Notification</span>
        </li>
        <li className="list_Item">
          <img
            className="header_img"
            src="https://img.icons8.com/windows/256/new-post.png"
            alt="message icon"
          />
          <span>Message</span>
        </li>
        <li className="list_Item">
          <img
            className="header_img"
            src="https://img.icons8.com/material/256/bookmark-outline.png"
            alt="bookmark icon"
          />
          <span>Bookmark</span>
        </li>
        <li className="list_Item">
          <img
            className="header_img"
            src="https://img.icons8.com/material-rounded/256/list.png"
            alt="lists icon"
          />
          <span>Lists</span>
        </li>
        <li className="list_Item">
          <div className="profile_img_container_sideMenu">
            <img
              className="profile_pic_sideMenu"
              src="https://images.unsplash.com/photo-1583147610149-78ac5cb5a303?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="profile pic"
            />
            <span>Profile</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default SideMenu;
