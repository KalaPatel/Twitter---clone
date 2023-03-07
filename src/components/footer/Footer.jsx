import SideTrends from "../sideTrend";
import "./index.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer_mobile">
        <img
          className="footer_img"
          src="https://img.icons8.com/color/256/top-menu.png"
          alt="home icon"
        />
        <img
          className="footer_img"
          src="https://img.icons8.com/ios-glyphs/256/search--v1.png"
          alt="search icon"
        />
        <img
          className="footer_img"
          src="https://img.icons8.com/fluency-systems-regular/256/appointment-reminders--v1.png"
          alt="notification icon"
        />
        <img
          className="footer_img"
          src="https://img.icons8.com/windows/256/new-post.png"
          alt="message icon"
        />
      </div>
      <div className="larger-screen-footer">
        <SideTrends />
      </div>
    </div>
  );
};

export default Footer;
