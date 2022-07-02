import React from "react";
import { useQuery } from "react-query";
import EachNewTask from "../Home/EachNewTask";
import Loading from "../Loading/Loading";

const ToDo = () => {
  const {
    isLoading: newLoading,
    data: tasks,
    refetch: newFetch,
  } = useQuery("toDoTask", () =>
    fetch("https://dudley-chesterfield-16746.herokuapp.com/newtasks").then(
      (res) => res.json()
    )
  );

  if (newLoading) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }

  const handleDeleteNewTask = (item) => {
    const selectedTask = item.task;
    fetch(
      `https://dudley-chesterfield-16746.herokuapp.com/deletenewtask/${item._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          newFetch();
        }
      });

    const completeTask = { completed: selectedTask };
    console.log(completeTask);
    fetch("https://dudley-chesterfield-16746.herokuapp.com/addcompletedtask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(completeTask),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const reverseTasks = tasks.map(
    (val, index, array) => array[array.length - 1 - index]
  );

  return (
    <section className="mt-8 mb-[270px] max-w-6xl mx-auto">
      <div>
        <p className="text-center my-4 font-semibold text-lg">My Tasks</p>
        <div className="mx-5">
          {reverseTasks.map((item) => (
            <EachNewTask
              key={item._id}
              item={item}
              handleDeleteNewTask={handleDeleteNewTask}
              newFetch={newFetch}
            ></EachNewTask>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToDo;
