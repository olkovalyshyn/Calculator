import React, {useState} from "react";

function Buttons() {
  const { firstItem, setFirstItem } = useState()
  const { secondItem, setSecondItem } = useState()
  const hundleSubmit = e => {
    console.log(e.currentTarget.value)
    const setFirstItem = e.currentTarget.value
  
}

  return (
    <>
      <button value="1" onClick={hundleSubmit}>1</button>
      <button value="2">2</button>
      <button value="3">3</button>
      <button value="4">4</button>
      <button value="5">5</button>
      <button value="6">6</button>
      <button value="7">7</button>
      <button value="8">8</button>
      <button value="9">9</button>
    </>
  );
}

export default Buttons;
