import { useState } from 'react';
import data from '../src/data'
import List from './List';


const App = () => {
  const [people, setPeople] = useState(data)
  const removeAll = () => {
    setPeople([]);
  };
  
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
      <button className='btn' onClick={removeAll}>Clear All</button>
      </section>
    </main>
  );
};
export default App;
