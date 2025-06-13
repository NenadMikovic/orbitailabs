// components/Galaxy.tsx
'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useMemo, useRef } from 'react';

function Galaxy() {
  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const count = 10000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const scales = new Float32Array(count);

    const radius = 5;

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2; // longitude
      const phi = Math.acos(2 * Math.random() - 1); // latitude

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions.set([x, y, z], i * 3);

      // OrbitAI Labs gradient: cyan → purple (top → bottom)
      const mix = (y + radius) / (2 * radius);
      const r = (157 / 255) * mix + (0 / 255) * (1 - mix);
      const g = (0 / 255) * mix + (194 / 255) * (1 - mix);
      const b = (255 / 255) * mix + (255 / 255) * (1 - mix);

      colors.set([r, g, b], i * 3);
      scales[i] = Math.random();
    }

    g.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    g.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    g.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));
    return g;
  }, []);

  const mat = useMemo(() => new THREE.ShaderMaterial({
    vertexColors: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 } },
    vertexShader: `
      uniform float uTime;
      attribute float aScale;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec3 pos = position;

        // Smooth rotation around Y axis
        float angle = uTime * 0.2;
        pos.xz = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * pos.xz;

        gl_PointSize = aScale * 4.5;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      void main() {
        float d = distance(gl_PointCoord, vec2(0.5));
        if (d > 0.5) discard;
        gl_FragColor = vec4(vColor, 1.0);
      }
    `
  }), []);

  const ref = useRef<THREE.Points>(null);
  useFrame(({ clock }) => {
    mat.uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <group rotation={[Math.PI / 6, Math.PI / 8, 0]}>
      <points ref={ref} geometry={geo} material={mat} />
    </group>
  );
}


export default function GalaxyCanvas() {
  return (
    <div style={{ width:'100%', height: '500px' }}>
      <Canvas camera={{ position: [0, 2, 10] }}>
        <ambientLight intensity={0.3} />
        <Galaxy />
      </Canvas>
    </div>
  );
}
