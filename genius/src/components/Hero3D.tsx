import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import * as THREE from "three";
import { hero } from "@/lib/content";
import { EASE } from "@/lib/motion";

/**
 * Full-screen hero: a three.js scene of floating glass-like ledger cubes,
 * coins, and chart bars that slowly rotate and parallax toward the cursor,
 * under three giant staggered headline words.
 *
 * Degradation: reduced-motion users and coarse-pointer (mobile) devices get
 * a single statically-rendered frame — same composition, no animation loop.
 */
export default function Hero3D() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const host = canvasRef.current;
    if (!host) return;

    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const animated = !reduceMotion && !isCoarse;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 8, 16);

    const camera = new THREE.PerspectiveCamera(
      50,
      host.clientWidth / host.clientHeight,
      0.1,
      50,
    );
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(host.clientWidth, host.clientHeight);
    host.appendChild(renderer.domElement);

    // Lighting: neutral key + one accent-blue rim so the "glass" picks up
    // the site's single accent color.
    scene.add(new THREE.AmbientLight(0xffffff, 0.35));
    const key = new THREE.DirectionalLight(0xffffff, 1.4);
    key.position.set(2, 3, 4);
    scene.add(key);
    const rim = new THREE.PointLight(0x3e9bff, 40, 20);
    rim.position.set(-5, -2, 4);
    scene.add(rim);

    const glass = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.35,
      roughness: 0.2,
      transparent: true,
      opacity: 0.14,
    });
    const edgeMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.4,
    });
    const accentEdgeMat = new THREE.LineBasicMaterial({
      color: 0x3e9bff,
      transparent: true,
      opacity: 0.75,
    });

    const root = new THREE.Group();
    scene.add(root);

    type Drifter = { obj: THREE.Object3D; speed: number; floatPhase: number; baseY: number };
    const drifters: Drifter[] = [];

    const addGlassMesh = (
      geometry: THREE.BufferGeometry,
      position: [number, number, number],
      rotation: [number, number, number],
      speed: number,
      accent = false,
    ) => {
      const group = new THREE.Group();
      const mesh = new THREE.Mesh(geometry, glass);
      const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(geometry),
        accent ? accentEdgeMat : edgeMat,
      );
      group.add(mesh, edges);
      group.position.set(...position);
      group.rotation.set(...rotation);
      root.add(group);
      drifters.push({
        obj: group,
        speed,
        floatPhase: position[0] * 1.7 + position[1],
        baseY: position[1],
      });
    };

    // Ledger cubes
    addGlassMesh(new THREE.BoxGeometry(1.6, 1.6, 1.6), [-3.4, 1.2, -1], [0.4, 0.6, 0.1], 0.12, true);
    addGlassMesh(new THREE.BoxGeometry(1.0, 1.0, 1.0), [3.6, -1.4, -0.5], [0.2, 0.9, 0.3], 0.18);
    addGlassMesh(new THREE.BoxGeometry(0.7, 0.7, 0.7), [2.6, 1.9, -2], [0.7, 0.2, 0.5], 0.25);
    addGlassMesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), [-2.2, -2.0, 0.5], [0.1, 0.4, 0.8], 0.3);

    // Coins
    const coinGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.09, 32);
    addGlassMesh(coinGeo, [-1.2, 2.3, -1.5], [1.3, 0, 0.4], 0.2);
    addGlassMesh(coinGeo, [4.2, 0.8, -2.5], [1.1, 0.3, 0], 0.16, true);
    addGlassMesh(coinGeo, [-4.4, -0.9, -2], [1.5, 0.2, 0.6], 0.22);

    // Chart bar cluster — ascending, the one literal nod to "books going up"
    const bars = new THREE.Group();
    [0.5, 0.9, 1.3, 1.8].forEach((height, i) => {
      const geo = new THREE.BoxGeometry(0.34, height, 0.34);
      const mesh = new THREE.Mesh(geo, glass);
      const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(geo),
        i === 3 ? accentEdgeMat : edgeMat,
      );
      const bar = new THREE.Group();
      bar.add(mesh, edges);
      bar.position.set(i * 0.52, height / 2 - 0.9, 0);
      bars.add(bar);
    });
    bars.position.set(0.6, -1.6, -1);
    bars.rotation.y = -0.5;
    root.add(bars);
    drifters.push({ obj: bars, speed: 0.06, floatPhase: 2.1, baseY: -1.6 });

    // Pointer parallax targets
    let targetX = 0;
    let targetY = 0;
    const onPointerMove = (e: PointerEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 1.1;
      targetY = (e.clientY / window.innerHeight - 0.5) * 0.7;
    };
    if (animated) window.addEventListener("pointermove", onPointerMove);

    const clock = new THREE.Clock();
    let frame = 0;
    const render = () => {
      const t = clock.getElapsedTime();
      for (const d of drifters) {
        d.obj.rotation.y += d.speed * 0.008;
        d.obj.rotation.x += d.speed * 0.004;
        d.obj.position.y = d.baseY + Math.sin(t * 0.5 + d.floatPhase) * 0.18;
      }
      root.rotation.y = Math.sin(t * 0.05) * 0.08;
      camera.position.x += (targetX - camera.position.x) * 0.04;
      camera.position.y += (-targetY - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      if (animated) frame = requestAnimationFrame(render);
    };
    render();

    const onResize = () => {
      camera.aspect = host.clientWidth / host.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(host.clientWidth, host.clientHeight);
      if (!animated) renderer.render(scene, camera);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.LineSegments) {
          obj.geometry.dispose();
        }
      });
      glass.dispose();
      edgeMat.dispose();
      accentEdgeMat.dispose();
      host.removeChild(renderer.domElement);
    };
  }, [reduceMotion]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black" aria-label="intro">
      <div ref={canvasRef} className="absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-black" />

      {/* Giant staggered headline words */}
      {hero.words.map((word, i) => (
        <motion.h1
          key={word.text}
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 + i * 0.18, ease: EASE }}
          className={`hero-title pointer-events-none absolute z-10 text-[14vw] font-medium text-white md:text-[13vw] ${word.position}`}
        >
          {word.text}
        </motion.h1>
      ))}

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.75, ease: EASE }}
        className="absolute left-4 top-[40%] z-10 max-w-[240px] text-[15px] leading-snug text-white/90 md:left-10"
      >
        {hero.description}
      </motion.p>

      {/* Stat blocks */}
      {[
        { stat: hero.stats[0], cls: "right-4 md:right-10 top-24 text-right" },
        { stat: hero.stats[1], cls: "left-4 md:left-10 bottom-8" },
        { stat: hero.stats[2], cls: "right-4 md:right-10 bottom-8 text-right" },
      ].map(({ stat, cls }, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 + i * 0.12, ease: EASE }}
          className={`absolute z-10 ${cls}`}
        >
          <span aria-hidden className="mb-2 hidden h-8 w-px rotate-[24deg] bg-white/20 md:block" />
          <div className="tabular text-2xl font-semibold text-white md:text-3xl">{stat.value}</div>
          <div className="text-sm text-white/40">{stat.label}</div>
        </motion.div>
      ))}

      {/* CTA */}
      <motion.a
        href={hero.cta.href}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
      >
        {hero.cta.label}
      </motion.a>
    </section>
  );
}
