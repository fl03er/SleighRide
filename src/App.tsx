import React, { useState } from 'react';
import RotatingBackground from './components/RotatingBackground';

function App() {
  // 배경 모드를 관리하는 상태 (false: 기본 사진, true: 커스텀 배경)
  const [isCustomBg, setIsCustomBg] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0a0a0b] text-white font-sans selection:bg-gray-700">
      
      {/* [1] 왼쪽 사이드바: 메뉴 통합 */}
<aside className="fixed left-0 top-0 h-screen w-24 bg-[#141416]/80 backdrop-blur-md flex flex-col items-center py-8 space-y-12 z-30">
  
  {/* HOME 아이콘 영역 */}
  <div className="flex flex-col items-center cursor-pointer group">
    {/* 기존 코드: <div className="w-14 h-14 bg-white ..."><span ...>O</span></div> 
      변경 후: <img> 태그를 사용하여 이미지를 넣습니다.
    */}
    <img
      src="/images/me.jpg"  // ✅ 여기에 사용할 이미지 파일 경로를 넣으세요.
      alt="HOME"
      className="w-14 h-14 rounded-2xl object-cover mb-1 transition-transform group-hover:scale-110 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
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

      {/* [2] 메인 콘텐츠 영역 */}
      <div className="flex-1 ml-24 relative">
        
        {/* 히어로 섹션 (첫 화면) */}
        <section className="h-screen relative flex flex-col">
          {/* 배경 전환 로직: isCustomBg 상태에 따라 배경이 바뀝니다. */}
          {isCustomBg ? (
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0b] via-[#1a1b1e] to-[#0a0a0b] z-0 animate-pulse" />
          ) : (
            <RotatingBackground />
          )}
          
          <nav className="h-20 flex items-center px-10 z-20">
            <span className="text-xl font-semi uppercase tracking-widest"> Personal Archive</span>
          </nav>

          <main className="flex-1 flex flex-col justify-center items-center text-center px-4 z-10">
            
           {/* [수정됨] 오른쪽 하단에 고정된 배지 버튼 */}
{/* 오른쪽 하단 고정 버튼 */}
<div 
  onClick={() => setIsCustomBg(!isCustomBg)}
  className="fixed bottom-10 right-10 z-50 flex items-center space-x-3 bg-[#1a1b1e]/80 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full cursor-pointer hover:bg-[#25262b] hover:border-white/20 transition-all group shadow-2xl shadow-black/50"
>
  {/* [수정됨] 강렬한 펄스 효과 적용 */}
  {/* - w-2 h-2: 점 크기를 약간 키움
      - bg-[#7e79e6]: 기본 색상을 더 밝은 보라/파랑으로 변경
      - animate-intense-pulse: 방금 만든 강렬한 애니메이션 적용
      - 기존 shadow-[...] 제거 (애니메이션이 담당함)
  */}
  <div className="w-2 h-2 bg-[#7e79e6] rounded-full animate-intense-pulse"></div>
  
  <div className="flex flex-col items-start leading-none">
    <span className="text-[9px] font-black text-[#7e79e6] tracking-widest uppercase mb-0.5">System</span>
    <span className="text-[11px] text-gray-300 group-hover:text-white transition-colors">
      {isCustomBg ? 'Switch to Photo' : 'Switch to Code'}
    </span>
  </div>

  <div className="w-[1px] h-4 bg-white/10 mx-1"></div>
  <span className="text-[11px] text-gray-500 group-hover:text-white transition-transform group-hover:translate-x-0.5">›</span>
</div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-8 drop-shadow-2xl">
              glofo_2
            </h1>
            
            {/* LED Glow 효과가 적용된 텍스트 */}
            <p className="text-lg md:text-xl text-white max-w-2xl font-bold tracking-[0.3em] uppercase text-glow-white drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] animate-pulse-glow">
              PhotoGraph / Gear / Book Archive
            </p>
            
            {/* 하단 스크롤 가이드 (테두리 제거 버전) */}
            <div className="absolute bottom-16 flex flex-col items-center z-20 opacity-30">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white mb-2">Scroll Down</span>
              <span className="text-2xl animate-bounce">∨</span>
            </div>
          </main>
        </section>

        {/* [3] 아래로 내렸을 때 나오는 섹션들 (기존 코드 유지) */}
        <section className="px-12 py-24 space-y-32 bg-[#0a0a0b] relative z-10">
          <div id="human" className="max-w-5xl mx-auto">
            <h2 className="text-sm font-bold tracking-[0.5em] text-gray-500 mb-8 uppercase border-b border-gray-800 pb-4">01 / Human Factors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="aspect-video bg-[#141416] border border-gray-800 rounded-sm flex items-center justify-center">
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
                  <div className="aspect-[3/4] bg-[#141416] border border-gray-800 mb-4 transition-all group-hover:border-white/30 group-hover:-translate-y-2"></div>
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