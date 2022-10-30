import React from 'react';

const AboutIf = ({id, text}) => {
  return (
    <div>
      <div className="about__footer_item">
        <span className="footer__nbr">{id}</span>
        <div className="footer__wrapp">
          <span className="footer__line"></span>
          <p className="footer__text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutIf;