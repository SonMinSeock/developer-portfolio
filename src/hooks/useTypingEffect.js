import { useState, useEffect } from 'react';

export function useTypingEffect(text, speed = 100) {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsComplete(true);
        // 타이핑 완료 0.5초 후 커서 제거
        setTimeout(() => setShowCursor(false), 500);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return { displayedText, showCursor, isComplete };
}