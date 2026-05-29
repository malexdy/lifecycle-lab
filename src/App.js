import UserCard from './components/UserCard';
import React, { useState, useEffect } from 'react';
import Timer from './components/Timer';

function App() {
  const [show, setShow] = useState(true);
  const [userId, setUserId] = useState(1);
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Lifecycle Lab</h1>
      <button onClick={() => setShow(s => !s)}>
        {show ? 'Unmount Timer' : 'Mount Timer'}
      </button>
      {show && <Timer />}
      <label>
    Select User:
    <select value={userId} onChange={e => setUserId(Number(e.target.value))}>
      {[1,2,3,4,5].map(id => <option key={id} value={id}>User {id}</option>)}
    </select>
  </label>
  <UserCard userId={userId} />
    </div>
  );
}
export default App;
