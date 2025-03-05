'use client';
import React, { useRef, useEffect } from 'react';
import { Canvas, extend, useFrame, ReactThreeFiber } from '@react-three/fiber';
import THREE, {
  Euler,
  Mesh,
  Group,
  MeshStandardMaterial,
  VideoTexture,
  Color,
  PointLight,
  AdditiveBlending,
} from 'three';
import {
  useGLTF,
  shaderMaterial,
  SoftShadows,
  OrbitControls,
} from '@react-three/drei';
import gsap from 'gsap';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { JSX } from 'react'; // ✅ Add this import

// Define the custom Glow Shader Material
const GlowShaderMaterial = shaderMaterial(
  {
    color: new Color('#192e35'), // Base sphere color
    glowColor: new Color('#23a6d5'), // Glow effect color
    glowIntensity: 0.5, // Adjust glow effect
  },
  // Vertex Shader
  `
  varying vec3 vNormal;
  varying vec3 vPosition;
  
  void main() {
    vNormal = normal;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,
  // Fragment Shader (Glow Effect)
  `
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform vec3 color;
  uniform vec3 glowColor;
  uniform float glowIntensity;

  void main() {
    float dist = length(vPosition);
    float intensity = exp(-dist * glowIntensity); // Glow fades outward
    vec3 blendedColor = mix(color, glowColor, intensity);
    gl_FragColor = vec4(blendedColor,1.0);
  }
  `
);

// ✅ Register the shader material with React Three Fiber
extend({ GlowShaderMaterial });

declare module '@react-three/fiber' {
  interface ThreeElements {
    glowShaderMaterial: JSX.IntrinsicElements['shaderMaterial'] & {
      color: THREE.Color;
      glowColor: THREE.Color;
      glowIntensity: number;
    };
  }
}
function GlowingSphere() {
  const sphereRef = useRef<Mesh>(null);
  const lowersphereRef = useRef<Mesh>(null);
  const topLight = useRef<PointLight>(null);
  const lowerLight = useRef<PointLight>(null);

  useEffect(() => {
    if (lowersphereRef.current) {
      gsap.to(lowersphereRef.current.position, {
        x: 0,
        y: -1,
        z: -1,
        duration: 3,
        delay: 4,
      });
    }
    if (lowerLight.current) {
      gsap.to(lowerLight.current.position, {
        x: 0,
        y: 0,
        z: -1,
        duration: 3,
        delay: 4,
      });
    }
    if (sphereRef.current) {
      gsap.to(sphereRef.current.position, {
        x: 2,
        y: 2.3,
        z: 0,
        duration: 1,
        delay: 4,
      });
    }
  }, []);

  // useFrame(() => {
  //   if (lowersphereRef.current) {
  //     lowersphereRef.current.material.uniforms.color.value.set("#192e35");
  //     lowersphereRef.current.material.uniforms.glowColor.value.set("#23a6d5");
  //   }
  // });

  return (
    <group>
      {/* Glowing Sphere */}

      <mesh castShadow ref={lowersphereRef} position={[10, -10, 3]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color={new Color('#fff')} // White color
          roughness={0} // Smooth surface
          metalness={0} // No metallic effect
          emissive={new Color('#23a6d5')} // Emissive glow (orange)
          emissiveIntensity={10.08} // Adjust glow intensity
          envMapIntensity={50} // Reflection intensity
          blending={AdditiveBlending} // Glow blending
          vertexColors={true} // Vertex coloring enabled
        />
        {/* <meshStandardMaterial
          color={new Color('#fff')} // Set the base color
          emissive={new Color('#23a6d5')} // Make it glow in the same color
          emissiveIntensity={20} // Increase brightness
        /> */}
        {/* <glowShaderMaterial
          attach="material"
          color={new Color('#192e35')}
          glowColor={new Color('#23a6d5')}
          glowIntensity={-2}
        /> */}
      </mesh>

      <mesh ref={sphereRef} position={[2, 2.8, 0]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial
          color={new Color('#192e35')}
          emissive={new Color('#192e35')}
          emissiveIntensity={20}
        />
      </mesh>

      {/* Light Source */}
      <pointLight
        ref={topLight}
        position={[2.6, 0, 0]}
        intensity={10}
        color={'#192e35'}
      />
      <pointLight
        ref={lowerLight}
        position={[10, -20, -3]}
        intensity={10}
        color={'#192e35'}
      />
    </group>
  );
}

function Model() {
  const { scene, nodes } = useGLTF('/models/macbook/scene.gltf');
  const modelRef = useRef<Group | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (modelRef.current) {
      // Hide model initially
      modelRef.current.visible = false;

      // After 4 seconds, make it visible and animate opacity
      setTimeout(() => {
        if (modelRef.current) {
          modelRef.current.visible = true; // Show model

          gsap.fromTo(
            modelRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 2 }
          );
        }
      }, 4000);

      // Other animations (rotation, position, scale)
      gsap.to(modelRef.current.rotation, {
        y: (220 * Math.PI) / 180, // Convert degrees to radians
        duration: 2,
        ease: 'power1.inOut',
        delay: 4,
      });

      gsap.to(modelRef.current.scale, {
        x: 0.08,
        y: 0.08,
        z: 0.08,
        duration: 2,
        ease: 'power1.inOut',
        delay: 4,
      });

      gsap.to(modelRef.current.position, {
        y: -0.8,
        x: 2,
        duration: 2,
        ease: 'power1.inOut',
        delay: 4,
      });
    }
  }, []);

  useEffect(() => {
    if (!videoRef.current) {
      const video = document.createElement('video');
      video.src = '/videos/screenplay2.mov'; // Replace with your video path
      video.loop = true;
      video.muted = true;
      video.autoplay = true;
      video.play();
      videoRef.current = video;
    }

    if (nodes.Object_123) {
      const videoTexture = new VideoTexture(videoRef.current!);
      videoTexture.colorSpace = 'srgb'; // Ensures correct color display

      (nodes.Object_123 as any).material = new MeshStandardMaterial({
        map: videoTexture, // Set the video texture
        emissiveMap: videoTexture, // Use video as an emissive texture
        emissive: new Color('white'), // Set emissive color
        emissiveIntensity: 1.5, // Increase brightness/glow
        metalness: 0.9,
        roughness: 0.25,
        transparent: true,
        opacity: 1,
      });
    }
  }, [nodes]);

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = true; // ✅ Make all meshes cast shadows
      }
    });
  }, [scene]);

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={[1, 0, 0]}
      scale={0.05}
      rotation={
        new Euler(
          (190 * Math.PI) / 180, // Convert degrees to radians
          (200 * Math.PI) / 180,
          (190 * Math.PI) / 180
        )
      }
    />
  );
}

function Plane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.4, 0]} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <shadowMaterial opacity={0.2} />
      {/* <meshStandardMaterial color="gray" /> */}
    </mesh>
  );
}

function HeroScene() {
  const lightRef = useRef<THREE.DirectionalLight>(null);

  useEffect(() => {
    if (lightRef.current) {
      lightRef.current.shadow.mapSize.width = 4096;
      lightRef.current.shadow.mapSize.height = 4096;
      lightRef.current.shadow.radius = 10;
      lightRef.current.shadow.camera.near = 1;
      lightRef.current.shadow.camera.far = 20;
    }
  }, []);

  return (
    // <div className="absolute right-0 top-0 z-10 h-full w-full">
    <Canvas
      shadows
      camera={{ position: [0, 2, 5], fov: 50 }}
      gl={{ antialias: true }}
    >
      <ambientLight intensity={1} castShadow />
      <ambientLight intensity={0.5} />
      {/* <directionalLight
        ref={lightRef}
        position={[5, 5, 5]}
        castShadow
        intensity={1}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
      /> */}
      <spotLight
        ref={lightRef}
        position={[-2, 4, 0]}
        castShadow
        intensity={2}
      />

      <pointLight position={[10, 10, 10]} />
      <group castShadow position={[-2, 0, 0]}>
        <Model />
        <GlowingSphere />
      </group>
      <SoftShadows size={20} samples={20} focus={1} />
      <pointLight
        position={[20, 10, 10]}
        color={new Color('blue')}
        // shadow-mapSize-width={1024}
        // shadow-mapSize-height={1024}
      />

      {/* TRY Shadow Material NEEDS FIX */}
      {/* <mesh rotation={[-2, 0, -2]} position={[0, -1.7, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <shadowMaterial opacity={0.5} />
        <meshStandardMaterial
          color={new Color('#fff')} // Set the base color
        />
      </mesh> */}

      <Plane />

      <EffectComposer>
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.1}
          intensity={0.5}
        />
      </EffectComposer>
      {/* <OrbitControls /> */}
    </Canvas>
    // </div>
  );
}

function TrialOnCube() {
  return (
    <mesh position={[0, 1, 0]} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

// export default Scene;

export default HeroScene;
