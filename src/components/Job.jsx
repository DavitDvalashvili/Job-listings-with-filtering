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
    <div className={featured ? "job-container featuredBorder" : "job-container" }
    >
      <div  className="absolute top-[-24px] lg:relative lg:top-[0px] lg:mr-6">
        <img src={logo} className="w-12 lg:w-[88px]" alt="logo"/>
      </div>
      <div className="border-b-[1px] border-[#B7C4C4] lg:border-b-[0px]">
        <div className="flex justify-start items-center gap-2">
          <div className="mr-[30px] text-[#5CA5A5]">{company}</div>
          {props.data.new && <span className="text-white bg-[#5CA5A5] rounded-xl px-2 py-[6px]">NEW!</span>}
          {featured && <span className=" text-white bg-[#2B3939] rounded-xl px-2 py-[6px]">FEATURED</span>}
        </div>
        <div className="text-[15px] leading-6 text-[#2B3939] mt-[9px] mb-2 hover:cursor-pointer hover:text-[#5CA5A5] transition ease-out duration-500">{position}</div>
        <div className="flex justify-left items-center gap-[9.5px] font-medium text-[#7C8F8F] tracking-[.123077px] mb-[15px] lg:mb-[0px] ">
          <span>{postedAt}</span>
          <span className="bg-[#B7C4C4] w-1 h-1 rounded"></span>
          <span>{contract}</span>
          <span className="bg-[#B7C4C4] w-1 h-1 rounded"></span>
          <span>{location}</span>
        </div>
      </div>
      <div className="mt-4 flex justify-start items-center gap-4 flex-wrap lg:ml-auto">
        {keyWords.map((key, index) => (
          <button className="h-8 bg-[#EFFAFA] text-[#5CA5A5] text-base rounded py-1 px-2 hover:cursor-pointer"
            onClick={() => {
              props.setKeywords(key);
            }}
            key={index}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Job;
