// Server-side page component
import Spline from '@splinetool/react-spline';
import { Activity, Zap, Cpu, Wifi, Globe, Target } from 'lucide-react';

export default async function Home() {
  return (
    <div className="relative w-[100vw] h-[100vh] bg-black overflow-hidden">
      {/* Enhanced CSS-Only Loading Screen - Disappears after 6 seconds */}
      <div className="loading-screen fixed inset-0 z-50 bg-black flex items-center justify-center">
        {/* Matrix Rain Background */}
        <div className="matrix-rain-container">
          <div className="matrix-column matrix-1">010101</div>
          <div className="matrix-column matrix-2">110010</div>
          <div className="matrix-column matrix-3">101110</div>
          <div className="matrix-column matrix-4">011001</div>
          <div className="matrix-column matrix-5">100111</div>
        </div>
        
        {/* Hexagon Grid Overlay */}
        <div className="hexagon-grid"></div>
        
        <div className="cyberpunk-loader">
          {/* Enhanced Robot Icon with Multiple Layers */}
          <div className="robot-container mb-8">
            <div className="robot-outer-ring"></div>
            <div className="robot-middle-ring"></div>
            <div className="robot-icon">
              <Cpu className="w-16 h-16 text-yellow-400" />
            </div>
            <div className="robot-glow"></div>
            <div className="robot-pulse-rings">
              <div className="pulse-ring ring-1"></div>
              <div className="pulse-ring ring-2"></div>
              <div className="pulse-ring ring-3"></div>
            </div>
          </div>

          {/* Enhanced Loading Text with Glitch Effects */}
          <div className="loading-text text-center mb-8">
            <h1 className="text-5xl font-mono text-yellow-400 mb-4 glitch-text" data-text="TRANSFORMBOT">
              TRANSFORMBOT
            </h1>
            <div className="subtitle text-cyan-400 font-mono text-sm mb-6 tracking-widest">
              ◤ NEURAL INTERFACE SYSTEM ◥
            </div>
            <div className="loading-messages text-yellow-400 font-mono text-lg">
              <div className="message message-1">⚡ INITIALIZING NEURAL MATRIX...</div>
              <div className="message message-2">🔧 CALIBRATING TRANSFORMATION PROTOCOLS...</div>
              <div className="message message-3">🌐 ESTABLISHING QUANTUM LINK...</div>
              <div className="message message-4">💎 LOADING CYBERNETIC INTERFACE...</div>
              <div className="message message-5">✨ TRANSFORMATION SEQUENCE READY</div>
            </div>
          </div>

          {/* Enhanced Progress Bar with Multiple Layers */}
          <div className="progress-container w-96 mb-6">
            <div className="progress-bar-wrapper">
              <div className="progress-bar">
                <div className="progress-fill"></div>
                <div className="progress-scanner"></div>
                <div className="progress-segments"></div>
              </div>
              <div className="progress-glow"></div>
            </div>
            <div className="progress-text text-yellow-400 font-mono text-xs mt-3 text-center">
              <div className="flex justify-between items-center">
                <span>SYSTEM INITIALIZATION</span>
                <span className="progress-percentage">0%</span>
              </div>
              <div className="progress-status mt-1 text-cyan-400">
                NEURAL PATHWAYS: <span className="status-dots">●●●○○</span>
              </div>
            </div>
          </div>

          {/* Enhanced Circuit Lines with Data Flow */}
          <div className="circuit-lines">
            <div className="circuit-line circuit-1">
              <div className="data-flow flow-1"></div>
            </div>
            <div className="circuit-line circuit-2">
              <div className="data-flow flow-2"></div>
            </div>
            <div className="circuit-line circuit-3">
              <div className="data-flow flow-3"></div>
            </div>
            <div className="circuit-line circuit-4">
              <div className="data-flow flow-4"></div>
            </div>
            <div className="circuit-nodes">
              <div className="node node-1"></div>
              <div className="node node-2"></div>
              <div className="node node-3"></div>
              <div className="node node-4"></div>
            </div>
          </div>
          
          {/* Loading Statistics */}
          <div className="loading-stats font-mono text-xs text-cyan-400 mt-4">
            <div className="stats-grid">
              <div>CPU: <span className="text-green-400">98%</span></div>
              <div>RAM: <span className="text-yellow-400">76%</span></div>
              <div>GPU: <span className="text-blue-400">89%</span></div>
              <div>NET: <span className="text-purple-400">12ms</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Visible after loading */}
      <div className="main-content opacity-0">
        {/* Enhanced Cyberpunk Container */}
        <div className="cyberpunk-container relative w-full h-full">
          {/* Advanced Background Effects */}
          <div className="background-effects">
            <div className="grid-background"></div>
            <div className="energy-streams"></div>
            <div className="holographic-overlay"></div>
          </div>
          
          {/* Enhanced Corner Decorations with Animations */}
          <div className="corner-decoration-enhanced top-left">
            <div className="corner-scanner"></div>
          </div>
          <div className="corner-decoration-enhanced top-right">
            <div className="corner-scanner"></div>
          </div>
          <div className="corner-decoration-enhanced bottom-left">
            <div className="corner-scanner"></div>
          </div>
          <div className="corner-decoration-enhanced bottom-right">
            <div className="corner-scanner"></div>
          </div>

          {/* Console Border Frame with Enhanced Effects */}
          <div className="console-frame relative w-full h-full">
            {/* Enhanced Console Header */}
            <div className="console-header">
              <div className="console-title">
                <div className="flex items-center gap-3">
                  <div className="console-dots">
                    <div className="console-dot red"></div>
                    <div className="console-dot yellow"></div>
                    <div className="console-dot green"></div>
                  </div>
                  <span className="text-cyan-400 font-mono text-sm font-bold tracking-wider">
                    TRANSFORMBOT TERMINAL v2.1.7
                  </span>
                  <div className="terminal-badge">SECURE</div>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono">
                  <div className="connection-status">
                    <span className="text-blue-400">SSH://MATRIX.NEURAL.NET</span>
                    <div className="connection-indicator">
                      <span className="text-green-400 animate-pulse">●</span>
                      <span className="text-xs text-gray-400 ml-1">ENCRYPTED</span>
                    </div>
                  </div>
                  <div className="system-time text-gray-400">
                    {new Date().toLocaleTimeString()}
                  </div>
                </div>
              </div>
              <div className="header-scanline"></div>
            </div>

            {/* Enhanced Spline 3D Scene with Advanced UI */}
            <div className="spline-container relative w-full h-full console-content">
              {/* Holographic Border Effect */}
              <div className="holographic-border"></div>
              
              <Spline
                scene="https://prod.spline.design/WQME7CXYm2jadMJj/scene.splinecode"
                className="w-full h-full rounded-lg"
              />
              
              {/* Advanced HUD Elements with Enhanced Design */}
              <div className="absolute top-6 left-6 hud-panel-enhanced">
                <div className="hud-header">
                  <div className="hud-icon">⚡</div>
                  <div className="hud-title">SYSTEM STATUS</div>
                  <div className="hud-indicator online"></div>
                </div>
                <div className="hud-content space-y-3">
                  <div className="status-item">
                    <Activity className="w-4 h-4 text-green-400" />
                    <span>CORE SYSTEMS</span>
                    <div className="status-bar">
                      <div className="status-fill green" style={{width: '98%'}}></div>
                    </div>
                    <span className="status-value">98%</span>
                  </div>
                  <div className="status-item">
                    <Zap className="w-4 h-4 text-blue-400" />
                    <span>NEURAL LINK</span>
                    <div className="status-bar">
                      <div className="status-fill blue" style={{width: '87%'}}></div>
                    </div>
                    <span className="status-value">87%</span>
                  </div>
                  <div className="status-item">
                    <Target className="w-4 h-4 text-yellow-400" />
                    <span>TRANSFORM MODE</span>
                    <div className="status-bar">
                      <div className="status-fill yellow" style={{width: '100%'}}></div>
                    </div>
                    <span className="status-value">RDY</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-6 right-6 hud-panel-enhanced text-right">
                <div className="hud-header justify-end">
                  <div className="hud-indicator active"></div>
                  <div className="hud-title">NETWORK PROTOCOL</div>
                  <div className="hud-icon">🌐</div>
                </div>
                <div className="hud-content space-y-3">
                  <div className="network-item">
                    <Globe className="w-4 h-4 text-cyan-400" />
                    <span>MATRIX v2.1.7</span>
                    <div className="ping-indicator"></div>
                  </div>
                  <div className="network-item">
                    <Wifi className="w-4 h-4 text-green-400" />
                    <span>CONNECTION</span>
                    <span className="text-green-400 font-bold">STABLE</span>
                  </div>
                  <div className="network-item">
                    <Activity className="w-4 h-4 text-blue-400" />
                    <span>LATENCY</span>
                    <span className="latency-value">12ms</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 hud-panel-enhanced">
                <div className="hud-header">
                  <div className="hud-icon">🏢</div>
                  <div className="hud-title">CORPORATION</div>
                  <div className="hud-indicator secure"></div>
                </div>
                <div className="hud-content space-y-1">
                  <div className="text-cyan-400 font-bold">© 2025 TRANSFORMBOT</div>
                  <div className="text-blue-300">CYBERNETIC DIVISION</div>
                  <div className="text-xs text-gray-400">LICENSE: NEURAL-X1</div>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 hud-panel-enhanced text-right">
                <div className="hud-header justify-end">
                  <div className="hud-indicator interactive"></div>
                  <div className="hud-title">INTERACTION</div>
                  <div className="hud-icon">🎮</div>
                </div>
                <div className="hud-content space-y-1">
                  <div className="text-cyan-400 font-bold">DRAG • ZOOM • EXPLORE</div>
                  <div className="text-blue-300">NEURAL INTERFACE</div>
                  <div className="text-xs text-gray-400">HAPTIC FEEDBACK: ON</div>
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
