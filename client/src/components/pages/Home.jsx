import React from 'react';
// import postcard from '../../../imgs/bgPostcard.png';

function Home() {
  const scrollCallback = () => {
    const willChange = document.querySelector('.firstN');
    const willChange2 = document.querySelector('.lastN');
    const header = document.getElementById('header');
    const rotateF = document.querySelector('.firstN');
    const rotateL = document.querySelector('.lastN');
    const fCard = document.querySelector('.ticky');
    const scroll = window.scrollY;

    fCard.style.opacity = (scroll / 100 - 5) * 0.6;

    if (scroll <= 300) {
      header.style.transform = 'translateY(-200px)';
      header.style.opacity = '0';
      rotateF.style.transform = `translateX(${window.scrollY / 10}px)`;
      rotateL.style.transform = `translateX(-${window.scrollY / 15}px)`;
    } else if (scroll > 300) {
      header.style.opacity = '1';
      header.style.transform = 'translateY(0)';
    }

    if (scroll > 1000) {
      willChange.style.willChange = 'revert-layer';
      willChange2.style.willChange = 'revert-layer';
    } else if (scroll <= 999) {
      willChange.style.willChange = 'transform';
      willChange2.style.willChange = 'transform';
    }

    if (scroll > 1100 && scroll < 1700) {
      console.log(scroll);

    }
  };

  React.useEffect(() => {
    const willChange = document.querySelector('.firstN');
    const willChange2 = document.querySelector('.lastN');
    const header = document.getElementById('header');

    willChange.style.willChange = 'transform';
    willChange2.style.willChange = 'transform';
    header.style.opacity = '0';
    window.addEventListener('scroll', scrollCallback, true);

    return () => {
      willChange.style.willChange = 'revert-layer';
      willChange2.style.willChange = 'revert-layer';
      window.removeEventListener('scroll', scrollCallback, true);
    };
  }, []);

  return (
    <div className="home">
      <div className="rotateName">
        <p>My name is</p>
        <div className="firstN"><h1>Vaughn</h1></div>
        <div className="lastN"><h1> Schneider</h1></div>
      </div>
      <div className="sticky-wrapper">
        <div className="ticky">
          <div className="fCard">
            <p>I am a</p>
            <h1 className="imgH">Software Engineer</h1>
            <h1 className="shadowH">Software Engineer</h1>
          </div>
          <div className="bCard">
            <h2>Skills</h2>
            <div className="skills">
              <h3>React</h3>
              <h3>Javascript</h3>
              <h3>Redux</h3>
              <h3>Express</h3>
              <h3>MongoDB</h3>
              <h3>MySQL</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="bgImg" />
    </div>
  );
}

export default Home;
