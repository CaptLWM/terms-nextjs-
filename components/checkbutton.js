import React from "react";
import Modal from "react-modal";

// 여기는 자식컴포넌트 setState를 내려받아서
// const handleChange = () => {
//   if(들어가있다면,   item.id !== id ){
//     const resut = arr.filter((item)=>{return item.id!==id});
//   return ;
//   }
//   setState((prev)=>({...prev, 지금 객체를 넣어줌}))
//   )
//   }

const Checkbutton = ({
  id,
  value,
  clickcounts,
  getClickcount,
  setClickcount,
}) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  // const checkcount = () => {
  //   getCount(number + 1);
  // };
  console.log("childclickcoutns", clickcounts);
  const checkcount = () => {
    // const clickcount = [{ id: "", essential: "" }];
    const clickcount = { id: id, essential: value.isEssential };
    if (value.isEssential == true) {
      getClickcount(clickcount);
      console.log("clickcount", clickcount);
    }
  };

  return (
    <>
      <h3>
        <input name="count" type="checkbox" onClick={checkcount} />
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
