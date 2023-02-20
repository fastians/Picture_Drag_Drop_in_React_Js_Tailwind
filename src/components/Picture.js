import React from "react";
import { useDrag } from "react-dnd";

const Picture = ({ id, url }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div>
      <img
        key={id}
        ref={drag}
        src={url}
        alt=""
        width={200}
        className={`${isDragging ? "border-2 border-red-300" : ""}`}
      />
    </div>
  );
};

export default Picture;
