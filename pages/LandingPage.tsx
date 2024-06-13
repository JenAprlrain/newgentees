import React, { useEffect, useState } from 'react';
import styles from '../styles/LandingPage.module.css';

const LandingPage: React.FC = () => {
  const firstText = `Welcome TO THE FUTURE OF APPAREL`;
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [showTees, setShowTees] = useState(false);
  const [showEnterText, setShowEnterText] = useState(false);

  useEffect(() => {
    if (index < firstText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(displayedText + firstText.charAt(index));
        setIndex(index + 1);
      }, 100); // Adjust typing speed here

      return () => clearTimeout(timeoutId);
    } else {
      const pauseBeforeTees = setTimeout(() => {
        setShowTees(true);
        setShowEnterText(true);
      }, 1000); // Adjust delay here (1000ms = 1 second)

      return () => clearTimeout(pauseBeforeTees);
    }
  }, [index, displayedText, firstText]);

  const handleEnterClick = () => {
    window.location.href = '/'; // Change this to your main website route
  };

  return (
    <div className={styles.container}>
      <div className={styles.typingText}>
        {displayedText}
      </div>
      {showTees && (
        <div className={styles.animationContainer}>
          <div className={styles.teesContainer}>
            <div className={styles.teesText}>TEES</div>
            <div className={styles.teesBorder}></div>
          </div>
        </div>
      )}
      {showEnterText && (
        <div className={styles.enterTextContainer}>
          <div className={styles.enterText} onClick={handleEnterClick}>
            [ENTER]
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
