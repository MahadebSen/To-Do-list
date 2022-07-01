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

  return (
    <section className="my-8">
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
