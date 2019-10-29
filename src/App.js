import React from 'react';
import Clock from "./clock"
import './App.css';
import "./clock.css"

function App() {
  return (
      <div className="App">
        <span><Clock title="Los Angeles" datediff={-2} /></span>
        <span><Clock title="Chicago" datediff={0} /></span>
        <span><Clock title="New York" datediff={1} /></span>
        <span><Clock title="London" datediff={5} /></span>
        <span><Clock title="Paris" datediff={6} /></span>
        <span><Clock title="Moscow" datediff={8} /></span>
        <span><Clock title="Tokyo" datediff={9} /></span>
      </div>
  );
}
export default App;
