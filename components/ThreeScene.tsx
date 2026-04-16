import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const geometryA = new THREE.IcosahedronGeometry(1.2, 0);
    const geometryB = new THREE.TorusKnotGeometry(0.9, 0.24, 140, 16);
    const materialA = new THREE.MeshStandardMaterial({ color: 0xffffff, wireframe: true, metalness: 0.3, roughness: 0.4 });
    const materialB = new THREE.MeshStandardMaterial({ color: 0xe5e5e5, wireframe: true, metalness: 0.2, roughness: 0.6 });

    const meshA = new THREE.Mesh(geometryA, materialA);
    meshA.position.x = -1.8;

    const meshB = new THREE.Mesh(geometryB, materialB);
    meshB.position.x = 1.8;

    const ambient = new THREE.AmbientLight(0xffffff, 0.7);
    const point = new THREE.PointLight(0xffffff, 1.2);
    point.position.set(4, 4, 6);

    scene.add(meshA, meshB, ambient, point);

    const onResize = () => {
      if (!container) {
        return;
      }
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    let frameId = 0;
    const animate = () => {
      meshA.rotation.x += 0.004;
      meshA.rotation.y += 0.004;
      meshB.rotation.x -= 0.003;
      meshB.rotation.y += 0.005;

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', onResize);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
      geometryA.dispose();
      geometryB.dispose();
      materialA.dispose();
      materialB.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="absolute inset-0" ref={containerRef} />;
}
