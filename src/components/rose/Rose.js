import { useRef, useEffect } from "react";
import * as THREE from "three";
import {
  //MapControls,
  OrbitControls,
} from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
const Template = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    //Data from the canvas
    const currentRef = mountRef.current;
    const { clientWidth: width, clientHeight: height } = currentRef;

    //Scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    scene.add(camera);
    camera.position.set(55, 7, 7);
    camera.lookAt(new THREE.Vector3());
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    currentRef.appendChild(renderer.domElement);
    renderer.setClearColor(0x00000, 0);
    //OrbitControls
    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableZoom = false;
    orbitControls.enableDamping = false;

    //Resize canvas
    const resize = () => {
      renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
      camera.aspect = currentRef.clientWidth / currentRef.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", resize);

    //Loader
    const rosa = new THREE.Group();
    const glftLoader = new GLTFLoader();
    glftLoader.load("./models/untitled.gltf", (gltf) => {
      gltf.scene.scale.set(10, 10, 10);
      scene.add(gltf.scene);
      rosa.position.y = -1;
      scene.add(rosa);
    });

    //Animate the scene
    const animate = () => {
      rosa.rotation.y += 0.01;
      orbitControls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    //Light
    const ambientalLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientalLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(6, 6, 6);
    scene.add(pointLight);


    return () => {
      window.removeEventListener("resize", resize);
      currentRef.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      
      ref={mountRef}
      style={{ "margin-top": "5rem", width: "100%", height: "60vh" }}
    ></div>
  );
};

export default Template;
