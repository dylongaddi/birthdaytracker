import { useState } from 'react';
import './App.css';
import BirthdayForm from './Components/BirthdayForm';

const App = () => {
  const [birthdays, setBirthdays] = useState([]);

  const addBirthday = (birthday) => {
    setBirthdays([birthday, ...birthdays])
  }

  return (
    <div className="App">
      <h1>Welcome to my app</h1>
      <BirthdayForm addBirthday={addBirthday}/>
    </div>
  );
}

export default App;
