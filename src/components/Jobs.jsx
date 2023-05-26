import React, { useEffect, useState } from "react";
import Job from "./Job";

const Jobs = ({ data, setKeywords, keywords}) => {
  const [filteredData, setFilteredData] = useState([]);

  const modifiedData = () => {
    if(keywords.length>0) {
      const newData = filteredData.filter((d) => {
        return keywords.every((element) => {
          return (
            d.role === element ||
            d.level === element ||
            d.languages.includes(element) ||
            d.tools.includes(element)
          );
        })
      })
      setFilteredData(newData)
    } else {
      setFilteredData(data)
    }
  }

  useEffect(() => {
    modifiedData()
  }, [keywords])


  return (
    <div className="job">
      {filteredData.map((datum, index) => {
        return <Job key={index} data={datum} setKeywords={setKeywords}/>;
      })}
    </div>
  );
};

export default Jobs;
