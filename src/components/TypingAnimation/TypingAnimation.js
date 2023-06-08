import React, { useState, useEffect } from "react";

const TypingAnimation = ({ text }) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      setTypedText(text.substring(0, currentIndex));
      currentIndex++;

      if (currentIndex > text.length) {
        clearInterval(typingInterval);
      }
    }, 75); // Adjust the typing speed by changing the interval (in milliseconds)
  }, [text]);

  return <p>{typedText}</p>;
};

export default TypingAnimation;
