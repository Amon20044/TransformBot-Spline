'use client';
import { useState, useEffect } from 'react';

export default function OptimizedLoader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isDestroyed, setIsDestroyed] = useState(false);

  useEffect(() => {
    const loadingDuration = 7000; // Slightly faster for better UX
    const interval = 50; // Smoother progress updates
    const increment = 100 / (loadingDuration / interval);

    const loadingInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(loadingInterval);
          setIsComplete(true);
          setTimeout(() => startTransition(), 600); // Slight delay for completion
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(loadingInterval);
  }, []);

  const startTransition = () => {
    const loaderContainer = document.getElementById('loader');
    const loaderBox = document.getElementById('loaderBox');
    const splineContainer = document.getElementById('splineContainer');

    // Phase 1: Full-screen zoom with easing
    if (loaderBox) {
      loaderBox.style.width = '100vw';// Larger scale for full coverage
      loaderBox.style.height = '100vh';// Larger scale for full coverage
      loaderBox.style.opacity = '0';
      loaderBox.style.transition = 'all 2s cubic-bezier(0.4, 0, 0.2, 1)'; // Smooth easing

    }

    // Phase 2: Show Spline container with fade-in
    setTimeout(() => {
      if (splineContainer) {
        splineContainer.classList.add('visible');
      }

      // Phase 3: Hide loader and destroy component
      setTimeout(() => {
        if (loaderContainer) {
          loaderContainer.style.opacity = '0';
          loaderContainer.style.transition = 'opacity 0.5s ease-out';
        }
        setTimeout(() => {
          setIsDestroyed(true);
        }, 500);
      }, 1200);
    }, 1000);
  };

  if (isDestroyed) return null;

  return (
    <div className="loader-container" id="loader">
      <div className="loader-box" id="loaderBox">
        <div className="header">
          <div className="brand">
            <div className="brand-icon">
              <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g >
                  <path d="M24.3605 13.0225C23.8637 12.9412 23.3537 12.896 22.8345 12.896C22.3154 12.896 21.8046 12.9412 21.3086 13.0225C22.2607 10.8704 22.803 8.49637 22.8303 6H22.8394C22.8668 8.49637 23.409 10.8697 24.3612 13.0225H24.3605Z" fill="#EA580C" />
                  <path d="M19.7906 19.512C20.7841 19.3493 21.8042 19.2589 22.8432 19.2589C23.8822 19.2589 24.9023 19.3493 25.8957 19.512C28.1559 24.6404 31.5777 29.1491 35.8304 32.7122C36.4925 32.0474 37.1202 31.3521 37.6681 30.5913C32.5564 26.8384 28.4649 21.7921 25.8866 15.9406C24.8932 15.7779 23.8731 15.6875 22.8341 15.6875C21.795 15.6875 20.775 15.7779 19.7815 15.9406C17.2032 21.7914 13.1117 26.8377 8 30.5913C8.55068 31.3549 9.18123 32.053 9.84611 32.7206C14.103 29.1561 17.529 24.6445 19.7906 19.5127V19.512Z" fill="#EA580C" />
                  <circle cx="23.3571" cy="23.3571" r="22.0595" stroke="#EA580C" stroke-width="2.99524" />
                </g>
              </svg>
            </div>
            <span className="brand-text">SUBMISSION: AMON SHARMA</span>
          </div>
        </div>

        <div className="content">
          <h1 className="main-title">
            CREATIVE DESIGNER<br />
            SPLINE X CONTRA
          </h1>

          <div className="bottom-section">
            <div className="percentage">{Math.floor(progress)}%</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .loader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000; /* Higher z-index for prominence */
          background: linear-gradient(-55deg,rgb(233, 92, 16), #FB923C);
          transition: opacity 0.5s ease-out;
        }

        .loader-box {
          background: #FFFAEF;
          width: 60vw;
          height: 70vh;
          border-radius: 20px;
          transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.2s ease-out;
          transform-origin: center center;
          border: 1px solid rgba(251, 146, 60, 0.15);
          overflow: hidden;
        }

        .header {
          padding: clamp(16px, 4vw, 24px) clamp(20px, 5vw, 32px) 0;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .brand-icon {
          width: 20px;
          height: 20px;
          border-radius: 8px;
          animation: pulse 2s infinite ease-in-out;
        }

        .brand-text {
        font-family: 'Bebas Neue';
          color: #EA580C;
          font-size: clamp(16px, 2.5vw, 20px);
          font-weight: 500;
          letter-spacing: 0.03em;
        }

        .content {
          padding: 0 clamp(20px, 5vw, 32px) clamp(16px, 4vw, 32px);
          display: flex;
          height: 90%;
          flex-direction: column;
          align-items: stretch;
          justify-content: space-between;
        }

        .main-title {
          font-family: 'Bebas Neue', inter;
          font-size: clamp(36px, 10vw, 72px);
          font-weight: 400;
          line-height: 0.95;
          background: linear-gradient(135deg,rgb(233, 92, 16), #FB923C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 0.03em;
          margin-bottom: clamp(16px, 4vw, 32px);
          animation: textGlow 2.5s infinite alternate ease-in-out;
        }

        .bottom-section {
          bottom: 0;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: auto;
        }

        .loading-text {
          color: #C2410C;
          font-size: clamp(12px, 2vw, 16px);
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        .percentage {
          font-family: 'Bebas Neue', inter;
          font-size: clamp(48px, 12vw, 80px);
          font-weight: 400;
          background: linear-gradient(135deg, #EA580C, #FB923C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          width: 100%;
          min-width: clamp(80px, 20vw, 140px);
          text-align: right;
        }

        .spline-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          opacity: 0;
          transition: opacity 1.2s ease-in;
        }

        .spline-container.visible {
          opacity: 1;
        }

        /* Animations */
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }


        /* Enhanced Responsive Design */
        @media (max-width: 768px) {
          .loader-box {
            width: 80vw;
            height: 70vh;
          }
          
          .main-title {
            font-size: clamp(28px, 8vw, 48px);
            margin-bottom: clamp(12px, 3vw, 24px);
          }
          
          .percentage {
            font-size: clamp(36px, 10vw, 56px);
          }
          
          .header {
            padding: clamp(12px, 3vw, 16px) clamp(16px, 4vw, 20px) 0;
          }
          
          .content {
            padding: 0 clamp(16px, 4vw, 20px) clamp(12px, 3vw, 20px);
          }
        }

        @media (max-width: 480px) {
          .loader-box {
            width: clamp(240px, 95vw, 320px);
            height: clamp(180px, 40vh, 240px);
          }
          
          .main-title {
            font-size: clamp(24px, 7vw, 36px);
          }
          
          .percentage {
            font-size: clamp(32px, 9vw, 48px);
          }
          
          .brand-icon {
            width: 24px;
            height: 24px;
          }
          
          .brand-text {
            font-size: clamp(14px, 2vw, 16px);
          }
        }
      `}</style>
    </div>
  );
}