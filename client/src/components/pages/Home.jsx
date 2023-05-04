import React from 'react';

function Home() {
  const scrollCallback = () => {
    const header = document.getElementById('header');
    if (window.scrollY < 300) {
      header.style.transform = 'translateY(-200px)';
      header.style.opacity = '0';
    } else if (window.scrollY >= 300) {
      header.style.opacity = '1';
      header.style.transform = 'translateY(0)';
    }
  };

  React.useEffect(() => {
    const header = document.getElementById('header');
    header.style.opacity = '0';
    window.addEventListener('scroll', scrollCallback, true);

    return () => {
      window.removeEventListener('scroll', scrollCallback, true);
    };
  }, []);

  return (
    <h1>Welcome to my first website!</h1>
  );
}

export default Home;
