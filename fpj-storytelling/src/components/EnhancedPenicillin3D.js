import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';

const EnhancedPenicillin3D = ({ minimal = false }) => {
  const mountRef = useRef(null);
  const animationRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;
    const width = 480;
    const height = 400;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 32;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;

    mountNode.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(20, 20, 40);
    scene.add(directionalLight);

    // Molecule group
    const moleculeGroup = new THREE.Group();

    // Materials
    const carbonMaterial = new THREE.MeshPhongMaterial({ color: 0x00f5ff, shininess: 200, transparent: true, opacity: 0.95, emissive: 0x0040cc });
    const nitrogenMaterial = new THREE.MeshPhongMaterial({ color: 0xff0080, shininess: 200, transparent: true, opacity: 0.95, emissive: 0x8b008b });
    const oxygenMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 200, transparent: true, opacity: 0.95, emissive: 0x00ffff });
    const sulfurMaterial = new THREE.MeshPhongMaterial({ color: 0x39ff14, shininess: 300, transparent: true, opacity: 0.95, emissive: 0x20cc08 });
    const hydrogenMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 200, transparent: true, opacity: 0.9, emissive: 0x00ffff });
    const bondMaterial = new THREE.MeshPhongMaterial({ color: 0x6b7280, transparent: true, opacity: 0.85, emissive: 0x4b5563 });

    // Atoms (simplified penicillin)
    const atoms = [
      { pos: [0, 0, 0], material: carbonMaterial, size: 0.8, type: 'C', key: true },
      { pos: [1.8, 0.6, 0], material: carbonMaterial, size: 0.8, type: 'C', key: true },
      { pos: [1.2, 2.2, 0], material: nitrogenMaterial, size: 0.7, type: 'N', key: true },
      { pos: [-0.6, 1.8, 0], material: carbonMaterial, size: 0.8, type: 'C', key: true },
      { pos: [-2.4, 1.2, 0.6], material: carbonMaterial, size: 0.8, type: 'C' },
      { pos: [-3, -0.6, 0], material: sulfurMaterial, size: 1.0, type: 'S' },
      { pos: [-1.2, -1.2, 0], material: nitrogenMaterial, size: 0.7, type: 'N' },
      { pos: [3.6, 0, 0.6], material: carbonMaterial, size: 0.8, type: 'C' },
      { pos: [4.8, 1.8, 0], material: carbonMaterial, size: 0.8, type: 'C' },
      { pos: [6.6, 2.1, 0.4], material: carbonMaterial, size: 0.8, type: 'C' },
      { pos: [7.8, 0.6, 0.8], material: carbonMaterial, size: 0.8, type: 'C' },
      { pos: [7.2, -1.2, 0.4], material: carbonMaterial, size: 0.8, type: 'C' },
      { pos: [5.4, -1.5, 0], material: carbonMaterial, size: 0.8, type: 'C' },
      { pos: [4.2, 0, 0], material: carbonMaterial, size: 0.8, type: 'C' },
      { pos: [-3.6, 3, 0.6], material: carbonMaterial, size: 0.8, type: 'C' },
      { pos: [-4.8, 4.2, 1.2], material: oxygenMaterial, size: 0.7, type: 'O' },
      { pos: [-3, 3.6, -0.6], material: oxygenMaterial, size: 0.7, type: 'O' },
      { pos: [0.6, -1.2, 1], material: hydrogenMaterial, size: 0.5, type: 'H' },
      { pos: [2.4, -1, 0.4], material: hydrogenMaterial, size: 0.5, type: 'H' },
      { pos: [-4.2, 0.6, 1.2], material: hydrogenMaterial, size: 0.5, type: 'H' },
      { pos: [8.4, 2.4, 0.6], material: hydrogenMaterial, size: 0.5, type: 'H' },
    ];

    atoms.forEach((atom) => {
      const geometry = new THREE.SphereGeometry(atom.size, 24, 24);
      const sphere = new THREE.Mesh(geometry, atom.material);
      sphere.position.set(...atom.pos);
      sphere.castShadow = true;
      sphere.receiveShadow = true;
      moleculeGroup.add(sphere);
    });

    // Bonds
    const bonds = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [0, 6], [3, 4], [4, 5], [5, 6], [6, 0],
      [1, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 8],
      [4, 14], [14, 15], [14, 16],
    ];
    bonds.forEach(([start, end]) => {
      const startPos = new THREE.Vector3(...atoms[start].pos);
      const endPos = new THREE.Vector3(...atoms[end].pos);
      const distance = startPos.distanceTo(endPos);
      const geometry = new THREE.CylinderGeometry(0.12, 0.12, distance);
      const bond = new THREE.Mesh(geometry, bondMaterial);
      bond.position.copy(startPos.clone().add(endPos).divideScalar(2));
      bond.lookAt(endPos);
      bond.rotateX(Math.PI / 2);
      moleculeGroup.add(bond);
    });

    scene.add(moleculeGroup);

    // Animation
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;
      const baseSpeed = 0.012;
      const hoverMultiplier = isHovered ? 1.8 : 1;
      const finalSpeed = baseSpeed * hoverMultiplier;
      moleculeGroup.rotation.x += finalSpeed * 0.6;
      moleculeGroup.rotation.y += finalSpeed;
      moleculeGroup.rotation.z += finalSpeed * 0.4;
      moleculeGroup.position.y = Math.sin(time * 1.2) * 0.8;
      moleculeGroup.position.x = Math.cos(time * 0.8) * 0.3;
      const breathe = 1 + Math.sin(time * 2) * 0.05;
      moleculeGroup.scale.setScalar(breathe);
      renderer.render(scene, camera);
    };
  animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountNode && renderer.domElement && renderer.domElement.parentNode === mountNode) {
        mountNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isHovered]);

  const onKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setShowDetails((s) => !s);
      setIsPinned((p) => !p);
    } else if (e.key === 'Escape') {
      setShowDetails(false);
      setIsPinned(false);
    }
  }, []);

  return (
    <div
      className="relative w-full h-full flex items-center justify-center cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); if (!isPinned) setShowDetails(false); }}
      onClick={() => { setShowDetails((s) => !s); setIsPinned((p) => !p); }}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
      aria-pressed={isPinned}
      aria-label={isPinned ? 'Penicillin molecule, details pinned. Press Enter to unpin.' : 'Penicillin molecule. Hover or press Enter to pin details.'}
      style={{ minHeight: 400, userSelect: 'none' }}
    >
      <div ref={mountRef} className="relative">
        {!minimal && (
          <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true"></div>
        )}
      </div>
      {showDetails && (
        <div className="absolute top-0 left-full ml-6 w-80 bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl shadow-cyan-500/20 border border-cyan-500/30 z-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
            <h3 className="font-bold text-xl text-cyan-400">Penicillin G</h3>
            <button type="button" className="ml-auto text-xs text-gray-300 border border-gray-600 rounded px-2 py-1" onClick={(e) => { e.stopPropagation(); setIsPinned((p)=>!p); }} aria-label={isPinned ? 'Unpin panel' : 'Pin panel'}>
              {isPinned ? 'Unpin' : 'Pin'}
            </button>
          </div>
          <div className="text-sm text-gray-200 mb-4 space-y-2">
            <p className="font-medium text-lime-400">C₁₆H₁₈N₂O₄S</p>
            <p>The world's first true antibiotic that launched the pharmaceutical revolution</p>
          </div>
          <div className="space-y-3 text-xs text-gray-400">
            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-cyan-400 rounded-full"></span><span>Beta-lactam ring: The bacteria-killing hero</span></div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-pink-400 rounded-full"></span><span>Discovered accidentally by Fleming in 1928</span></div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-400 rounded-full"></span><span>Saved millions of lives in WWII and beyond</span></div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-lime-400 rounded-full"></span><span>Launched the modern pharmaceutical industry</span></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedPenicillin3D;
