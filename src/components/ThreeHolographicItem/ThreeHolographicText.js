import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import './ThreeHolographicText.css';

const ThreeHolographicText = () => {
  const mountRef = useRef(null);
  const textMeshRef = useRef(null);
  const isDragging = useRef(false);
  const prevMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create background
    const bgGeometry = new THREE.PlaneGeometry(20, 20);
    const bgMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const background = new THREE.Mesh(bgGeometry, bgMaterial);
    background.position.z = -10;
    scene.add(background);

    // Load font and create text
    const loader = new FontLoader();
    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
      const textGeometry = new TextGeometry('BitKrsp IT Solutions', {
        font: font,
        size: 1,
        height: 0.0, // Decrease thickness to make text thinner
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: 0.1,
        bevelOffset: 0,
        bevelSegments: 5
      });

      // Center the text
      textGeometry.computeBoundingBox();
      const boundingBox = textGeometry.boundingBox;
      textGeometry.translate(-boundingBox.max.x / 2, 0, 0);

      // Green color for text
      const textMaterial = new THREE.MeshStandardMaterial({
        color: 0x00ff00, // Green color
        emissive: 0x00ff00, // Green emissive color
        emissiveIntensity: 1,
        transparent: true,
        opacity: 0.8
      });

      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      scene.add(textMesh);
      textMeshRef.current = textMesh;

      // Move the text up slightly
      textMesh.position.y = 1.5; // Adjust this value to move the text up
    });

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Mouse event handlers
    const handleMouseDown = (event) => {
      isDragging.current = true;
      prevMousePosition.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseMove = (event) => {
      if (isDragging.current && textMeshRef.current) {
        const deltaX = event.clientX - prevMousePosition.current.x;
        const deltaY = event.clientY - prevMousePosition.current.y;

        // Update rotation based on mouse movement
        textMeshRef.current.rotation.y += deltaX * 0.005;
        textMeshRef.current.rotation.x -= deltaY * 0.005;

        // Update previous mouse position
        prevMousePosition.current = { x: event.clientX, y: event.clientY };
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div className="three-holographic-text" ref={mountRef} />;
};

export default ThreeHolographicText;
