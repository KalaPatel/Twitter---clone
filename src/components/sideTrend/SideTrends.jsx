import "./index.css";
import TrendList from "../trendList";
import { CiSettings } from "react-icons/ci";

const SideTrends = () => {
  return (
    <div className="SideTrend">
      <div className="input_container">
        <input type="text" placeholder="Search twitter" />
      </div>
      <div className="TrendContainer .TrendContainer_mobileMenu">
        <div className="trendCaption">
          <h2>Trends for you</h2>
          <CiSettings className="trends_icons" />
        </div>

        <TrendList styleType="" />

        <p className="link"> Show More</p>
      </div>
    </div>
  );
};

export default SideTrends;
