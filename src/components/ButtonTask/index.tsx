import React from "react";
import { Arrow, InProgress } from "../../assets/icons";

const ButtonTask: React.FC = () => {
  return (
    <div className="flex justify-center">
      <button className="text-center inline-flex items-center border-4 border-border py-2 px-3 rounded-xl">
        <InProgress />
        <p className="ml-2 font-thin text-[16px]">
          Start dragging this task to create a new one
        </p>
        <span className="mt-8 absolute">
          <Arrow />
        </span>
      </button>
    </div>
  );
};

export default ButtonTask;
