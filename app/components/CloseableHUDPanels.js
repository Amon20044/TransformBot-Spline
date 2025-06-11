'use client';

import { useState } from 'react';
import { Activity, Zap, Target, X, Cpu, Wifi, Globe } from 'lucide-react';

export function CloseableHUDPanels() {
  const [leftPanelVisible, setLeftPanelVisible] = useState(true);

  return (
    <>
      {/* Left Side HUD Panel */}
      {leftPanelVisible && (
        <div className="hud-frame-panel side-panel h-full">
          <div className="flex justify-between items-center mb-4">
            <div className="hud-label">NEURAL DIAGNOSTICS</div>
            <button 
              className="close-btn" 
              onClick={() => setLeftPanelVisible(false)}
            >
              <X className="w-3 h-3" />
            </button>
          </div>
          
          <div className="space-y-4">
            {/* System Status */}
            <div className="hud-subsection">
              <div className="hud-label mb-2">SYSTEM STATUS</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <Activity className="w-3 h-3 text-green-400" />
                  <span>CORE SYSTEMS</span>
                  <div className="status-indicator green ml-auto"></div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Zap className="w-3 h-3 text-blue-400" />
                  <span>NEURAL LINK</span>
                  <div className="status-indicator blue ml-auto"></div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Target className="w-3 h-3 text-yellow-400" />
                  <span>TRANSFORM MODE</span>
                  <div className="status-indicator yellow ml-auto"></div>
                </div>
              </div>
            </div>

            {/* Neural Network */}
            <div className="hud-subsection">
              <div className="hud-label mb-2">NEURAL NETWORK</div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>NODES ACTIVE</span>
                  <span className="text-green-400">2,847</span>
                </div>
                <div className="flex justify-between">
                  <span>SYNAPSES</span>
                  <span className="text-blue-400">94.7K</span>
                </div>
                <div className="flex justify-between">
                  <span>LEARNING RATE</span>
                  <span className="text-purple-400">0.001</span>
                </div>
              </div>
            </div>

            {/* Transform Protocols */}
            <div className="hud-subsection">
              <div className="hud-label mb-2">PROTOCOLS</div>
              <div className="space-y-1 text-xs">
                <div className="protocol-item">
                  <span>AUTOBOT</span>
                  <span className="text-green-400">READY</span>
                </div>
                <div className="protocol-item">
                  <span>VEHICLE</span>
                  <span className="text-blue-400">STANDBY</span>
                </div>
                <div className="protocol-item">
                  <span>ROBOT</span>
                  <span className="text-yellow-400">ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
