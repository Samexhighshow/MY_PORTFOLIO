import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeJSNode() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const width = container.clientWidth;
        const height = container.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        const geometry = new THREE.IcosahedronGeometry(2, 2);
        const material = new THREE.MeshPhongMaterial({
            color: 0x00FFFF,
            wireframe: true,
            transparent: true,
            opacity: 0.6,
            emissive: 0x8B5CF6,
            emissiveIntensity: 0.5
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const innerGeo = new THREE.SphereGeometry(1, 32, 32);
        const innerMat = new THREE.MeshStandardMaterial({
            color: 0x002366,
            metalness: 0.8,
            roughness: 0.2,
            emissive: 0x00FFFF,
            emissiveIntensity: 0.2
        });
        const innerMesh = new THREE.Mesh(innerGeo, innerMat);
        scene.add(innerMesh);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0x8B5CF6, 2);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        camera.position.z = 6;

        let animationFrameId;

        function animate() {
            animationFrameId = requestAnimationFrame(animate);
            
            mesh.rotation.x += 0.005;
            mesh.rotation.y += 0.005;
            
            innerMesh.rotation.x -= 0.003;
            innerMesh.rotation.y -= 0.003;
            
            const scale = 1 + Math.sin(Date.now() * 0.001) * 0.05;
            mesh.scale.set(scale, scale, scale);
            
            renderer.render(scene, camera);
        }

        const handleResize = () => {
            if (!container) return;
            const newWidth = container.clientWidth;
            const newHeight = container.clientHeight;
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
        };

        window.addEventListener('resize', handleResize);
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            if (container && renderer.domElement) {
                container.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return (
        <div 
            ref={containerRef} 
            className="absolute inset-0 w-full h-full block" 
            style={{ width: '100%', height: '100%' }}
        />
    );
}
