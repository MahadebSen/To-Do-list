import React from "react";

const CompletedTasks = () => {
  return (
    <div>
      <div>
        <input
          className="bg-[rgb(220,231,237)] w-[330px] px-4 rounded-l-md py-[8px] outline-0"
          type="text"
        />
        <button className=" px-3 py-[8px] font-medium bg-[#2b332c] text-white rounded-r-md hover:bg-[#66bc46]">
          Search
        </button>
      </div>
    </div>
  );
};

export default CompletedTasks;
