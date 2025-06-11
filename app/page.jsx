// Server-side page component
import Spline from '@splinetool/react-spline';
import { Activity, Zap, Cpu, Wifi, Globe, Target } from 'lucide-react';

export default async function Home() {
  return (
    <div className="relative w-[100vw] h-[100vh] bg-black overflow-hidden">
      {/* CSS-Only Loading Screen - Disappears after 6 seconds */}
      <div className="loading-screen fixed inset-0 z-50 bg-black flex items-center justify-center">
        <div className="cyberpunk-loader">
          {/* Robot Icon */}
          <div className="robot-container mb-8">
            <div className="robot-icon">
              <Cpu className="w-16 h-16 text-yellow-400" />
            </div>
            <div className="robot-glow"></div>
          </div>

          {/* Loading Text */}
          <div className="loading-text text-center mb-8">
            <h1 className="text-4xl font-mono text-yellow-400 mb-4 glitch-text">
              TRANSFORMBOT
            </h1>
            <div className="loading-messages text-yellow-400 font-mono text-lg">
              <div className="message message-1">INITIALIZING NEURAL MATRIX...</div>
              <div className="message message-2">CALIBRATING TRANSFORMATION PROTOCOLS...</div>
              <div className="message message-3">ESTABLISHING QUANTUM LINK...</div>
              <div className="message message-4">LOADING CYBERNETIC INTERFACE...</div>
              <div className="message message-5">TRANSFORMATION SEQUENCE READY</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="progress-container w-80 mb-4">
            <div className="progress-bar">
              <div className="progress-fill"></div>
              <div className="progress-scanner"></div>
            </div>
            <div className="progress-text text-yellow-400 font-mono text-xs mt-2 text-center">
              SYSTEM INITIALIZATION: <span className="progress-percentage">0%</span>
            </div>
          </div>

          {/* Circuit Lines */}
          <div className="circuit-lines">
            <div className="circuit-line circuit-1"></div>
            <div className="circuit-line circuit-2"></div>
            <div className="circuit-line circuit-3"></div>
            <div className="circuit-line circuit-4"></div>
          </div>
        </div>
      </div>

      {/* Main Content - Visible after loading */}
      <div className="main-content opacity-0">
        {/* Cyberpunk Container */}
        <div className="cyberpunk-container relative w-full h-full">
          {/* Background Grid */}
          <div className="grid-background"></div>
          
          {/* Corner Decorations */}
          <div className="corner-decoration top-left"></div>
          <div className="corner-decoration top-right"></div>
          <div className="corner-decoration bottom-left"></div>
          <div className="corner-decoration bottom-right"></div>

          {/* Console Border Frame */}
          <div className="console-frame relative w-full h-full">
            {/* Console Header */}
            <div className="console-header">
              <div className="console-title">
                <div className="flex items-center gap-2">
                  <div className="console-dot red"></div>
                  <div className="console-dot yellow"></div>
                  <div className="console-dot green"></div>
                  <span className="text-cyan-400 font-mono text-sm">TRANSFORMBOT TERMINAL v2.1</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="text-blue-400">SSH://MATRIX.NET</span>
                  <span className="text-green-400">●</span>
                </div>
              </div>
            </div>

            {/* Spline 3D Scene with Console Background */}
            <div className="spline-container relative w-full h-full console-content">
              <Spline
                scene="https://prod.spline.design/WQME7CXYm2jadMJj/scene.splinecode"
                className="w-[98vw] h-[98.5vh] rounded-lg"
              />
              
              {/* HUD Elements with Neuomorphism */}
              <div className="absolute top-6 left-6 hud-panel">
                <div className="hud-title">SYSTEM STATUS</div>
                <div className="hud-content space-y-2">
                  <div className="flex items-center gap-2">
                    <Activity className="w-3 h-3 text-green-400" />
                    <span>ONLINE</span>
                    <div className="status-indicator green"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-3 h-3 text-blue-400" />
                    <span>NEURAL LINK</span>
                    <div className="status-indicator blue"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-3 h-3 text-yellow-400" />
                    <span>TRANSFORM MODE</span>
                    <div className="status-indicator yellow"></div>
                  </div>
                </div>
              </div>

              <div className="absolute top-6 right-6 hud-panel text-right">
                <div className="hud-title">NETWORK PROTOCOL</div>
                <div className="hud-content space-y-2">
                  <div className="flex items-center gap-2 justify-end">
                    <span>MATRIX v2.1</span>
                    <Globe className="w-3 h-3 text-cyan-400" />
                  </div>
                  <div className="flex items-center gap-2 justify-end">
                    <span>STABLE</span>
                    <Wifi className="w-3 h-3 text-green-400" />
                  </div>
                  <div className="flex items-center gap-2 justify-end">
                    <span>12ms</span>
                    <Activity className="w-3 h-3 text-blue-400" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 hud-panel">
                <div className="hud-title">CORPORATION</div>
                <div className="hud-content space-y-1">
                  <div>© 2025 TRANSFORMBOT</div>
                  <div className="text-blue-300">CYBERNETIC DIVISION</div>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 hud-panel text-right">
                <div className="hud-title">INTERACTION</div>
                <div className="hud-content space-y-1">
                  <div>DRAG • ZOOM • EXPLORE</div>
                  <div className="text-blue-300">NEURAL INTERFACE</div>
                </div>
              </div>

              {/* Console Lines Overlay */}
              <div className="console-lines"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
