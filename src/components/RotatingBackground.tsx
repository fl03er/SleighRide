import React, { useState, useEffect } from 'react';

// [중요] 경로와 확장자를 다시 확인하세요. 
// 아래 코드는 src/assets/bg-images 폴더의 모든 .png와 .PNG 파일을 가져옵니다.
const imageModules = import.meta.glob('../assets/bg-images/*.{png,PNG}', { eager: true });
const images = Object.values(imageModules).map((mod: any) => mod.default);

const RotatingBackground = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // 사진이 잘 불러와졌는지 확인하는 로그 (브라우저 콘솔에서 확인 가능)
    console.log("로드된 이미지 목록:", images);
    
    if (images.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // 사진이 아예 안 불러와졌을 경우를 대비한 배경색
  if (images.length === 0) {
    return <div className="absolute inset-0 bg-[#0a0a0b] z-0" />;
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0a0a0b]">
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-2000 ease-in-out ${
            i === index ? "opacity-40" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className="absolute inset-0 bg-black/60 z-[1]" />
    </div>
  );
};

export default RotatingBackground;