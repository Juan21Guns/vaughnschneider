import React from 'react';

function Home() {
  const scrollCallback = () => {
    const willChange = document.querySelector('.firstN');
    const willChange2 = document.querySelector('.lastN');
    const header = document.getElementById('header');
    const rotateF = document.querySelector('.firstN');
    const rotateL = document.querySelector('.lastN');
    const fCard = document.querySelector('.sticky-wrapper');
    const ticky = document.querySelector('.ticky');
    const scroll = window.scrollY;

    // TOP CARD WILL CHANGE
    if (scroll > 1000) {
      willChange.style.willChange = 'revert-layer';
      willChange2.style.willChange = 'revert-layer';
    } else if (scroll <= 999) {
      willChange.style.willChange = 'transform';
      willChange2.style.willChange = 'transform';
    }

    // HEADER and TOP CARD
    if (scroll <= 300) {
      header.style.transform = 'translateY(-200px)';
      header.style.opacity = '0';
      rotateF.style.transform = `translateX(${window.scrollY / 10}px)`;
      rotateL.style.transform = `translateX(-${window.scrollY / 15}px)`;
      fCard.style.willChange = 'opacity';
    } else if (scroll > 300) {
      header.style.opacity = '1';
      header.style.transform = 'translateY(0)';
    }

    // SKILLS TAB
    fCard.style.opacity = ((scroll / 50) - 10) * 0.15;
    if (scroll > 300 && scroll < 1800) {
      ticky.style.willChange = 'transform';
      fCard.style.willChange = 'opacity';
    } else {
      ticky.style.willChange = 'revert-layer';
      fCard.style.willChange = 'revert-layer';
    }

    console.log(scroll);

    if (scroll > 1200) {
      ticky.classList.remove('anim-2');
      ticky.classList.add('anim-1');
    } else if (scroll <= 1199 && scroll > 500) {
      ticky.classList.remove('anim-1');
      ticky.classList.add('anim-2');
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
            <div className="bCard-box">
              <p>Place Stamp Here</p>
            </div>
            <div className="bCard-vert" />
            <div className="bCard-rows">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="skills">
              <h3>React</h3>
              <div className="stars">
                <i className="fa-sharp fa-solid fa-star" />
                <i className="fa-sharp fa-solid fa-star" />
                <i className="fa-sharp fa-solid fa-star" />
                <i className="fa-sharp fa-solid fa-star" />
                <i className="fa-sharp fa-solid fa-star" />
              </div>
              <h3>Javascript</h3>
              <div className="stars">
                <i className="fa-sharp fa-solid fa-star" />
                <i className="fa-sharp fa-solid fa-star" />
                <i className="fa-sharp fa-solid fa-star" />
                <i className="fa-sharp fa-solid fa-star" />
                <i className="fa-sharp fa-solid fa-star" />
              </div>
              <h3>Redux</h3>
              <div className="stars">
                <i className="fa-sharp fa-regular fa-star" />
                <i className="fa-sharp fa-regular fa-star" />
                <i className="fa-sharp fa-regular fa-star" />
                <i className="fa-sharp fa-solid fa-star" />
                <i className="fa-sharp fa-solid fa-star" />
              </div>
              <h3>Express</h3>
              <div className="stars">
                <i className="fa-sharp fa-regular fa-star" />
                <i className="fa-sharp fa-solid fa-star" />
                <i className="fa-sharp fa-solid fa-star" />
                <i className="fa-sharp fa-solid fa-star" />
                <i className="fa-sharp fa-solid fa-star" />
              </div>
              <h3>MongoDB</h3>
              <div className="stars">
                <i className="fa-sharp fa-regular fa-star" />
                <i className="fa-sharp fa-regular fa-star" />
                <i className="fa-sharp fa-solid fa-star" />
                <i className="fa-sharp fa-solid fa-star" />
                <i className="fa-sharp fa-solid fa-star" />
              </div>
              <h3>MySQL</h3>
              <div className="stars">
                <i className="fa-sharp fa-regular fa-star" />
                <i className="fa-sharp fa-solid fa-star" />
                <i className="fa-sharp fa-solid fa-star" />
                <i className="fa-sharp fa-solid fa-star" />
                <i className="fa-sharp fa-solid fa-star" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bgImg" />
    </div>
  );
}

export default Home;
