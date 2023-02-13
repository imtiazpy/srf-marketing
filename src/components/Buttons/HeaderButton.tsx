import React from 'react';

const HeaderButton = () => {
  
  return (
    <>
      <div className="header__btn">
        <input type="checkbox" />
        <div className="btn"></div>
        <svg>
          <use xlinkHref="#shape-01" className="shape shape-01" />
          <use xlinkHref="#shape-02" className="shape shape-02" />
          <use xlinkHref="#shape-03" className="shape shape-03" />
          <use xlinkHref="#shape-04" className="shape shape-04" />
          <use xlinkHref="#shape-05" className="shape shape-05" />
        </svg>
      </div>

       {/* SVG  */}
      <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 60" id="shape-01">
          <path d="M3,57 3,34.1 43,34.1 " />
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 60" id="shape-02">
          <path d="M35.9,57 19.9,57 19.9,45 " />
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 60" id="shape-03">
          <line x1="35.9" y1="3" x2="35.9" y2="57" />
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 60" id="shape-04">
          <line x1="3" y1="34.07" x2="19.86" y2="49.97" />
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 60" id="shape-05">
          <line x1="35.94" y1="3" x2="3" y2="34.07" />
        </symbol>
      </svg>
    </>
  );
};

export default HeaderButton;