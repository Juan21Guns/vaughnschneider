import React from 'react';
import Header from './Header';
import Main from './Main';

function App() {
  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const header = document.getElementById('sticky-bar');

    if (scroll < 300) {
      header.style.opacity = 0;
    } else if (scroll >= 300) {
      header.style.opacity = (1 - (400 / scroll)) * 3;
    }
  });

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
