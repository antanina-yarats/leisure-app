import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activity, setActivity] = useState("");

  const fetchActivity = async () => {
    const response = await fetch(`http://bored.api.lewagon.com/api/activity/`);
    const data = await response.json();
    setActivity(data.activity);
  };

  useEffect(() => {
    fetchActivity();
  }, []);

  const changeActivity = () => {
    fetchActivity();
  };

  return (
    <div className='App'>
      <header className='header'>
        <h1>Find Fun Activities</h1>
      </header>
      <main className='main'>
        <div className='activity-box'>
          <h2>Your Activity:</h2>
          <p className='activity'>{activity}</p>
        </div>
        <button className='btn' onClick={changeActivity}>Find Another Activity</button>
      </main>
    </div>
  );
}

export default App;
