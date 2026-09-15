"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const createRoundedVShape = (): THREE.BufferGeometry => {
  const shape = new THREE.Shape();
  const w = 1.4;
  const h = 1.6;
  const r = 0.25;

  shape.moveTo(-w + r, h);
  shape.lineTo(-r, -h + r);
  shape.quadraticCurveTo(0, -h, 0, -h);
  shape.quadraticCurveTo(0, -h, r, -h + r);
  shape.lineTo(w - r, h);
  shape.quadraticCurveTo(0, h - r, -w + r, h);

  const geometry = new THREE.ShapeGeometry(shape, 48);
  geometry.center();
  return geometry;
};

const createStarGeometry = (): THREE.BufferGeometry => {
  const shape = new THREE.Shape();
  const outerR = 0.35;
  const innerR = 0.15;
  const points = 4;

  for (let i = 0; i < points * 2; i++) {
    const radius = i % 2 === 0 ? outerR : innerR;
    const angle = (i * Math.PI) / points - Math.PI / 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }
  shape.closePath();

  const geometry = new THREE.ShapeGeometry(shape, 32);
  geometry.center();
  return geometry;
};

export const Hero3DCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 600;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // 1. DevCraft Metallic V-Apex Physical Material
    const vMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x18cb96,
      emissive: 0x0a4a37,
      roughness: 0.12,
      metalness: 0.8,
      transmission: 0.25,
      thickness: 1.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      side: THREE.DoubleSide,
    });

    const vShape = new THREE.Mesh(createRoundedVShape(), vMaterial);
    vShape.scale.set(1.5, 1.5, 1);
    group.add(vShape);

    // 2. Center Star Diamond Geometry
    const starMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      emissive: 0xffffff,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.15,
      side: THREE.DoubleSide,
    });

    const starShape = new THREE.Mesh(createStarGeometry(), starMaterial);
    starShape.scale.set(0.9, 0.9, 1);
    starShape.position.z = 0.15;
    group.add(starShape);

    // 3. Ambient Emerald Glow Ring
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x18cb96,
      transparent: true,
      opacity: 0.18,
    });
    const glowShape = new THREE.Mesh(createStarGeometry(), glowMaterial);
    glowShape.scale.set(1.6, 1.6, 1);
    glowShape.position.z = -0.05;
    group.add(glowShape);

    // 4. Kinetic Morphing Particle Network (Ambient Orbit <-> Acute 72° V-Apex Vector)
    const particlesCount = 260;
    const currentPositions = new Float32Array(particlesCount * 3);
    const ambientPositions = new Float32Array(particlesCount * 3);
    const vApexPositions = new Float32Array(particlesCount * 3);

    // Precalculate ambient spherical distribution & 72° V-Apex vector points
    // 72° V has half-angle of 36° (approx 0.628 rad)
    const apexAngle = 0.628;
    const halfCount = Math.floor(particlesCount / 2);

    for (let i = 0; i < particlesCount; i++) {
      // Ambient random cybernetic cloud
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const rad = 2.2 + Math.random() * 1.8;
      const ax = rad * Math.sin(phi) * Math.cos(theta);
      const ay = rad * Math.sin(phi) * Math.sin(theta);
      const az = rad * Math.cos(phi) * 0.5;

      ambientPositions[i * 3] = ax;
      ambientPositions[i * 3 + 1] = ay;
      ambientPositions[i * 3 + 2] = az;

      currentPositions[i * 3] = ax;
      currentPositions[i * 3 + 1] = ay;
      currentPositions[i * 3 + 2] = az;

      // 72° V-Apex coordinates
      const t = (i % halfCount) / halfCount; // 0 to 1 along each arm
      const armLength = 2.6;
      const armY = -1.4 + t * armLength; // Starts at apex (-1.4) and goes up
      const side = i < halfCount ? -1 : 1;
      const armX = side * (t * armLength * Math.tan(apexAngle));
      const armZ = (Math.random() - 0.5) * 0.2;

      vApexPositions[i * 3] = armX;
      vApexPositions[i * 3 + 1] = armY;
      vApexPositions[i * 3 + 2] = armZ;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(currentPositions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x18cb96,
      size: 0.032,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particlePoints = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particlePoints);

    // 5. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
    mainLight.position.set(5, 8, 5);
    scene.add(mainLight);

    const emeraldLight = new THREE.PointLight(0x18cb96, 4.5, 14);
    emeraldLight.position.set(-3, -2, 3);
    scene.add(emeraldLight);

    const cyanLight = new THREE.PointLight(0x4ed7ae, 3, 10);
    cyanLight.position.set(3, 4, -2);
    scene.add(cyanLight);

    let targetX = 0;
    let targetY = 0;
    let morphFactor = 0; // 0 = ambient, 1 = aligned 72° V-Apex

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      targetX = (x - 0.5) * 0.9;
      targetY = (y - 0.5) * 0.9;

      // Proximity to center triggers alignment
      const distFromCenter = Math.hypot(x - 0.5, y - 0.5);
      morphFactor = Math.max(0, 1 - distFromCenter * 1.8);
    };

    window.addEventListener("pointermove", handlePointerMove);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || width;
      const h = container.clientHeight || height;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    let animationFrameId: number;
    let lastTime = performance.now();
    let currentMorph = 0;

    const animate = () => {
      const now = performance.now();
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      const elapsedTime = now / 1000;

      // Smooth lerp morph factor
      currentMorph += (morphFactor - currentMorph) * 0.08;

      // Update particle positions between ambient and V-Apex
      const positions = particleGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        const ambX = ambientPositions[i3];
        const ambY = ambientPositions[i3 + 1];
        const ambZ = ambientPositions[i3 + 2];

        const apexX = vApexPositions[i3];
        const apexY = vApexPositions[i3 + 1];
        const apexZ = vApexPositions[i3 + 2];

        // Slight wave motion
        const wave = Math.sin(elapsedTime * 2 + i * 0.1) * 0.05 * (1 - currentMorph);

        positions[i3] = ambX + (apexX - ambX) * currentMorph;
        positions[i3 + 1] = ambY + (apexY - ambY) * currentMorph + wave;
        positions[i3 + 2] = ambZ + (apexZ - ambZ) * currentMorph;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Subtle rotation dynamics
      vShape.rotation.y += delta * 0.15;
      vShape.rotation.x = Math.sin(elapsedTime * 0.4) * 0.08;

      starShape.rotation.y -= delta * 0.2;
      starShape.rotation.x = Math.cos(elapsedTime * 0.35) * 0.1;
      starShape.position.y = Math.sin(elapsedTime * 0.6) * 0.08;

      glowShape.rotation.y += delta * 0.08;
      glowShape.rotation.x = Math.sin(elapsedTime * 0.3) * 0.06;

      particlePoints.rotation.y += delta * (0.04 * (1 - currentMorph));

      // Cursor parallax tracking
      group.rotation.y += (targetX - group.rotation.y) * 0.05;
      group.rotation.x += (-targetY - group.rotation.x) * 0.05;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      vMaterial.dispose();
      starMaterial.dispose();
      glowMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative cursor-crosshair"
      aria-hidden="true"
    />
  );
};
