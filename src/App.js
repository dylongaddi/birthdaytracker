import React from 'react';
import { useState } from 'react';
import './App.css';
import BirthdayForm from './Components/BirthdayForm';
import BirthdayList from './Components/BirthdaysList';


const App = () => {
  const [birthdays, setBirthdays] = useState([]);
  //adds birthdays to list of birthdays to be rendered
  const addBirthday = (birthday) => {
    setBirthdays([birthday, ...birthdays])

    // this pushes to beginning of arr/unshift - setBirthdays([birthday, ...birthdays])
  }

  return (
    <div className="App">
      <h1>Welcome to my app</h1>
      <BirthdayForm addBirthday={addBirthday}/>
      <BirthdayList birthdays={birthdays} />
    </div>
  );
}

export default App;
