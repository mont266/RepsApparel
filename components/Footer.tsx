import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-center items-center">
          <a
            href="https://montforddigital.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              fontFamily: 'sans-serif',
              fontSize: '12px',
              color: '#94a3b8',
              opacity: 0.8,
              transition: 'opacity 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseOut={(e) => (e.currentTarget.style.opacity = '0.8')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="16"
              height="16"
              style={{ marginRight: '6px' }}
            >
              <defs>
                <linearGradient id="md-grad-footer" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <path
                fill="url(#md-grad-footer)"
                d="M0 32 L0 0 L12 0 L16 8 L20 0 L32 0 L32 32 L22 32 L16 20 L10 32 Z"
              />
            </svg>
            <span style={{ color: '#94a3b8' }}>
              Developed by{' '}
              <strong style={{ fontWeight: 'bold', color: '#e2e8f0' }}>
                Montford Digital
              </strong>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;