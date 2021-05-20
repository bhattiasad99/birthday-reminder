import React from 'react';
import styles from './List.module.css'

const List = ({ birthDayArr }) => {
  return (
    <ul className={styles.list}>
      {birthDayArr.map(person => {
        return <li className={styles.listElement} key={person.id}>
          <div className={styles.imgContainer}>
            <img src={person.image} alt={person.name} className={styles.img} />
          </div>
          <div className={styles.data}>
            <span className={styles.name}>{person.name}</span>
            <span className={styles.age}>{person.age} years</span>
          </div>
        </li>
      })}
    </ul>
  );
};

export default List;
