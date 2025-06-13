// Server-side page component
import Spline from '@splinetool/react-spline';
import { Cpu, Bolt, Wrench, Cable, FileHeart, Rotate3d } from 'lucide-react';
import { CloseableHUDPanels } from './components/CloseableHUDPanels';

export default function Home() {
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
              <div className="message message-1"><Bolt className="w-8 h-8 text-yellow-400"/> INITIALIZING NEURAL MATRIX...</div>
              <div className="message message-2"><Wrench className="w-8 h-8 text-yellow-400"/>CALIBRATING TRANSFORMATION PROTOCOLS...</div>
              <div className="message message-3"><Cable className="w-8 h-8 text-yellow-400"/>ESTABLISHING QUANTUM LINK...</div>
              <div className="message message-4"><FileHeart className="w-8 h-8 text-yellow-400"/>LOADING CYBERNETIC INTERFACE...</div>
              <div className="message message-5"><Rotate3d className="w-8 h-8 text-yellow-400"/>TRANSFORMATION SEQUENCE READY</div>
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

      {/* Main Content - Framed Spline Scene with HUD Overlays */}
      <div className="main-content opacity-0 relative w-full h-full">
        {/* Main HUD Frame Container */}
        <div className="hud-frame-container relative w-full h-full">
          
          {/* Top HUD Bar */}
          <div className="top-hud-bar absolute top-0 left-0 right-0 z-20">
            <div className="hud-frame-panel top-panel">
              <div className="flex justify-between items-center">
                <div className="hud-section">
                  <div className="hud-label">TRANSFORMBOT</div>
                  <div className="hud-value">NEURAL INTERFACE v2.1</div>
                </div>
                <div className="hud-section text-center">
                  <div className="hud-label">STATUS</div>
                  <div className="hud-value text-green-400">ONLINE • ACTIVE</div>
                </div>
                <div className="hud-section text-right">
                  <div className="hud-label">PROTOCOL</div>
                  <div className="hud-value text-cyan-400">MATRIX LINK</div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Side HUD Panel */}
          <div className="left-hud-panel absolute left-0 top-16 bottom-16 z-20">
            <CloseableHUDPanels />
          </div>

          {/* Right Side HUD Panel */}
          <div className="right-hud-panel absolute right-0 top-16 bottom-16 z-20">
            <div className="hud-frame-panel side-panel h-full">
              <div className="hud-section mb-4">
                <div className="hud-label">SYSTEM METRICS</div>
              </div>
              <div className="space-y-3">
                <div className="metric-row">
                  <span>CPU LOAD</span>
                  <div className="metric-bar">
                    <div className="metric-fill" style={{width: '78%'}}></div>
                  </div>
                  <span className="text-green-400">78%</span>
                </div>
                <div className="metric-row">
                  <span>MEMORY</span>
                  <div className="metric-bar">
                    <div className="metric-fill" style={{width: '65%'}}></div>
                  </div>
                  <span className="text-blue-400">65%</span>
                </div>
                <div className="metric-row">
                  <span>NEURAL NET</span>
                  <div className="metric-bar">
                    <div className="metric-fill" style={{width: '92%'}}></div>
                  </div>
                  <span className="text-yellow-400">92%</span>
                </div>
              </div>
              
              <div className="hud-section mt-6 mb-4">
                <div className="hud-label">CONNECTIONS</div>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>QUANTUM LINK</span>
                  <span className="text-green-400">STABLE</span>
                </div>
                <div className="flex justify-between">
                  <span>DATA STREAM</span>
                  <span className="text-blue-400">12ms</span>
                </div>
                <div className="flex justify-between">
                  <span>ENCRYPTION</span>
                  <span className="text-purple-400">AES-256</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom HUD Bar */}
          <div className="bottom-hud-bar absolute bottom-0 left-0 right-0 z-20">
            <div className="hud-frame-panel bottom-panel">
              <div className="flex justify-between items-center text-xs">
                <div className="hud-section">
                  <span className="text-gray-400">© 2025 TRANSFORMBOT INDUSTRIES</span>
                </div>
                <div className="hud-section">
                  <span className="text-cyan-400">INTERACT: DRAG • ZOOM • EXPLORE</span>
                </div>
                <div className="hud-section">
                  <span className="text-blue-400">LATENCY: 12ms</span>
                </div>
              </div>
            </div>
          </div>

          {/* Central Spline Frame */}
          <div className="spline-frame absolute z-10">
            <div className="spline-container">
              <div className="spline-border-frame">
                <Spline
                  scene="https://prod.spline.design/ZkNV8a7tlYNewcgo/scene.splinecode"
                  className="w-screen h-screen rounded-lg"
                />
                
                {/* Frame Corner Indicators */}
                <div className="frame-corner top-left"></div>
                <div className="frame-corner top-right"></div>
                <div className="frame-corner bottom-left"></div>
                <div className="frame-corner bottom-right"></div>
                
                {/* Scan Lines Overlay */}
                <div className="scan-lines-overlay"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
