const Header = ({ keywords, deleteKeywords, clearAll }) => {
  return (
    <div className="rounded-[5px]  tracking-[.123077px] bg-white text-base mx-[24px] 
    mt-[-36px] lg:mt-[-72px] flex justify-between items-center text-[#7C8F8F]  py-5 pr-[25px] pl-[19px]
    lg:max-w-[1110px] lg:mx-auto custom-shadow  
    ">
      <ul className="flex justify-left flex-wrap gap-4 items-center w-[100%] ">
        {keywords.map((key, id) => {
          return (
            <li key={id}
            className=" overflow-hidden h-8 rounded custom-shadow bg-[#EFFAFA] pl-[8px] py-[4px] 
            text-[#5CA5A5] flex justify-center gap-[11px] items-center " 
            >
              <span>{key}</span>
              <button
                className="bg-[#5CA5A5] w-[32px] h-8 flex justify-center items-center hover:bg-[#2B3939] transition ease-out duration-500"
                onClick={() => {
                  deleteKeywords(key);
                }}
              >
                <img src="./images/icon-remove.svg" alt="close" />
              </button>
            </li>
          );
        })}
      </ul>
      <div
       className="hover:cursor-pointer"
        onClick={() => {
          clearAll();
        }}
      >
        Clear
      </div>
    </div>
  );
};

export default Header;
