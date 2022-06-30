import React from "react";

const EachNewTask = ({ item }) => {
  const { task } = item;
  return (
    <div className="my-1 px-3 py-1  rounded-md hover:bg-[rgb(222,226,228)]">
      <div className="flex justify-between items-center">
        <div className="flex flex-row gap-3 items-center">
          <input type="radio" />
          <p>{task}</p>
        </div>
        <button className="border-2 border-[hsl(127,5%,33%)] px-2 py-1 rounded-md">
          Edit
        </button>
      </div>
    </div>
  );
};

export default EachNewTask;