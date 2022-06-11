import s from './btnStyle.module.css'
function Buttons({ onClickInput, onClear, onBackSpace }) {

  return (
    <>
            <button  onClick={onClear}>
        C
      </button>

      <button  onClick={onBackSpace}>
        back space
      </button>


      <button value="1" onClick={onClickInput}>
        1
      </button>
      <button value="2" onClick={onClickInput}>
        2
      </button>
      <button value="3" onClick={onClickInput}>
        3
      </button>
      <button value="4" onClick={onClickInput}>
        4
      </button>
      <button value="5" onClick={onClickInput}>
        5
      </button>
      <button value="6" onClick={onClickInput}>
        6
      </button>
      <button value="7" onClick={onClickInput}>
        7
      </button>
      <button value="8" onClick={onClickInput}>
        8
      </button>
      <button value="9" onClick={onClickInput}>
        9
      </button>
      <button value="+" onClick={onClickInput}>
        +
      </button>
      <button value="-" onClick={onClickInput}>
        -
      </button>
      <button value="*" onClick={onClickInput}>
        *
      </button>
      <button value="/" onClick={onClickInput}>
        /
      </button>
    </>
  );
}

export default Buttons;
