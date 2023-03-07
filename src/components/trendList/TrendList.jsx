import "./index.css";
import { trendMock } from "../../mocks/trendsMocks";
import TrendItems from "../trendItems/";

const TrendList = () => {
  <>
    {trendMock.map((trend) => (
      <TrendItems trends={trend} />
    ))}
  </>;
};

export default TrendList;
