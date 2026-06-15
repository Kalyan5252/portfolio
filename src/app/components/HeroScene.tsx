'use client';
import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import {
  CatmullRomCurve3,
  Euler,
  Mesh,
  Group,
  MeshStandardMaterial,
  VideoTexture,
  Color,
  PointLight,
  AdditiveBlending,
  Vector3,
} from 'three';
import { useGLTF, shaderMaterial } from '@react-three/drei';
import gsap from 'gsap';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { JSX } from 'react';

const degreesToRadians = (degrees: number) => (degrees * Math.PI) / 180;
const LAPTOP_FINAL_POSITION = { x: 2, y: -0.8, z: 0 };
const LAPTOP_SCALE = 0.08;

const LAPTOP_FINAL_ROTATION = {
  x: degreesToRadians(190),
  y: degreesToRadians(210),
  z: degreesToRadians(190),
};
const LAPTOP_START_POSITION = {
  x: LAPTOP_FINAL_POSITION.x,
  y: -10.65,
  z: -1.35,
};
const LAPTOP_START_ROTATION = {
  x: 0,
  y: 0,
  z: LAPTOP_FINAL_ROTATION.z,
};
const SPHERE_ANIMATION_DELAY = 0.85;
const LOWER_SPHERE_SPEED = 0.032;
const UPPER_SPHERE_SPEED = 0.05;

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
  `,
);

extend({ GlowShaderMaterial });

declare module '@react-three/fiber' {
  interface ThreeElements {
    glowShaderMaterial: JSX.IntrinsicElements['shaderMaterial'] & {
      color: Color;
      glowColor: Color;
      glowIntensity: number;
    };
  }
}
function GlowingSphere() {
  const sphereRef = useRef<Group>(null);
  const lowersphereRef = useRef<Mesh>(null);
  const topLight = useRef<PointLight>(null);
  const lowerLight = useRef<PointLight>(null);
  const lowerPath = useMemo(() => {
    const curve = new CatmullRomCurve3([
      new Vector3(-1.2, -4.25, 0.96),
      new Vector3(0.1, -3.85, 0.88),
      new Vector3(1.35, -3.42, 0.74),
      new Vector3(2.55, -3.06, 0.42),
      new Vector3(3.2, -2.7, 0.05),
      new Vector3(2.7, -2.32, -0.34),
      new Vector3(1.45, -2.02, -0.72),
      new Vector3(0.0, -2.18, -0.82),
      new Vector3(-0.98, -2.72, -0.22),
    ]);
    curve.closed = true;
    curve.curveType = 'catmullrom';
    curve.tension = 0.2;
    return curve;
  }, []);
  const upperPath = useMemo(() => {
    const curve = new CatmullRomCurve3([
      new Vector3(2.18, 4.55, 1.12),
      new Vector3(2.22, 3.45, 1.08),
      new Vector3(2.28, 2.48, 1.02),
      new Vector3(2.46, 1.68, 0.94),
      new Vector3(2.92, 1.34, 1.02),
      new Vector3(3.58, 1.58, 1.18),
      new Vector3(4.05, 2.18, 1.28),
      new Vector3(3.72, 2.82, 1.34),
      new Vector3(2.92, 3.18, 1.28),
      new Vector3(2.36, 3.6, 1.18),
    ]);
    curve.closed = true;
    curve.curveType = 'catmullrom';
    curve.tension = 0.18;
    return curve;
  }, []);

  useEffect(() => {
    const lowerStart = lowerPath.getPointAt(0);
    const upperStart = upperPath.getPointAt(0);
    lowersphereRef.current?.position.copy(lowerStart);
    lowerLight.current?.position.copy(lowerStart);
    sphereRef.current?.position.copy(upperStart);
    topLight.current?.position.copy(upperStart);
  }, [lowerPath, upperPath]);

  useFrame(({ clock }) => {
    const elapsed = Math.max(0, clock.elapsedTime - SPHERE_ANIMATION_DELAY);

    if (lowersphereRef.current && lowerLight.current) {
      const lowerProgress = (elapsed * LOWER_SPHERE_SPEED) % 1;
      const lowerPosition = lowerPath.getPointAt(lowerProgress);
      lowersphereRef.current.position.copy(lowerPosition);
      lowerLight.current.position.copy(lowerPosition);
    }

    if (sphereRef.current && topLight.current) {
      const upperProgress = (elapsed * UPPER_SPHERE_SPEED) % 1;
      const upperPosition = upperPath.getPointAt(upperProgress);
      sphereRef.current.position.copy(upperPosition);
      topLight.current.position.copy(upperPosition);
    }
  });

  return (
    <group>
      {/* Glowing Sphere */}

      <mesh ref={lowersphereRef} position={[5.28, -4.12, 1.24]}>
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

      <group ref={sphereRef} position={[2.18, 4.55, 1.12]}>
        <mesh>
          <sphereGeometry args={[0.24, 32, 32]} />
          <meshStandardMaterial
            color={new Color('#fff')}
            roughness={0}
            metalness={0}
            emissive={new Color('#23a6d5')}
            emissiveIntensity={10.08}
            envMapIntensity={50}
            blending={AdditiveBlending}
            vertexColors={true}
          />
        </mesh>
      </group>

      {/* Light Source */}
      <pointLight
        ref={topLight}
        position={[4.82, -3.38, 1.16]}
        intensity={9}
        distance={4.2}
        decay={1.5}
        color={'#23a6d5'}
      />
      <pointLight
        ref={lowerLight}
        position={[5.28, -4.12, 1.24]}
        intensity={10}
        distance={3.6}
        color={'#23a6d5'}
      />
    </group>
  );
}

function Model() {
  const { scene, nodes } = useGLTF('/models/macbook/scene.gltf');
  const modelRef = useRef<Group | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoTextureRef = useRef<VideoTexture | null>(null);

  useEffect(() => {
    const model = modelRef.current;

    if (model) {
      gsap.set(model, { visible: true });
      gsap.set(model.position, LAPTOP_START_POSITION);
      gsap.set(model.scale, {
        x: LAPTOP_SCALE,
        y: LAPTOP_SCALE,
        z: LAPTOP_SCALE,
      });
      gsap.set(model.rotation, LAPTOP_START_ROTATION);

      const entranceTimeline = gsap.timeline({
        delay: 3.55,
        defaults: {
          duration: 2.25,
          ease: 'power3.out',
        },
      });

      entranceTimeline
        .to(
          model.position,
          {
            ...LAPTOP_FINAL_POSITION,
          },
          0,
        )
        .to(
          model.rotation,
          {
            ...LAPTOP_FINAL_ROTATION,
          },
          0,
        );

      return () => {
        entranceTimeline.kill();
      };
    }
  }, []);

  useEffect(() => {
    if (!videoRef.current) {
      const video = document.createElement('video');
      video.src = '/videos/screenplay2.mov'; // Replace with your video path
      video.loop = true;
      video.muted = true;
      video.autoplay = true;
      video.playsInline = true;
      video.play().catch(() => {
        // Browsers may block autoplay in some contexts; the model still renders.
      });
      videoRef.current = video;
    }

    if (nodes.Object_123) {
      const videoTexture = new VideoTexture(videoRef.current!);
      videoTexture.colorSpace = 'srgb'; // Ensures correct color display
      videoTextureRef.current = videoTexture;

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

    return () => {
      videoTextureRef.current?.dispose();
      videoRef.current?.pause();
      videoRef.current?.removeAttribute('src');
      videoRef.current?.load();
      videoTextureRef.current = null;
      videoRef.current = null;
    };
  }, [nodes]);

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        child.castShadow = false;
        child.receiveShadow = false;
      }
    });
  }, [scene]);

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={[
        LAPTOP_START_POSITION.x,
        LAPTOP_START_POSITION.y,
        LAPTOP_START_POSITION.z,
      ]}
      scale={LAPTOP_SCALE}
      rotation={
        new Euler(
          LAPTOP_START_ROTATION.x,
          LAPTOP_START_ROTATION.y,
          LAPTOP_START_ROTATION.z,
        )
      }
    />
  );
}

function Plane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.4, 0]}>
      <planeGeometry args={[10, 10]} />
      <meshBasicMaterial color="#071015" transparent opacity={0.12} />
    </mesh>
  );
}

function HeroScene() {
  return (
    // <div className="absolute right-0 top-0 z-10 h-full w-full">
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 2, 5], fov: 50 }}
      gl={{ antialias: false, powerPreference: 'high-performance' }}
      performance={{ min: 0.5 }}
    >
      <ambientLight intensity={1} />
      <ambientLight intensity={0.5} />

      <spotLight position={[-2, 4, 0]} intensity={2} />

      <pointLight position={[10, 10, 10]} />
      <group position={[-2, 0, 0]}>
        <Model />
        <GlowingSphere />
      </group>
      <pointLight position={[20, 10, 10]} color={new Color('blue')} />

      <Plane />

      <EffectComposer>
        <Bloom
          luminanceThreshold={0.24}
          luminanceSmoothing={0.34}
          intensity={0.12}
        />
      </EffectComposer>
    </Canvas>
  );
}

export default HeroScene;
