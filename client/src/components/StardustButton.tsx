import React from 'react';

export const StardustButton = ({ 
  children = "Launching Soon", 
  onClick, 
  className = "",
  ...props 
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  [key: string]: any;
}) => {
  const buttonStyle = {
    '--white': '#fffdf7',
    '--bg': '#d4a574',
    '--radius': '100px',
    outline: 'none',
    cursor: 'pointer',
    border: 0,
    position: 'relative' as const,
    borderRadius: 'var(--radius)',
    backgroundColor: 'var(--bg)',
    transition: 'all 0.2s ease',
    boxShadow: `
      inset 0 0.3rem 0.9rem rgba(255, 240, 200, 0.8),
      inset 0 -0.1rem 0.3rem rgba(139, 90, 43, 0.4),
      inset 0 -0.4rem 0.9rem rgba(255, 235, 180, 0.9),
      0 1.5rem 2rem rgba(212, 165, 116, 0.25),
      0 0.5rem 1rem -0.4rem rgba(139, 90, 43, 0.3)
    `,
  };

  const wrapStyle = {
    fontSize: '16px',
    fontWeight: 600,
    color: '#8b5a2b',
    padding: '11px 24px',
    borderRadius: 'inherit',
    position: 'relative' as const,
    overflow: 'hidden',
  };

  const pStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    margin: 0,
    transition: 'all 0.2s ease',
    transform: 'translateY(2%)',
    maskImage: 'linear-gradient(to bottom, #8b5a2b 40%, transparent)',
  };

  const beforeAfterStyles = `
    .pearl-button .wrap::before,
    .pearl-button .wrap::after {
      content: "";
      position: absolute;
      transition: all 0.3s ease;
    }
    
    .pearl-button .wrap::before {
      left: -15%;
      right: -15%;
      bottom: 25%;
      top: -100%;
      border-radius: 50%;
      background-color: rgba(255, 245, 210, 0.25);
    }
    
    .pearl-button .wrap::after {
      left: 6%;
      right: 6%;
      top: 12%;
      bottom: 40%;
      border-radius: 22px 22px 0 0;
      box-shadow: inset 0 10px 8px -10px rgba(255, 240, 200, 0.9);
      background: linear-gradient(
        180deg,
        rgba(255, 245, 210, 0.5) 0%,
        rgba(255, 235, 180, 0.1) 50%,
        rgba(0, 0, 0, 0) 100%
      );
    }
    
    .pearl-button .wrap p span:nth-child(2) {
      display: none;
    }
    
    .pearl-button:hover .wrap p span:nth-child(1) {
      display: none;
    }
    
    .pearl-button:hover .wrap p span:nth-child(2) {
      display: inline-block;
    }
    
    .pearl-button:hover {
      box-shadow:
        inset 0 0.3rem 0.5rem rgba(255, 250, 220, 0.9),
        inset 0 -0.1rem 0.3rem rgba(139, 90, 43, 0.5),
        inset 0 -0.4rem 0.9rem rgba(255, 240, 200, 1),
        0 1.5rem 2rem rgba(212, 165, 116, 0.3),
        0 0.5rem 1rem -0.4rem rgba(139, 90, 43, 0.4);
    }
    
    .pearl-button:hover .wrap::before {
      transform: translateY(-5%);
    }
    
    .pearl-button:hover .wrap::after {
      opacity: 0.4;
      transform: translateY(5%);
    }
    
    .pearl-button:hover .wrap p {
      transform: translateY(-4%);
    }
    
    .pearl-button:active {
      transform: translateY(4px);
      box-shadow:
        inset 0 0.3rem 0.5rem rgba(255, 245, 210, 0.7),
        inset 0 -0.1rem 0.3rem rgba(139, 90, 43, 0.6),
        inset 0 -0.4rem 0.9rem rgba(255, 235, 180, 0.8),
        0 1.5rem 2rem rgba(212, 165, 116, 0.25),
        0 0.5rem 1rem -0.4rem rgba(139, 90, 43, 0.3);
    }
  `;

  return (
    <>
      <style>{beforeAfterStyles}</style>
      <button
        className={`pearl-button ${className}`}
        style={buttonStyle}
        onClick={onClick}
        {...props}
      >
        <div className="wrap" style={wrapStyle}>
          <p style={pStyle}>
            <span>✧</span>
            <span>✦</span>
            {children}
          </p>
        </div>
      </button>
    </>
  );
};
