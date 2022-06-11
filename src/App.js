import React, { useState } from 'react';

import Wrapper from './component/Wrapper/Wrapper';
import Buttons from './component/Buttons/Buttons';
import Display from './component/Display/Display';

function App() {
  const [result, setResult] = useState('');
  const handleSubmit = event => {
    setResult(result.concat(event.currentTarget.value));
  };

  const handleClear = () => {
    setResult('');
  };

  const handleBackSpace = () => {
    setResult(result.slice(0, -1));
  };

  return (
    <Wrapper>
      <Display inputValue={result} />
      <Buttons
        onClickInput={handleSubmit}
        onClear={handleClear}
        onBackSpace={handleBackSpace}
      />
    </Wrapper>
  );
}

export default App;
