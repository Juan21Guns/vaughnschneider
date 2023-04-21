import React from 'react';
import ReactDOM from 'react-dom';

(() => {
  console.log('webpack worked')
})()

function App() {
  return(
    <div><p>This is now workign dsfasdf</p></div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));