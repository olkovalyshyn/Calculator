import React, { useState } from 'react';

import Buttons from './component/Buttons/Buttons';
import Display from './component/Display/Display';

function App() {
  const [firstItem, setFirstItem] = useState();
  const [secondItem, setSecondItem] = useState();
  const hundleSubmit = event => {
    console.log('CLICK');
    console.log(event.currentTarget.value);
    setFirstItem(event.currentTarget.value);
  };

  return (
    <div>
      <Display inputValue={firstItem} />
      <Buttons onClickInput={hundleSubmit} />
    </div>
  );
}

export default App;
