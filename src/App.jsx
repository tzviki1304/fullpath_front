import { useState , useEffect } from "react";
import dataJson from "./assets/data.json";
import "./App.css";

import { Impressions, Cost, Conversions, Clicks } from "./charts";

function App() {
  const [timestamp , setTimestamp] = useState([]);
  const [impressions , setImpressions] = useState([]);
  const [clicks  , setClicks ] = useState([]);
  const [cost , setCost] = useState([]);
  const [conversions  , setConversions ] = useState([]);

  useEffect(() => {
    setTimestamp(dataJson.data.map((item) => item.timestamp));
    setImpressions(dataJson.data.map((item) => item.impressions));
    setClicks(dataJson.data.map((item) => item.clicks));
    setCost(dataJson.data.map((item) => item.cost));
    setConversions(dataJson.data.map((item) => item.conversions));
  },[]);

  return (
    <>
      <h1>Website Metrics</h1>
      <div className="charts">
        <Impressions className="chart" timestamp={timestamp} impressions={impressions} />
        <Clicks className="chart" timestamp={timestamp} clicks={clicks} />
        <Cost className="chart" timestamp={timestamp} cost={cost} />
        <Conversions className="chart" timestamp={timestamp} conversions={conversions} />
      </div>
    </>
  );
}

export default App;
