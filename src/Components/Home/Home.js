import React from "react";

const Home = () => {
  return (
    <section className="">
      <p className="text-center text-3xl py-6">Main Board</p>
      <div>
        <div>
          <div>
            <input
              className="bg-[rgb(220,231,237)] w-[230px] px-4 rounded-l-md py-[6px] outline-0"
              type="text"
            />
            <button className=" px-3 py-[6px] font-medium bg-[#2b332c] text-white rounded-r-md hover:bg-[#66bc46]">
              Add
            </button>
          </div>
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default Home;
