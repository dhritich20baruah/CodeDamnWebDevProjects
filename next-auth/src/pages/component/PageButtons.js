import React from "react";

const PageButtons = () => {
  return (
    <div className="flex justify-between">
      <button className="p-2 text-slate-500 border-2 border-slate-500 hover:text-white hover:bg-slate-500 rounded-md">
        Prev
      </button>
      <button className="p-2 text-slate-500 border-2 border-slate-500 hover:text-white hover:bg-slate-500 rounded-md">
        Next
      </button>
    </div>
  );
};

export default PageButtons;
