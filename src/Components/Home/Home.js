import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import EachCompletedTask from "./EachCompletedTask";
import EachNewTask from "./EachNewTask";

const Home = () => {
  const {
    isLoading: newLoading,
    data: tasks,
    refetch: newFetch,
  } = useQuery("toDoTask", () =>
    fetch("https://dudley-chesterfield-16746.herokuapp.com/newtasks").then(
      (res) => res.json()
    )
  );

  const {
    isLoading: completedLoading,
    data: completedTasks,
    refetch: completeFetch,
  } = useQuery("completedTasks", () =>
    fetch(
      "https://dudley-chesterfield-16746.herokuapp.com/completedtasks"
    ).then((res) => res.json())
  );

  if (newLoading || completedLoading) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }

  const handleAdd = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const todo = event.target.todo.value;

      const newTask = { task: todo };

      fetch("https://dudley-chesterfield-16746.herokuapp.com/addnewtask", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newTask),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            event.target.todo.value = "";
            newFetch();
          }
        });
    } else {
      event.preventDefault();
      const todo = event.target.todo.value;

      const newTask = { task: todo };

      fetch("https://dudley-chesterfield-16746.herokuapp.com/addnewtask", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newTask),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            event.target.todo.value = "";
            newFetch();
          }
        });
    }
  };

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
        if (data.acknowledged) {
          completeFetch();
        }
      });
  };

  const handleDeleteCompletedTask = (id) => {
    console.log(id);
    fetch(
      `https://dudley-chesterfield-16746.herokuapp.com/deletecompletedtask/${id}`,
      {
        method: "DELETE",
      }
    )
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
    fetch(
      `https://dudley-chesterfield-16746.herokuapp.com/deletecompletedtask/${item._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          completeFetch();
        }
      });

    const reAddTask = { task: selectedTask };
    console.log(reAddTask);
    fetch("https://dudley-chesterfield-16746.herokuapp.com/addnewtask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reAddTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          newFetch();
        }
      });
  };

  const reverseTasks = tasks.map(
    (val, index, array) => array[array.length - 1 - index]
  );

  return (
    <section className="mb-16">
      <p className="text-center text-3xl py-12">Main Board</p>
      <section className="flex justify-center items-center">
        <div className="grid gap-6 md:gap-16 grid-cols-1 md:grid-cols-2">
          <div className="w-[325px] py-[20px] border-2 bg-white rounded-lg">
            <form
              onSubmit={handleAdd}
              className="flex justify-center items-center"
            >
              <input
                className="bg-[rgb(220,231,237)] w-[230px] px-2 rounded-l-md py-[6px] outline-0"
                type="text"
                name="todo"
                placeholder="Add a new task"
                required
              />
              <button className=" px-3 py-[6px] font-medium bg-[#2b332c] text-white rounded-r-md hover:bg-[#66bc46]">
                Add
              </button>
            </form>
            <div>
              <p className="text-center my-3 font-semibold text-lg">My Tasks</p>
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
          </div>

          <div className="w-[325px] py-[10px] border-2 bg-white rounded-lg">
            <p className="text-center mt-3 mb-7 font-semibold text-lg">
              Completed Tasks
            </p>
            <div className="mx-5">
              {completedTasks.map((item) => (
                <EachCompletedTask
                  key={item._id}
                  item={item}
                  handleDeleteCompletedTask={handleDeleteCompletedTask}
                  handleRadioDeleteCompletedTask={
                    handleRadioDeleteCompletedTask
                  }
                >
                  {" "}
                </EachCompletedTask>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
