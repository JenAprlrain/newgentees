import React, { useEffect, useState } from 'react';
import styles from '../styles/LandingPage.module.css';

const LandingPage: React.FC = () => {
  const firstText = `Welcome TO THE FUTURE OF APPAREL`;
  const secondText = `Press ENTER to proceed...`;
  const [displayedFirstText, setDisplayedFirstText] = useState('');
  const [displayedSecondText, setDisplayedSecondText] = useState('');
  const [index, setIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [showTees, setShowTees] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showEnterText, setShowEnterText] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Blinking cursor speed

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (!showTees && !isErasing && index < firstText.length) {
      // Typing first text
      const timeoutId = setTimeout(() => {
        setDisplayedFirstText(firstText.slice(0, index + 1));
        setIndex(index + 1);
      }, 100); // Adjust typing speed here

      return () => clearTimeout(timeoutId);
    } else if (!showTees && !isErasing && index === firstText.length) {
      // Start erasing after a delay
      setTimeout(() => setIsErasing(true), 1000);
    } else if (isErasing && index > 0) {
      // Erasing first text
      const timeoutId = setTimeout(() => {
        setDisplayedFirstText(firstText.slice(0, index - 1));
        setIndex(index - 1);
      }, 50); // Adjust erasing speed here

      return () => clearTimeout(timeoutId);
    } else if (isErasing && index === 0) {
      // After erasing, show TEES animation
      setShowTees(true);
      setShowCursor(false); // Stop cursor after erasing
      setIsErasing(false);
    }
  }, [index, firstText, isErasing, showTees]);

  useEffect(() => {
    if (showTees && !showSecondText) {
      // Show second text after TEES animation
      setTimeout(() => setShowSecondText(true), 2000); // Delay before showing second text
    }
  }, [showTees, showSecondText]);

  useEffect(() => {
    if (showSecondText && displayedSecondText.length < secondText.length) {
      // Typing second text
      const secondTextIndex = displayedSecondText.length;
      const timeoutId = setTimeout(() => {
        setDisplayedSecondText(secondText.slice(0, secondTextIndex + 1));
      }, 100); // Adjust typing speed here

      return () => clearTimeout(timeoutId);
    } else if (showSecondText && displayedSecondText.length === secondText.length) {
      // Show ENTER button after typing second text
      setShowCursor(false); // Stop cursor after typing second text
      setShowEnterText(true);
    }
  }, [displayedSecondText, secondText, showSecondText]);

  const handleEnterClick = () => {
    window.location.href = '/'; // Change this to your main website route
  };

  return (
    <div className={styles.container}>
      <div className={styles.typingText}>
        {displayedFirstText}
        {!showTees && showCursor && <span className={styles.cursor}>_</span>}
      </div>
      {showTees && (
        <div className={styles.animationContainer}>
          <div className={styles.teesContainer}>
            <div className={styles.teesText}>TEES</div>
            <div className={styles.teesBorder}></div>
          </div>
        </div>
      )}
      {showSecondText && (
        <div className={styles.secondTextContainer}>
          {displayedSecondText}
          {showSecondText && showCursor && <span className={styles.cursor}>_</span>}
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
