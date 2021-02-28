import React from 'react';

import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <span>
      Tomato by{' '}
      <a
        href="https://www.flaticon.com/free-icon/tomato_2909922"
        title="Icongeek26"
        target="_blank"
        rel="noopener noreferrer"
      >
        Icongeek26
      </a>{' '}
      from{' '}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
      .
    </span>{' '}
    <span>
      Alarm sound by{' '}
      <a
        href="http://www.orangefreesounds.com/cool-alarm-tone-notification-sound/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Alexander
      </a>{' '}
      from{' '}
      <a href="http://www.orangefreesounds.com/" target="_blank" rel="noopener noreferrer">
        www.orangefreesounds.com/
      </a>
      .
    </span>
  </footer>
);

export default Footer;
