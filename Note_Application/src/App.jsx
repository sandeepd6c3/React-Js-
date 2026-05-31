import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    console.log(title);
    console.log(details);

    const copyTask = [...task];

    copyTask.push({ title, details });
    console.log(copyTask);

    setTask(copyTask);

    setTitle("");
    setDetails("");
  }

  return (
    <div className="h-screen lg:flex bg-gray-600 text-black">
      <form
        action=""
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className=" flex  lg:w-1/2 flex-col items-start p-10 gap-4 "
      >
        <h1 className="text-4xl font-bold text-white">Add Notes</h1>

        {/* PHLA INPUT HEADING K LIYE ! */}
        <input
          type="text"
          placeholder="Task Title "
          className="border-2 px-3 py-4 w-full rounded border-amber-50 font-medium text-4xl outline-none "
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* DUSRA INPUT AREA FOR DESCRIPTION ! */}
        <textarea
          name=""
          placeholder="Description"
          className="border-2 px-3 h-30 w-full rounded border-amber-50  font-medium outline-none text-2xl"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>

        <button className=" px-3 py-5 text-4xl font-bold bg-white rounded w-full active:scale-95 ">
          Add Task
        </button>
      </form>

      <div className="  gap-5 flex-wrap lg:border-l-3  lg:w-1/2 p-10">
        <h1 className="text-4xl font-bold text-white">Your Notes</h1>

        <div className="flex  gap-5 flex-wrap mt-5 mb-2 overflow-auto h-full">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="h-80 w-70 gap-5 rounded pl-6 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8jBcV8EqbS-IMWpYimszqxRnaCpNKlf3gDA&s')] p-4   "
              >
                <h2 className="leading-tight font-bold text-2xl">
                  {elem.title}
                </h2>
                <p className="text-gray-800 ">{elem.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
