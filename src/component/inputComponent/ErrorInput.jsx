import React from "react";
import { data } from "react-router";

const ErrorInput = ({ title, data, setRecived, errorMessage, error }) => {
  return (
    <div className=" space-y-1">
      <div className="text-slate-700 font-medium">{title}</div>
      <input
        type="text"
        className="border border-slate-500 p-1 px-2 text-slate-800 font-medium bg-slate-100 rounded-sm w-70"
        onChange={(e) => setRecived(e.target.value)}
      />
      <p className="text-red-500 text-xs font-medium my-0 px-3 italic w-fit">
        {error && data == "" && <span>{errorMessage}</span>}
      </p>
    </div>
  );
};

export default ErrorInput;
