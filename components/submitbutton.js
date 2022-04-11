import React from "react";
import Modal from "react-modal";

const Submitbutton = ({ number }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  return (
    <>
      <a onClick={() => setModalIsOpen(true)}>제출</a>
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
      >
        {number}
        <button onClick={() => setModalIsOpen(false)}>X</button>
      </Modal>
    </>
  );
};

export default Submitbutton;
