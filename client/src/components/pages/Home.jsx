import React from 'react';
// import postcard from '../../../imgs/bgPostcard.png';

function Home() {
  const scrollCallback = () => {
    const header = document.getElementById('header');
    const rotateF = document.querySelector('.firstN');
    const rotateL = document.querySelector('.lastN');

    if (window.scrollY <= 300) {
      header.style.transform = 'translateY(-200px)';
      header.style.opacity = '0';
    } else if (window.scrollY > 300) {
      header.style.opacity = '1';
      header.style.transform = 'translateY(0)';
    }

    if (window.scrollY <= 350) {
      rotateF.style.transform = `translateX(${window.scrollY / 10}px)`;
      rotateL.style.transform = `translateX(-${window.scrollY / 15}px)`;
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
    <div className="home">
      <div className="rotateName">
        {/* <img src={postcard} alt="beach" /> */}
        <div className="firstN"><h1>Vaughn</h1></div>
        <div className="lastN"><h1> Schneider</h1></div>
      </div>
    </div>
  );
}

export default Home;
