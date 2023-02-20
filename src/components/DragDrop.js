import React, { useState } from "react";
// import image1 from "./assets/cheerful-smiling-woman-taking-selfie-videochat.jpg";
// import image2 from "./assets/delicious-fried-chicken-plate.jpg";
// import image3 from "./assets/delicious-italian-food (2).png";
import { useDrop } from "react-dnd";

import Picture from "./Picture";
const PictureList = [
  {
    id: 1,
    url: "assets/cheerful-smiling-woman-taking-selfie-videochat.jpg",
  },
  {
    id: 2,
    url: "assets/delicious-fried-chicken-plate.jpg",
  },
  {
    id: 3,
    url: "assets/food.png",
  },
];
const DragDrop = () => {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    // setBoard((board) => [...board, pictureList[0]]);
    setBoard([pictureList[0]]);
    console.log(id);
  };
  return (
    <>
      <div className="flex justify-center items-center gap-3">
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} key={picture.id} />;
        })}
      </div>
      <div
        ref={drop}
        className="max-w-[400px] border-2 border-black min-h-[600px] ml-3 mt-10 flex justify-center items-center flex-col"
      >
        {board.map((picture) => {
          return <Picture url={picture.url} id={picture.id} key={picture.id} />;
        })}
      </div>
    </>
  );
};

export default DragDrop;
