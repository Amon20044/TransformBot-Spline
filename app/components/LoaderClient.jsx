'use client';
import { useState, useEffect } from 'react';

export default function OptimizedLoader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isDestroyed, setIsDestroyed] = useState(false);

  useEffect(() => {
    const loadingDuration = 4000; // Slightly faster for better UX
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
      loaderBox.style.transform = 'scale(2.5)'; // Larger scale for full coverage
      loaderBox.style.opacity = '0';
      loaderBox.style.transition = 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.2s ease-out';
      
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
            <div className="brand-icon"></div>
            <span className="brand-text">Amon Sharma</span>
          </div>
        </div>
        
        <div className="content">
          <h1 className="main-title">
            WE CREATE<br />
            EYE-OPENING<br />
            EXPERIENCES
          </h1>
          
          <div className="bottom-section">
            <div className="loading-text">Loading{'.'.repeat(Math.floor(progress / 25) % 4)}</div>
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
          background: linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 25%, #FED7AA 50%, #FB923C 75%, #EA580C 100%);
          transition: opacity 0.5s ease-out;
        }

        .loader-box {
          background: white;
          width: clamp(320px, 80vw, 640px); /* Responsive width */
          height: clamp(240px, 50vh, 360px); /* Responsive height */
          border-radius: 20px;
          box-shadow: 0 30px 60px -15px rgba(234, 88, 12, 0.3);
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
          width: 28px;
          height: 28px;
          background: linear-gradient(45deg, #FB923C, #EA580C);
          border-radius: 8px;
          box-shadow: 0 3px 6px rgba(234, 88, 12, 0.25);
          animation: pulse 2s infinite ease-in-out;
        }

        .brand-text {
          color: #EA580C;
          font-size: clamp(16px, 2.5vw, 20px);
          font-weight: 700;
          letter-spacing: 0.03em;
        }

        .content {
          padding: 0 clamp(20px, 5vw, 32px) clamp(16px, 4vw, 32px);
        }

        .main-title {
          font-family: 'Bebas Neue', cursive;
          font-size: clamp(36px, 10vw, 72px);
          font-weight: 400;
          line-height: 0.95;
          background: linear-gradient(135deg, #EA580C, #FB923C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 0.03em;
          margin-bottom: clamp(16px, 4vw, 32px);
          animation: textGlow 2.5s infinite alternate ease-in-out;
        }

        .bottom-section {
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
          font-family: 'Bebas Neue', cursive;
          font-size: clamp(48px, 12vw, 80px);
          font-weight: 400;
          background: linear-gradient(135deg, #EA580C, #FB923C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
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

        @keyframes textGlow {
          0% { text-shadow: 0 0 5px rgba(234, 88, 12, 0.3); }
          100% { text-shadow: 0 0 15px rgba(234, 88, 12, 0.6); }
        }

        /* Enhanced Responsive Design */
        @media (max-width: 768px) {
          .loader-box {
            width: clamp(280px, 90vw, 360px);
            height: clamp(200px, 45vh, 280px);
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