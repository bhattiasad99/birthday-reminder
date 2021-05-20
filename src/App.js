import React, { useState } from 'react';
import data from './data';
import List from './List';
import styles from './App.module.css'
function App() {
  const [birthDays, setBirthDays] = useState(data)
  const btnClickHandler = (e) => {
    e.preventDefault();
    setBirthDays([])
  }
  return (
    <main>
      <div className={styles.card}>
        <h1>{birthDays.length} Birthdays Today</h1>
        <List birthDayArr={birthDays} />
        <button className={styles.btn} onClick={btnClickHandler}>
          Clear All
        </button>
      </div>
    </main>
  );
}

export default App;
