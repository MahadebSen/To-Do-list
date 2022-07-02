import React, { useState } from "react";

const EachNewTask = ({ item, handleDeleteNewTask, newFetch }) => {
  const [editItem, setEditItem] = useState(false);
  const { _id, task } = item;

  const handleEdit = () => {
    setEditItem(true);
  };

  const handleOk = async (event) => {
    event.preventDefault();
    const editedTask = { task: await event.target.edited.value };
    console.log(editedTask);
    fetch(`https://dudley-chesterfield-16746.herokuapp.com/updatetask/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(editedTask),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setEditItem(false);
          newFetch();
        }
      });
  };

  return (
    <div className="my-1 px-3 py-1  rounded-md hover:bg-[rgb(222,226,228)]">
      {editItem ? (
        <form onSubmit={handleOk} className="flex justify-center items-center">
          <input
            className="bg-[rgb(220,231,237)] w-[230px] px-2 rounded-l-md py-[5px] outline-0"
            type="text"
            name="edited"
            placeholder="Add a new task"
            required
          />
          <button className=" px-3 py-[6px] font-medium bg-[#2b332c] text-white rounded-r-md hover:bg-[#66bc46]">
            Ok
          </button>
        </form>
      ) : (
        <div className="flex justify-between items-center">
          <div className="flex flex-row gap-3 items-center">
            <input onClick={() => handleDeleteNewTask(item)} type="radio" />
            <p>{task}</p>
          </div>
          <button
            onClick={handleEdit}
            className="border-2 border-[hsl(127,5%,33%)] px-2 py-1 rounded-md"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default EachNewTask;
