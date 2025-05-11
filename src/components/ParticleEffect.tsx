import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  life: number;
  maxLife: number;
}

const ParticleEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  
  const colors = ['#FFD700', '#FFC0CB', '#FFFFFF', '#FFA500', '#E6E6FA'];
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Create initial particles
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    const createParticles = () => {
      for (let i = 0; i < 150; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.5 + Math.random() * 4;
        particlesRef.current.push({
          x: centerX,
          y: centerY,
          size: 2 + Math.random() * 5,
          speedX: Math.cos(angle) * speed,
          speedY: Math.sin(angle) * speed,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: 1,
          life: 0,
          maxLife: 100 + Math.random() * 100
        });
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.life++;
        
        // Gradually reduce speed
        particle.speedX *= 0.99;
        particle.speedY *= 0.99;
        
        // Fade out based on life
        particle.opacity = 1 - (particle.life / particle.maxLife);
        
        // Draw particle
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Remove dead particles
      particlesRef.current = particlesRef.current.filter(
        particle => particle.life < particle.maxLife
      );
      
      // Add more particles if needed
      if (particlesRef.current.length < 10 && Math.random() > 0.8) {
        createParticles();
      }
      
      if (particlesRef.current.length > 0) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };
    
    createParticles();
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default ParticleEffect;