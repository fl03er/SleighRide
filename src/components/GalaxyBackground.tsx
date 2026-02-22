import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import vertexShader from '../shaders/vertex.glsl?raw';
import fragmentShader from '../shaders/fragment.glsl?raw';

const GalaxyBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 45); 
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio); 
    renderer.setClearColor(0x000000); 
    containerRef.current.appendChild(renderer.domElement);

    const composer = new EffectComposer(renderer);
    composer.setPixelRatio(window.devicePixelRatio);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.6, 0.1, 0.1));

    const count = 200000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const randomness = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const type = Math.random();
      const minRadius = 4.0; 

      if (type < 0.6) { 
        const radius = Math.pow(Math.random(), 2.0) * 20.0 + minRadius;
        const angle = Math.random() * Math.PI * 2;
        
        const stretchX = 1.0 + Math.max(0, Math.cos(angle)) * 0.45;

        positions[i3] = Math.cos(angle) * radius * 1.8 * stretchX; 
        positions[i3 + 1] = (Math.random() - 0.5) * 3.5 * (1.0 - minRadius/radius); 
        positions[i3 + 2] = Math.sin(angle) * radius * 0.5;
        
        sizes[i] = Math.random() * 1.0 + 0.2;

      } else if (type < 0.85) {
        const isTop = Math.random() > 0.5 ? 1 : -1;
        const height = Math.pow(Math.random(), 1.2) * 35.0 + minRadius; 
        const spread = height * 0.3 + 1.0; 
        
        const angle = Math.random() * Math.PI * 2;
        const r = Math.random() * spread;

        const heightRatio = (height - minRadius) / 35.0; 
        const bendX = Math.pow(heightRatio, 2.0) * 15.0; 

        positions[i3] = Math.cos(angle) * r - (bendX * isTop);
        positions[i3 + 1] = height * isTop;
        positions[i3 + 2] = Math.sin(angle) * r;

        sizes[i] = Math.random() * 1.2 + 0.3; 

      } else {
        const r = Math.pow(Math.random(), 1.5) * 100.0 + 15.0;
        const theta = Math.random() * Math.PI * 2; 
        const phi = Math.acos(Math.random() * 2 - 1); 

        positions[i3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i3 + 2] = r * Math.cos(phi);

        sizes[i] = Math.random() * 0.5 + 0.1;
      }

      randomness[i3] = Math.random();
      randomness[i3 + 1] = Math.random();
      randomness[i3 + 2] = Math.random();
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aRandom', new THREE.BufferAttribute(randomness, 3));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: window.devicePixelRatio },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uColorBase: { value: new THREE.Color('#ffffff') }, 
        uColorRim: { value: new THREE.Color('#ff55aa') }, 
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    
    points.rotation.z = -Math.PI / 6; 
    points.rotation.x = Math.PI / 8;

    scene.add(points);

    const clock = new THREE.Clock();
    const targetMouse = new THREE.Vector2(0, 0);

    const handleMouseMove = (e: MouseEvent) => {
      targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      const delta = clock.getDelta();
      
      material.uniforms.uTime.value = elapsedTime * 0.1; 
      material.uniforms.uMouse.value.lerp(targetMouse, 0.05);

      camera.position.x += (targetMouse.x * 15 - camera.position.x) * 0.05;
      camera.position.y += (targetMouse.y * 15 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0); 
      
      points.rotateY(-delta * 0.02);
      
      composer.render();
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      composer.dispose();
      geometry.dispose();
      material.dispose();
      if (containerRef.current) containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, background: 'black' }} />;
};

export default GalaxyBackground;