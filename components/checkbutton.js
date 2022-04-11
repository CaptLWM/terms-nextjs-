import React from "react";
import Modal from "react-modal";
import terms from "../pages/post/terms.json";
import styles from "./layout.module.css";

const Checkbutton = ({ key, value, getCount, number }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const checkcount = () => {
    console.log(number);
    getCount(number + 1);
  };
  console.log("...", value);
  return (
    <>
      <h3>
        <input type="checkbox" onClick={checkcount}></input>
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
