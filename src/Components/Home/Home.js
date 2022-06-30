import { useQuery } from "react-query";
import EachCompletedTask from "./EachCompletedTask";
import EachNewTask from "./EachNewTask";

const Home = () => {
  const { isLoading: newLoading, data: tasks } = useQuery("toDoTask", () =>
    fetch("fakeTodo.json").then((res) => res.json())
  );

  const { isLoading: completedLoading, data: completedTasks } = useQuery(
    "completedTasks",
    () => fetch("fakeComplete.json").then((res) => res.json())
  );

  if (newLoading || completedLoading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }

  return (
    <section className="mb-6">
      <p className="text-center text-3xl py-12">Main Board</p>
      <section className="flex justify-center items-center">
        <div className="grid gap-6 md:gap-16 grid-cols-1 md:grid-cols-2">
          <div className="w-[325px] py-[20px] border-2 bg-white rounded-lg">
            <div className="flex justify-center items-center">
              <input
                className="bg-[rgb(220,231,237)] w-[230px] px-2 rounded-l-md py-[6px] outline-0"
                type="text"
                placeholder="Add a new task"
              />
              <button className=" px-3 py-[6px] font-medium bg-[#2b332c] text-white rounded-r-md hover:bg-[#66bc46]">
                Add
              </button>
            </div>
            <div>
              <p className="text-center my-3 font-semibold text-lg">My Tasks</p>
              <div className="mx-5">
                {tasks.map((item) => (
                  <EachNewTask key={item._id} item={item}></EachNewTask>
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
                <EachCompletedTask key={item._id} item={item}>
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
