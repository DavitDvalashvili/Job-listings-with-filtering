import "./App.css";
import data from "./data.json"
import Jobs from "./components/Jobs"
import Header from "./components/Header"
import { useState } from "react";



function App() {
  const [filterKeywords, setfilterKeywords] = useState([]);

  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setfilterKeywords([...filterKeywords, data]);
    }
  };

  const deleteKeywords = (data) => {
    const newKeyword = filterKeywords.filter((key) => 
      key !== data
    )
    setfilterKeywords(newKeyword)
  }

  const clearAll = () => {
    setfilterKeywords([])
  }


  return (
    <div>
      <div className="header"> </div>
      {filterKeywords.length > 0 && (
        <Header
          keywords={filterKeywords} deleteKeywords={deleteKeywords} clearAll={clearAll}
        />
      )}

      <Jobs keywords={filterKeywords} data={data} setKeywords={addFilterKeywords}/>
    </div>
  );
}

export default App;
