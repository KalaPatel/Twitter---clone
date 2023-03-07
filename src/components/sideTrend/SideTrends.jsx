import "./index.css";
import TrendItems from "../trendItems";
// import { CiSearch } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { trendMock } from "../../mocks/trendsMocks.js";
// import TrendList from "../trendList";

const SideTrends = () => {
  return (
    <div className="SideTrend">
      <div className="input_container">
        <input type="text" placeholder="Search twitter" />
      </div>
      <div className="TrendContainer">
        <div className="trendCaption">
          <h2>Trends for you</h2>
          <CiSettings className="trends_icons" />
        </div>

        {trendMock.map((trend) => (
          <TrendItems trends={trend} />
        ))}

        <p className="link"> Show More</p>
      </div>
    </div>
  );
};

export default SideTrends;
