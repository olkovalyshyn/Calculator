import React, {useState} from "react";

function Buttons({onClickInput}) {
  const [btn1, setBtn1 ]= useState()
//   const { secondItem, setSecondItem } = useState()
//   const hundleSubmit = e => {
//     console.log(e.currentTarget.value)
//     setBtn1(e.currentTarget.value)
  
// }

  return (
    <>
      <button value="1" onClick={onClickInput}>1</button>
      <button value="2" onClick={onClickInput}>2</button>
      <button value="3" onClick={onClickInput}>3</button>
      <button value="4" onClick={onClickInput}>4</button>
      <button value="5" onClick={onClickInput}>5</button>
      <button value="6" onClick={onClickInput}>6</button>
      <button value="7" onClick={onClickInput}>7</button>
      <button value="8" onClick={onClickInput}>8</button>
      <button value="9" onClick={onClickInput}>9</button>
    </>
  );
}

export default Buttons;
