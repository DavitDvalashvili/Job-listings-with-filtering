//import { useState } from "react";
import data from "../data.json";

export default function Joblist(props) {
  
  console.log(props.filterByItems);

  return (
    <div>
      {data.map((item) => (
        <div className="jobcontainer" key={item.id}>
          <img className="image" src={item.logo} alt="logo icon" />
          <div>
            <div className="description">
              <h2>{item.company}</h2>
              {item.new ? <span>new</span> : ""}
              {item.featured ? <span>FEATURED</span> : ""}
            </div>
            <h1>{item.position}</h1>
            <div className="text-box">
              <span>{item.postedAt}</span>
              <span>{item.contract}</span>
              <span>{item.location}</span>
            </div>
          </div>
          <div className="skillbox"
          onClick={(event) => {
            if(event.target.tagName === 'SPAN') {
                //console.log(event.target);
                if(!props.filterByItems.includes(event.target.innerText)){
                    props.setFilterByItems([...props.filterByItems, event.target.innerText])
                }
            }
          }}
          >
            {item.languages.map((language) => (
              <span key={Math.random()}>{language}</span>
            ))}
            <span>{item.level}</span>
            <span>{item.role}</span>
            {item.tools.map((tool) => (
                <span key={Math.random()}>{tool}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
