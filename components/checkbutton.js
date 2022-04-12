import React from "react";
import Modal from "react-modal";
import { validateElement } from "react-modal/lib/helpers/ariaAppHider";
import { useEffect } from "react/cjs/react.production.min";
import terms from "../pages/post/terms.json";
import styles from "./layout.module.css";

const Checkbutton = ({ id, value, getCount, number, result }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [count, setCount] = React.useState([{ id: "", essential: "" }]);
  // console.log("checkClick", checkClick);
  // console.log("key:", value); //부모
  // console.log("id:", id); //부모
  // console.log("number", number);

  const checkcount = () => {
    // const clickcount = [{ id: "", essential: "" }];
    if (value.isEssential == true) {
      const clickcount = [{ id: id, essential: value.isEssential }];
      setCount({
        ...count,
        id: clickcount.id,
        essential: clickcount.essential,
      });
      console.log("result", clickcount);
    }
    // else getCount(number + 1);

    // setCount({
    //   ...count,
    //   id: clickcount.id,
    //   essential: clickcount.essential,
    // });
    console.log("count", count);
  };

  return (
    <>
      <h3>
        <input name="count" type="checkbox" onChange={checkcount} />
        {value.title}
        <button onClick={() => setModalIsOpen(true)}>보기</button>
        <Modal
          style={{
            content: {
              position: "absolute",
              top: "300px",
              left: "200px",
              right: "200px",
              bottom: "600px",
              border: "1px solid #ccc",
              background: "#fff",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "4px",
              outline: "none",
              padding: "20px",
            },
          }}
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          ariaHideApp={false}
        >
          {value.content}
          <button onClick={() => setModalIsOpen(false)}>X</button>
        </Modal>
      </h3>
    </>
  );
};

export default Checkbutton;
