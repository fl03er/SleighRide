import React, { useState } from 'react';
import RotatingBackground from './components/RotatingBackground';
import CodeOverlay from './components/CodeOverlay';
// [1] 우리가 만든 은하수 컴포넌트 불러오기
import GalaxyBackground from './components/GalaxyBackground'; 

function App() {
  // 배경 모드를 관리하는 상태 (false: 기본 사진, true: 은하수 커스텀 배경)
  const [isCustomBg, setIsCustomBg] = useState(false);

  return (
    // [2] 최상단 Wrapper: 은하수 모드일 때는 기존 검은 배경색을 없앱니다 (bg-transparent)
    <div className={`flex min-h-screen text-white font-sans selection:bg-gray-700 ${isCustomBg ? 'bg-transparent' : 'bg-[#0a0a0b]'}`}>
      
      {/* [3] 아예 최상단에 은하수 배경 배치! (isCustomBg가 true일 때만 렌더링) */}
      {isCustomBg && <GalaxyBackground />}

      <CodeOverlay />

      <aside className="fixed left-0 top-0 h-screen w-18 bg-[#141416]/80 backdrop-blur-md flex flex-col items-center py-8 space-y-12 z-30">
        <div className="flex flex-col items-center cursor-pointer group">
          <img 
            src={`${import.meta.env.BASE_URL}images/me.jpg`} 
            alt="HOME" 
            className="w-14 h-14 rounded-2xl object-cover mb-1 transition-transform group-hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          />
          <span className="text-[10px] font-bold text-gray-400">HOME</span>
        </div>

        {[
          { id: 'books', label: 'BOOKS', sub: 'Archive' },
          { id: 'reviews', label: 'GEAR', sub: 'Review' },
          { id: 'human', label: 'HFE', sub: 'Ergo' }
        ].map((item) => (
          <div key={item.id} className="flex flex-col items-center opacity-40 hover:opacity-100 transition-all cursor-pointer group">
            <div className="text-[11px] font-semi text-center leading-tight group-hover:text-white">
              {item.label}<br/>{item.sub}
            </div>
            <div className="w-1 h-1 bg-white rounded-full mt-2 scale-0 group-hover:scale-100 transition-transform"></div>
          </div>
        ))}
      </aside>

      <div className="flex-1 ml-24 relative">
        <section className="h-screen relative flex flex-col">
          
          {/* [4] Hero 섹션 배경: 은하수 모드가 아닐 때(false)만 사진 배경 렌더링 */}
          {!isCustomBg && <RotatingBackground />}
          
          <nav className="h-20 flex items-center px-10 z-20">
  <span className="text-xs font-semi uppercase tracking-[0.4em] text-white/70">
    Personal Archive
  </span>
</nav>

          <main className="flex-1 flex flex-col justify-center items-center text-center px-4 z-10">
            
            <div 
              onClick={() => setIsCustomBg(!isCustomBg)}
              className="fixed bottom-10 right-10 z-50 flex items-center space-x-3 bg-[#1a1b1e]/80 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full cursor-pointer hover:bg-[#25262b] hover:border-white/20 transition-all group shadow-2xl shadow-black/50"
            >
              <div className="w-2 h-2 bg-[#7e79e6] rounded-full animate-intense-pulse"></div>
              
              <div className="flex flex-col items-start leading-none">
                <span className="text-[9px] font-black text-[#7e79e6] tracking-widest uppercase mb-0.5">System</span>
                <span className="text-[11px] text-gray-300 group-hover:text-white transition-colors">
                  {/* 버튼 텍스트도 상황에 맞게 변경 */}
                  {isCustomBg ? 'Switch to Photo' : 'Switch to Galaxy'}
                </span>
              </div>

              <div className="w-[1px] h-4 bg-white/10 mx-1"></div>
              <span className="text-[11px] text-gray-500 group-hover:text-white transition-transform group-hover:translate-x-0.5">〉</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-8 drop-shadow-2xl">
              
            </h1>
            
            <p className="text-[10px] md:text-xs text-white max-w-xl font-semi tracking-[0.4em] uppercase text-glow-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] animate-pulse-glow mt-12">
              WRITING DOWN ABOUT PHOTOGRAPH / GEAR / BOOK
            </p>
            
            <div className="absolute bottom-16 flex flex-col items-center z-20 opacity-30">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white mb-2">Scroll Down</span>
              <span className="text-2xl animate-bounce">∨</span>
            </div>
          </main>
        </section>

        {/* [5] 하단 섹션들: 스크롤 내렸을 때도 은하수가 보이게 bg-[#0a0a0b] 투명도 조건부 처리 */}
        <section className={`px-12 py-24 space-y-32 relative z-10 transition-colors duration-500 ${isCustomBg ? 'bg-transparent' : 'bg-[#0a0a0b]'}`}>
          <div id="human" className="max-w-5xl mx-auto">
            <h2 className="text-sm font-bold tracking-[0.5em] text-gray-500 mb-8 uppercase border-b border-gray-800 pb-4">01 / Human Factors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="aspect-video bg-[#141416]/50 border border-gray-800 rounded-sm flex items-center justify-center backdrop-blur-sm">
                <span className="text-gray-600 italic font-light">Concept Image / Illustration</span>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-light mb-4 text-white leading-tight">What is the important <br/>concept I think is</h3>
                <p className="text-gray-400 leading-relaxed font-light text-lg">
                  Writing my thoughts about ergonomics.
                </p>
              </div>
            </div>
          </div>

          <div id="books" className="max-w-5xl mx-auto">
            <h2 className="text-sm font-bold tracking-[0.5em] text-gray-500 mb-8 uppercase border-b border-gray-800 pb-4">02 / Book Archive</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="group cursor-pointer">
                  {/* 카드의 배경도 살짝 투명하게 빼주면(bg-[#141416]/50) 뒤에 은하수가 비쳐 보여서 훨씬 예쁩니다! */}
                  <div className="aspect-[3/4] bg-[#141416]/50 backdrop-blur-sm border border-gray-800 mb-4 transition-all group-hover:border-white/30 group-hover:-translate-y-2"></div>
                  <h4 className="font-medium text-white tracking-tight">Book Title {i}</h4>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">Read in 2026</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;