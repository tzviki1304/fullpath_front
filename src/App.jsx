import { useState , useEffect } from "react";
import dataJson from "./assets/data.json";
import "./App.css";
import Line  from "./charts/Line";
import Bar  from "./charts/Bar";

function App() {
  const [times , setTimes] = useState([]);
  const [impressions , setImpressions] = useState([]);
  const [clicks  , setClicks ] = useState([]);
  const [cost , setCost] = useState([]);
  const [conversions  , setConversions ] = useState([]);

  useEffect(() => {
    setTimes(dataJson.data.map((item) => {
      let time = item.timestamp.split(" ")[0].slice(2);
      time = time.split("-").reverse().join("/");
      return time
    } ));
    setImpressions(dataJson.data.map((item) => item.impressions));
    setClicks(dataJson.data.map((item) => item.clicks));
    setCost(dataJson.data.map((item) => item.cost));
    setConversions(dataJson.data.map((item) => item.conversions));
  },[]);

  return (
    <>
      <h1>Website Metrics</h1>
      <div className="charts">
        <Line  xData={times} yData={impressions}  title="impressions"  />
        <Bar  xData={times} yData={clicks}  title="clicks"  />
        <Line  xData={times} yData={cost}  title="cost"  />
        <Bar  xData={times} yData={conversions}  title="conversions"  />
      </div>
    </>
  );
}

export default App;
