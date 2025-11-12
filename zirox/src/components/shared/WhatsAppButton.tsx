'use client'

import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [isAvailable, setIsAvailable] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const checkAvailability = () => {
      const now = new Date();
      const hours = now.getHours();
      // Available from 9 AM (09:00) to 5 PM (17:00)
      setIsAvailable(hours >= 9 && hours < 17);
    };

    // Check immediately
    checkAvailability();

    // Check every minute
    const interval = setInterval(checkAvailability, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!isAvailable) {
    return null;
  }

  const handleClick = () => {
    const phoneNumber = '38348111903';
    const message = encodeURIComponent('Hello, I would like to inquire about your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 1000 }}>
      {showTooltip && (
        <div
          style={{
            position: 'absolute',
            bottom: '70px',
            right: '0',
            backgroundColor: '#fff',
            color: '#333',
            padding: '12px 16px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            whiteSpace: 'nowrap',
            fontSize: '14px',
            fontWeight: '500',
          }}
        >
          Available 9 AM - 5 PM
          <div
            style={{
              position: 'absolute',
              bottom: '-6px',
              right: '20px',
              width: '12px',
              height: '12px',
              backgroundColor: '#fff',
              transform: 'rotate(45deg)',
            }}
          />
        </div>
      )}
      <button
        onClick={handleClick}
        onMouseEnter={(e) => {
          setShowTooltip(true);
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          setShowTooltip(false);
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        }}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
        }}
        aria-label="Chat on WhatsApp - Available 9 AM to 5 PM"
      >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 0C7.164 0 0 7.164 0 16c0 2.825.738 5.488 2.031 7.794L0 32l8.394-2.031A15.926 15.926 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333c-2.544 0-4.956-.713-7.006-1.95l-.506-.3-5.231 1.269 1.269-5.231-.3-.506A13.267 13.267 0 012.667 16c0-7.363 5.97-13.333 13.333-13.333S29.333 8.637 29.333 16 23.363 29.333 16 29.333z"
          fill="#fff"
        />
        <path
          d="M23.2 19.6c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.3.1-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.7-.9-.7h-.7c-.3 0-.7.1-1.1.5-.4.4-1.5 1.5-1.5 3.6s1.5 4.2 1.7 4.5c.2.3 3 4.6 7.3 6.4 1 .4 1.8.7 2.4.9.1 0 1.9.6 2.2.6.7 0 2.1-.3 2.4-.9.3-.6.3-1.1.2-1.2-.1-.1-.3-.2-.7-.4z"
          fill="#fff"
        />
      </svg>
      </button>
    </div>
  );
};

export default WhatsAppButton;
