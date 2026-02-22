import React, { useEffect, useState } from 'react';

const CodeOverlay = () => {
  const [logs, setLogs] = useState([]);
  
  const snippets = [
    "const [isCustomBg, setIsCustomBg] = useState(false);",
    "export default App;",
    "backdrop-blur-md flex flex-col items-center",
    "shadow-[0_0_20px_rgba(0,0,0,0.5)]",
    "rendering_galaxy_particles... OK",
    "Personal Archive v2.0.26",
    "system_status: stable",
    "fetching_assets_from_source... DONE",
    "opacity: 0.4; filter: blur(0px);"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = {
        id: Math.random().toString(36).substr(2, 9),
        text: snippets[Math.floor(Math.random() * snippets.length)],
      };
      
      setLogs(prev => [...prev.slice(-5), newLog]); 
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-12 left-32 z-40 pointer-events-none font-mono">
      <div className="flex flex-col space-y-1.5">
        {logs.map((log, index) => (
          <div
            key={log.id}
            className={`relative text-[10px] tracking-tight transition-opacity duration-1000 ${
              index === logs.length - 1 ? 'text-white/80' : 'text-white/20'
            }`}
            style={{
              animation: index === logs.length - 1 ? 'glitch 0.4s ease-in-out' : 'none'
            }}
          >
            {log.text}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes glitch {
          0% {
            transform: translate(0);
            opacity: 0;
          }
          20% {
            transform: translate(-2px, 1px);
            opacity: 0.8;
            clip-path: inset(10% 0 30% 0);
          }
          40% {
            transform: translate(2px, -1px);
            clip-path: inset(40% 0 10% 0);
          }
          60% {
            transform: translate(-1px, 0);
            clip-path: inset(0 0 50% 0);
          }
          80% {
            transform: translate(1px, 1px);
            opacity: 1;
          }
          100% {
            transform: translate(0);
            opacity: 0.8;
            clip-path: none;
          }
        }
      `}</style>
    </div>
  );
};

export default CodeOverlay;