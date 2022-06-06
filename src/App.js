import React, { useState } from 'react';

import Buttons from './component/Buttons/Buttons';
import Display from './component/Display/Display';

function App() {
  const [result, setResult] = useState('');
  // const [secondItem, setSecondItem] = useState();
  const handleSubmit = event => {
    // console.log('CLICK');
    // console.log(event.currentTarget.value);
    setResult(result.concat(event.currentTarget.value));
  };

  const handleClear = () => {
    setResult('');
  };

  const handleBackSpace = () => {
    setResult(result.slice(0, -1));
  };

  return (
    <div>
      <Display inputValue={result} />
      <Buttons
        onClickInput={handleSubmit}
        onClear={handleClear}
        onBackSpace={handleBackSpace}
      />
    </div>
  );
}

export default App;
