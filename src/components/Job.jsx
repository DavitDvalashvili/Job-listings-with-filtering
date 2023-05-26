import React from "react";

const Job = (props) => {
  const {
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = props.data;

  let keyWords = [role, level, ...languages, ...tools];

  return (
    <div className="job-container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <div>
          <div className="cname">{company}</div>
          {props.data.new && <span>new!</span>}
          {featured && <span>featured</span>}
        </div>
        <div className="position">{position}</div>
        <div className="details">
          <span>{postedAt}</span>
          <span>{contract}</span>
          <span>{location}</span>
        </div>
      </div>
      <div>
        {keyWords.map((key, index) => (
          <button onClick={()=> {
            props.setKeywords(key)
          }} key={index}>{key}</button>
        ))}
      </div>
    </div>
  );
};

export default Job;
