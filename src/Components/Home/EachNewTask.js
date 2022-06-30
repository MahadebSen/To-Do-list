import React from "react";

const EachNewTask = ({ item }) => {
  const { task } = item;
  return (
    <div className="my-1 px-3 py-1  rounded-md hover:bg-[rgb(222,226,228)]">
      <p>{task}</p>
    </div>
  );
};

export default EachNewTask;
