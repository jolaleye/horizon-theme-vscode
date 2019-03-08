import React, { useState } from 'react';
import Nav from './Nav';

export default function Component() {
  const [state, setState] = useState();

  return (
    <div>
      <Nav />
      <button onClick={() => setState(state + 1)} />
    </div>
  );
}
