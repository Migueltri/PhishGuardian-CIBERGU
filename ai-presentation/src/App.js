import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere, Torus } from '@react-three/drei';

function Brain({ position = [0, 0, 0], scale = 1 }) {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#3b82f6" wireframe />
      </Sphere>
      {[...Array(8)].map((_, i) => (
        <Sphere key={i} args={[0.15, 16, 16]} position={[
          Math.cos(i * Math.PI / 4) * 1.2,
          Math.sin(i * Math.PI / 4) * 0.5,
          Math.sin(i * Math.PI / 4) * 1.2
        ]}>
          <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.5} />
        </Sphere>
      ))}
    </group>
  );
}

function NeuralNetwork({ position = [0, 0, 0], scale = 1 }) {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  const layers = [
    { nodes: 4, x: -2 },
    { nodes: 6, x: 0 },
    { nodes: 4, x: 2 }
  ];

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {layers.map((layer, layerIdx) => (
        <group key={layerIdx}>
          {[...Array(layer.nodes)].map((_, nodeIdx) => {
            const y = (nodeIdx - layer.nodes / 2) * 0.8;
            return (
              <Sphere key={nodeIdx} args={[0.15, 16, 16]} position={[layer.x, y, 0]}>
                <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.3} />
              </Sphere>
            );
          })}
        </group>
      ))}
    </group>
  );
}

function Robot({ position = [0, 0, 0], scale = 1 }) {
  const groupRef = useRef();
  const armRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
    if (armRef.current) {
      armRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <Box args={[1, 1.5, 0.8]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#f59e0b" />
      </Box>
      <Box args={[1.2, 0.8, 0.8]} position={[0, 1.2, 0]}>
        <meshStandardMaterial color="#f59e0b" />
      </Box>
      <Sphere args={[0.15, 16, 16]} position={[-0.3, 1.3, 0.4]}>
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.8} />
      </Sphere>
      <Sphere args={[0.15, 16, 16]} position={[0.3, 1.3, 0.4]}>
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.8} />
      </Sphere>
      <group ref={armRef}>
        <Box args={[0.3, 1.2, 0.3]} position={[-0.75, -0.3, 0]}>
          <meshStandardMaterial color="#f59e0b" />
        </Box>
      </group>
      <Box args={[0.3, 1.2, 0.3]} position={[0.75, -0.3, 0]}>
        <meshStandardMaterial color="#f59e0b" />
      </Box>
    </group>
  );
}

function DataCubes({ position = [0, 0, 0], scale = 1 }) {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.children.forEach((child, i) => {
        child.position.y = Math.sin(state.clock.elapsedTime + i) * 0.3;
      });
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {[...Array(5)].map((_, i) => (
        <Box key={i} args={[0.5, 0.5, 0.5]} position={[
          Math.cos(i * Math.PI * 2 / 5) * 1.5,
          0,
          Math.sin(i * Math.PI * 2 / 5) * 1.5
        ]}>
          <meshStandardMaterial 
            color={['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'][i]} 
            wireframe 
          />
        </Box>
      ))}
    </group>
  );
}

function Globe({ position = [0, 0, 0], scale = 1 }) {
  const groupRef = useRef();
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <Sphere args={[1.2, 32, 32]}>
        <meshStandardMaterial color="#3b82f6" wireframe />
      </Sphere>
      {[...Array(20)].map((_, i) => (
        <Sphere key={i} args={[0.08, 8, 8]} position={[
          Math.random() * 2 - 1,
          Math.random() * 2 - 1,
          Math.random() * 2 - 1
        ].map(v => v * 1.3)}>
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.5} />
        </Sphere>
      ))}
    </group>
  );
}

function Slide1() {
  return (
    <>
      <Brain position={[0, 0, 0]} scale={1.5} />
      <Text
        position={[0, 3, 0]}
        fontSize={0.8}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        Inteligencia Artificial
      </Text>
      <Text
        position={[0, 2.2, 0]}
        fontSize={0.4}
        color="#3b82f6"
        anchorX="center"
        anchorY="middle"
      >
        El Futuro de la Humanidad
      </Text>
    </>
  );
}

function Slide2() {
  return (
    <>
      <NeuralNetwork position={[0, 0.5, 0]} scale={0.8} />
      <Text
        position={[0, 3, 0]}
        fontSize={0.6}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        ¿Qué es la IA?
      </Text>
      <Text
        position={[-3, -1.5, 0]}
        fontSize={0.25}
        color="#10b981"
        anchorX="center"
        anchorY="middle"
        maxWidth={3}
      >
        • Aprendizaje Automático{'\n'}
        • Redes Neuronales{'\n'}
        • Procesamiento de Lenguaje
      </Text>
      <Text
        position={[3, -1.5, 0]}
        fontSize={0.25}
        color="#8b5cf6"
        anchorX="center"
        anchorY="middle"
        maxWidth={3}
      >
        • Visión por Computadora{'\n'}
        • Deep Learning{'\n'}
        • IA Generativa
      </Text>
    </>
  );
}

function Slide3() {
  return (
    <>
      <Robot position={[0, 0, 0]} scale={1.2} />
      <Text
        position={[0, 3, 0]}
        fontSize={0.6}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        Automatización
      </Text>
      <Text
        position={[0, -2.5, 0]}
        fontSize={0.3}
        color="#f59e0b"
        anchorX="center"
        anchorY="middle"
        maxWidth={6}
      >
        Transformando industrias y procesos
      </Text>
    </>
  );
}

function Slide4() {
  return (
    <>
      <DataCubes position={[0, 0.5, 0]} scale={1} />
      <Text
        position={[0, 3, 0]}
        fontSize={0.6}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        Modelos de IA
      </Text>
      <Text
        position={[-2.5, -1.8, 0]}
        fontSize={0.22}
        color="#3b82f6"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.5}
      >
        GPT-4{'\n'}
        Modelos de Lenguaje
      </Text>
      <Text
        position={[0, -1.8, 0]}
        fontSize={0.22}
        color="#8b5cf6"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.5}
      >
        DALL-E{'\n'}
        Generación de Imágenes
      </Text>
      <Text
        position={[2.5, -1.8, 0]}
        fontSize={0.22}
        color="#10b981"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.5}
      >
        AlphaFold{'\n'}
        Ciencia y Medicina
      </Text>
    </>
  );
}

function Slide5() {
  return (
    <>
      <Globe position={[0, 0, 0]} scale={1.2} />
      <Text
        position={[0, 3, 0]}
        fontSize={0.6}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        Impacto Global
      </Text>
      <Text
        position={[-3, -2, 0]}
        fontSize={0.25}
        color="#10b981"
        anchorX="center"
        anchorY="middle"
        maxWidth={3}
      >
        Beneficios:{'\n'}
        • Salud mejorada{'\n'}
        • Educación accesible{'\n'}
        • Eficiencia energética
      </Text>
      <Text
        position={[3, -2, 0]}
        fontSize={0.25}
        color="#ef4444"
        anchorX="center"
        anchorY="middle"
        maxWidth={3}
      >
        Desafíos:{'\n'}
        • Ética y privacidad{'\n'}
        • Desempleo tecnológico{'\n'}
        • Sesgos algorítmicos
      </Text>
    </>
  );
}

function Slide6() {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <>
      <group ref={groupRef}>
        <Torus args={[1.5, 0.3, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#8b5cf6" wireframe />
        </Torus>
        <Sphere args={[0.8, 32, 32]}>
          <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.3} />
        </Sphere>
      </group>
      <Text
        position={[0, 3, 0]}
        fontSize={0.7}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        El Futuro con IA
      </Text>
      <Text
        position={[0, -2.5, 0]}
        fontSize={0.35}
        color="#8b5cf6"
        anchorX="center"
        anchorY="middle"
        maxWidth={7}
      >
        Colaboración humano-IA para un mundo mejor
      </Text>
    </>
  );
}

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { component: Slide1, title: "Portada" },
    { component: Slide2, title: "¿Qué es la IA?" },
    { component: Slide3, title: "Automatización" },
    { component: Slide4, title: "Modelos de IA" },
    { component: Slide5, title: "Impacto Global" },
    { component: Slide6, title: "El Futuro" }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} />
        <CurrentSlideComponent />
        <OrbitControls enableZoom={true} enablePan={false} />
      </Canvas>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black/50 backdrop-blur-md px-6 py-4 rounded-full">
        <button
          onClick={prevSlide}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 hover:scale-105"
        >
          ← Anterior
        </button>
        <div className="text-white font-semibold">
          {currentSlide + 1} / {slides.length}
        </div>
        <button
          onClick={nextSlide}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 hover:scale-105"
        >
          Siguiente →
        </button>
      </div>

      <div className="absolute top-8 left-8 bg-black/50 backdrop-blur-md px-6 py-3 rounded-lg">
        <h2 className="text-white text-xl font-bold">{slides[currentSlide].title}</h2>
      </div>

      <div className="absolute top-8 right-8 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg">
        <p className="text-white text-sm">Usa ← → o los botones para navegar</p>
      </div>

      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-blue-500 w-8' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
