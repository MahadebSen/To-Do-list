import React from "react";
import { useQuery } from "react-query";
import EachCompletedTask from "../Home/EachCompletedTask";

const CompletedTasks = () => {
  const {
    isLoading: completedLoading,
    data: completedTasks,
    refetch: completeFetch,
  } = useQuery("completedTasks", () =>
    fetch("http://localhost:5000/completedtasks").then((res) => res.json())
  );

  if (completedLoading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }

  const handleDeleteCompletedTask = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/deletecompletedtask/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          completeFetch();
        }
      });
  };

  const handleRadioDeleteCompletedTask = (item) => {
    const selectedTask = item.completed;
    fetch(`http://localhost:5000/deletecompletedtask/${item._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          completeFetch();
        }
      });

    const reAddTask = { task: selectedTask };
    console.log(reAddTask);
    fetch("http://localhost:5000/addnewtask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reAddTask),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <section className="mt-8 mb-[250px]">
      <div>
        <p className="text-center mt-4 mb-7 font-semibold text-lg">
          Completed Tasks
        </p>
        <div className="mx-5">
          {completedTasks.map((item) => (
            <EachCompletedTask
              key={item._id}
              item={item}
              handleDeleteCompletedTask={handleDeleteCompletedTask}
              handleRadioDeleteCompletedTask={handleRadioDeleteCompletedTask}
            >
              {" "}
            </EachCompletedTask>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompletedTasks;
