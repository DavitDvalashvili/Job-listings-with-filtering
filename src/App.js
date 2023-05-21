import Joblist from "./components/Joblist";
import "./App.css";
import { useState } from "react";
//import data from "../data.json";
import FilterItem from "./components/FilterItem";


function App() {
  const [filterByItems, setFilterByItems] = useState("");

  return (
    <div className="App">
      <div className="searchbar">
        {filterByItems.map((item)=> {
          <FilterItem filterByItems={item}/>
        })}
        <span>clear</span>
      </div>
      <Joblist className="jobs" filterByItems={filterByItems} setFilterByItems={setFilterByItems}
      />
    </div>
  );
}

export default App;
