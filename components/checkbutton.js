import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

const Checkbutton = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  return (
    <li>
      <button onClick={() => setModalIsOpen(true)}>보기</button>
      <Modal
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
          content: {
            position: "absolute",
            top: "300px",
            left: "300px",
            right: "300px",
            bottom: "300px",
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
        This is Modal content
        {/* 약관 배열 불러와서 넣기 */}
        <button onClick={() => setModalIsOpen(false)}>X</button>
      </Modal>
    </li>
  );
};
// const Container = styled(RadiusButton)`
//   font-size: 10px;
//   text-align: center;
//   color: #555555;
// `;

// const CheckIcon = styled.img`
//   width: 8px;
//   margin-right: 8px;
// `;

// const CheckButton = ({ children }) => {
//   return (
//     <Container>
//       <CheckIcon src="/icons/icon_check_gray.png" alt="check" />
//       {children}
//     </Container>
//   );
// };

export default Checkbutton;
