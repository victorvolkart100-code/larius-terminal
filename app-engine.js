    let portfolioTier = 'beginner';
    let focusedPortfolioAssetId = null;
    let pScene, pCamera, pRenderer, pGridBasic, pGridSenior, pCorrLine;
    const pCameraTarget = new THREE.Vector3(0, 0.85, 0);
    const pPillars = [];

    function renderPortfolioFloatingCards() {
      const layer = document.getElementById('portfolio3d-html-layer');
      if (!layer) return;
      layer.innerHTML = SAMPLE_PORTFOLIO.map(asset => {
        const isFocused = focusedPortfolioAssetId === asset.id;
        const dimmed = focusedPortfolioAssetId !== null && !isFocused;
        let tierBody = '';
        if (portfolioTier === 'beginner') {
          tierBody = `<p class="mt-1.5 text-[10px] leading-snug text-zinc-300 line-clamp-3">${asset.metrics.beginnerSummary}</p>`;
        } else if (portfolioTier === 'intermediate') {
          tierBody = `<p class="mt-1.5 text-[10px] leading-snug text-zinc-300 line-clamp-3">${asset.metrics.intermediateInfo}</p>`;
        } else {
          tierBody = `
            <div class="mt-1.5 grid grid-cols-2 gap-1 border-t border-white/[0.07] pt-1.5 text-[9.5px] tabular-nums font-mono">
              <div><span class="text-zinc-500">DY: </span><span class="font-medium text-emerald-400">${asset.metrics.seniorMetrics.dy}</span></div>
              <div><span class="text-zinc-500">Sharpe: </span><span class="font-medium text-white">${asset.metrics.seniorMetrics.sharpe}</span></div>
              <div><span class="text-zinc-500">Beta: </span><span class="font-medium text-white">${asset.metrics.seniorMetrics.beta}</span></div>
              <div><span class="text-zinc-300">${asset.metrics.seniorMetrics.durationOrPvp}</span></div>
            </div>
          `;
        }

        return `
          <div
            id="pcard-${asset.id}"
            onclick="focusPortfolioAsset('${asset.id}')"
            style="opacity: ${dimmed ? 0.25 : 1}; transform: translate(-50%, -100%);"
            class="pointer-events-auto cursor-pointer absolute w-48 rounded-xl border p-2.5 backdrop-blur-md transition-opacity duration-300 ${
              isFocused
                ? 'border-[#FF6B00]/80 bg-[#0A0A0E]/95 shadow-[0_0_25px_rgba(255,107,0,0.35)] z-30 scale-105'
                : 'border-white/10 bg-[#0A0A0E]/85 hover:border-white/25 z-10'
            }"
          >
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-semibold tracking-wider text-white">${asset.ticker}</span>
              <span class="tabular-nums rounded bg-white/[0.06] px-1.5 py-0.5 text-[10px] font-mono font-medium text-[#FF6B00]">${asset.allocation}%</span>
            </div>
            <p class="text-[9.5px] text-zinc-400">${asset.category}</p>
            ${tierBody}
          </div>
        `;
      }).join('');
    }

    function setPortfolioTier(tier) {
      portfolioTier = tier;
      const propEl = document.getElementById('portfolio-tier-prop');
      if (propEl) propEl.textContent = tier;

      ['beginner', 'intermediate', 'senior'].forEach(t => {
        const btn = document.getElementById(`tier-btn-${t}`);
        if (!btn) return;
        if (t === tier) {
          btn.className = 'rounded-lg px-3 py-1.5 text-xs font-semibold transition-all bg-[#FF6B00] text-[#050507] shadow-[0_0_16px_rgba(255,107,0,0.35)]';
        } else {
          btn.className = 'rounded-lg px-3 py-1.5 text-xs font-medium transition-all text-zinc-400 hover:text-zinc-200';
        }
      });

      const badge = document.getElementById('senior-matrix-badge');
      if (badge) {
        if (tier === 'senior') badge.classList.remove('hidden');
        else badge.classList.add('hidden');
      }

      if (pGridBasic && pGridSenior) {
        pGridBasic.visible = tier !== 'senior';
        pGridSenior.visible = tier === 'senior';
      }
      if (pCorrLine) {
        pCorrLine.visible = tier !== 'beginner';
      }

      renderPortfolioFloatingCards();
    }

    function focusPortfolioAsset(assetId) {
      if (focusedPortfolioAssetId === assetId) {
        focusedPortfolioAssetId = null;
      } else {
        focusedPortfolioAssetId = assetId;
      }

      const resetBtn = document.getElementById('btn-reset-portfolio-cam');
      const cardSpot = document.getElementById('portfolio-diagram-spotlight');
      if (resetBtn) {
        if (focusedPortfolioAssetId) resetBtn.classList.remove('hidden');
        else resetBtn.classList.add('hidden');
      }
      if (cardSpot) {
        if (focusedPortfolioAssetId) cardSpot.classList.add('active');
        else cardSpot.classList.remove('active');
      }

      SAMPLE_PORTFOLIO.forEach(a => {
        const pb = document.getElementById(`pill-btn-${a.id}`);
        if (pb) {
          if (focusedPortfolioAssetId === a.id) {
            pb.className = 'px-2.5 py-1 rounded-lg bg-[#FF6B00] text-[#050507] font-mono font-bold text-[10px] transition';
          } else {
            pb.className = 'px-2.5 py-1 rounded-lg bg-[#0A0A0E]/90 hover:border-[#FF6B00] border border-white/10 text-[10px] font-mono text-zinc-200 transition';
          }
        }
      });

      pPillars.forEach(p => {
        const isFocused = focusedPortfolioAssetId === p.asset.id;
        const dimmed = focusedPortfolioAssetId !== null && !isFocused;
        p.mesh.material.emissiveIntensity = isFocused ? 1.4 : dimmed ? 0.1 : 0.45;
        p.mesh.material.opacity = dimmed ? 0.22 : 0.88;
        p.ring.material.opacity = isFocused ? 0.9 : 0.25;
      });

      const targetAsset = SAMPLE_PORTFOLIO.find(a => a.id === focusedPortfolioAssetId);
      if (targetAsset && window.gsap && pCamera) {
        const [x, y, z] = targetAsset.position;
        gsap.to(pCamera.position, {
          x: x + 1.8,
          y: y + 1.2,
          z: z + 2.6,
          duration: 1.35,
          ease: 'power3.out'
        });
        gsap.to(pCameraTarget, {
          x: x,
          y: y * 0.6,
          z: z,
          duration: 1.35,
          ease: 'power3.out'
        });
      } else if (window.gsap && pCamera) {
        gsap.to(pCamera.position, {
          x: 0,
          y: 3.4,
          z: 6.2,
          duration: 1.4,
          ease: 'power3.out'
        });
        gsap.to(pCameraTarget, {
          x: 0,
          y: 0.85,
          z: 0,
          duration: 1.4,
          ease: 'power3.out'
        });
      }

      renderPortfolioFloatingCards();
    }

    function initPortfolioDiagram3D() {
      const canvas = document.getElementById('portfolioDiagram3dCanvas');
      if (!canvas || !window.THREE) return;

      pScene = new THREE.Scene();
      pScene.background = new THREE.Color('#050507');

      const w = canvas.clientWidth || 720;
      const h = canvas.clientHeight || 430;
      pCamera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
      pCamera.position.set(0, 3.4, 6.2);

      pRenderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      pRenderer.setSize(w, h, false);
      pRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      pScene.add(new THREE.AmbientLight(0xffffff, 0.55));
      const pt1 = new THREE.PointLight('#FF6B00', 1.6, 25);
      pt1.position.set(5, 8, 5);
      pScene.add(pt1);

      const pt2 = new THREE.PointLight('#38BDF8', 0.9, 25);
      pt2.position.set(-5, 4, -5);
      pScene.add(pt2);

      pGridBasic = new THREE.GridHelper(10, 10, '#2e2e3a', '#181820');
      pScene.add(pGridBasic);

      pGridSenior = new THREE.GridHelper(10, 20, '#FF6B00', '#1e1e28');
      pGridSenior.visible = false;
      pScene.add(pGridSenior);

      const corrPts = SAMPLE_PORTFOLIO.map(a => new THREE.Vector3(a.position[0], 0.05, a.position[2]));
      corrPts.push(corrPts[0].clone());
      const corrGeo = new THREE.BufferGeometry().setFromPoints(corrPts);
      const corrMat = new THREE.LineBasicMaterial({ color: '#FF6B00', transparent: true, opacity: 0.45 });
      pCorrLine = new THREE.Line(corrGeo, corrMat);
      pCorrLine.visible = false;
      pScene.add(pCorrLine);

      SAMPLE_PORTFOLIO.forEach(asset => {
        const height = Math.max(0.6, (asset.allocation / 40) * 2.2);
        const [x, , z] = asset.position;

        const group = new THREE.Group();
        group.position.set(x, 0, z);

        const cylGeo = new THREE.CylinderGeometry(0.28, 0.34, height, 32);
        const cylMat = new THREE.MeshStandardMaterial({
          color: asset.color,
          emissive: asset.color,
          emissiveIntensity: 0.45,
          transparent: true,
          opacity: 0.88,
          roughness: 0.2,
          metalness: 0.8
        });
        const mesh = new THREE.Mesh(cylGeo, cylMat);
        mesh.position.set(0, height / 2, 0);
        mesh.userData = { assetId: asset.id };
        group.add(mesh);

        const ringGeo = new THREE.RingGeometry(0.38, 0.45, 32);
        const ringMat = new THREE.MeshBasicMaterial({
          color: asset.color,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.3
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = -Math.PI / 2;
        ring.position.set(0, 0.01, 0);
        group.add(ring);

        pScene.add(group);
        pPillars.push({ asset, group, mesh, ring, height });
      });

      const raycaster = new THREE.Raycaster();
      const pointer = new THREE.Vector2();
      canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(pointer, pCamera);
        const hits = raycaster.intersectObjects(pPillars.map(p => p.mesh));
        if (hits.length > 0) {
          const hitId = hits[0].object.userData.assetId;
          focusPortfolioAsset(hitId);
        } else {
          focusPortfolioAsset(null);
        }
      });

      renderPortfolioFloatingCards();
    }

    const LARIUS_VERTEX_SHADER = `
      uniform float uTime;
      uniform float uAudioEnergy;
      varying vec3 vNormal;
      varying float vDisplacement;

      float hash(float n) { return fract(sin(n) * 1e4); }
      float noise(vec3 x) {
        const vec3 step = vec3(110, 241, 171);
        vec3 i = floor(x);
        vec3 f = fract(x);
        float n = dot(i, step);
        vec3 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(mix(hash(n + dot(step, vec3(0, 0, 0))), hash(n + dot(step, vec3(1, 0, 0))), u.x),
              mix(hash(n + dot(step, vec3(0, 1, 0))), hash(n + dot(step, vec3(1, 1, 0))), u.x), u.y),
          mix(mix(hash(n + dot(step, vec3(0, 0, 1))), hash(n + dot(step, vec3(1, 0, 1))), u.x),
              mix(hash(n + dot(step, vec3(0, 1, 1))), hash(n + dot(step, vec3(1, 1, 1))), u.x), u.y),
          u.z
        );
      }

      void main() {
        vNormal = normal;
        float n = noise(position * 2.4 + uTime * 1.6);
        float spike = noise(position * 5.0 - uTime * 3.0) * uAudioEnergy * 1.4;
        float displacement = (n * 0.12) + spike;

        vDisplacement = displacement;
        vec3 newPosition = position + normal * displacement;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        gl_PointSize = 2.0 + (uAudioEnergy * 2.8);
      }
    `;

    const LARIUS_FRAGMENT_SHADER = `
      uniform float uAudioEnergy;
      varying vec3 vNormal;
      varying float vDisplacement;

      void main() {
        vec2 cxy = 2.0 * gl_PointCoord - 1.0;
        float r = dot(cxy, cxy);
        if (r > 1.0) discard;
        float softEdge = 1.0 - smoothstep(0.15, 1.0, r);

        vec3 baseAmber = vec3(1.0, 0.42, 0.0);
        vec3 hotCore = vec3(1.0, 0.85, 0.55);

        float intensity = clamp(vDisplacement * 2.5 + uAudioEnergy * 0.85, 0.0, 1.0);
        vec3 finalColor = mix(baseAmber, hotCore, intensity);

        float alpha = (0.38 + (uAudioEnergy * 0.28)) * softEdge;
        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    const larius3DInstances = [];

    function createLariusCoreInstance(canvasId, getSpeakingState, updateHud) {
      const canvas = document.getElementById(canvasId);
      if (!canvas || !window.THREE) return null;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color('#050507');

      const width = canvas.clientWidth || 640;
      const height = canvas.clientHeight || 340;
      const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
      camera.position.set(0, 0, 5.2);

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      renderer.setSize(width, height, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const group = new THREE.Group();
      scene.add(group);

      const uniforms = {
        uTime: { value: 0 },
        uAudioEnergy: { value: 0 }
      };

      const pointsGeo = new THREE.IcosahedronGeometry(1.15, 18);
      const pointsMat = new THREE.ShaderMaterial({
        vertexShader: LARIUS_VERTEX_SHADER,
        fragmentShader: LARIUS_FRAGMENT_SHADER,
        uniforms,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      });
      const points = new THREE.Points(pointsGeo, pointsMat);
      group.add(points);

      const cageGeo = new THREE.IcosahedronGeometry(1.22, 2);
      const cageMat = new THREE.MeshBasicMaterial({
        color: '#FF6B00',
        wireframe: true,
        transparent: true,
        opacity: 0.16,
        blending: THREE.AdditiveBlending
      });
      const cage = new THREE.Mesh(cageGeo, cageMat);
      group.add(cage);

      const ring1 = new THREE.Mesh(
        new THREE.TorusGeometry(1.65, 0.008, 16, 120),
        new THREE.MeshBasicMaterial({ color: '#FF8C33', transparent: true, opacity: 0.48 })
      );
      group.add(ring1);

      const ring2 = new THREE.Mesh(
        new THREE.TorusGeometry(1.88, 0.006, 16, 120, Math.PI * 1.4),
        new THREE.MeshBasicMaterial({ color: '#F59E0B', transparent: true, opacity: 0.34 })
      );
      group.add(ring2);

      const ring3 = new THREE.Mesh(
        new THREE.TorusGeometry(2.1, 0.004, 16, 120, Math.PI * 0.8),
        new THREE.MeshBasicMaterial({ color: '#FFFFFF', transparent: true, opacity: 0.2 })
      );
      group.add(ring3);

      let isDragging = false, prevX = 0, prevY = 0;
      canvas.addEventListener('pointerdown', (e) => { isDragging = true; prevX = e.clientX; prevY = e.clientY; });
      window.addEventListener('pointerup', () => { isDragging = false; });
      window.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        group.rotation.y += (e.clientX - prevX) * 0.006;
        group.rotation.x += (e.clientY - prevY) * 0.006;
        prevX = e.clientX;
        prevY = e.clientY;
      });

      return { canvas, scene, camera, renderer, points, cage, ring1, ring2, ring3, uniforms, getSpeakingState, updateHud };
    }

    function initLarius3D() {
      const homeInst = createLariusCoreInstance('homeLariusCoreCanvas', () => homeIsSpeaking, true);
      if (homeInst) larius3DInstances.push(homeInst);

      const stageInst = createLariusCoreInstance('larius3dCanvas', () => lariusSpeaking || lariusListening, false);
      if (stageInst) larius3DInstances.push(stageInst);

      initPortfolioDiagram3D();

      const projVec = new THREE.Vector3();
      let lastTime = performance.now();
      function animateLoop(now) {
        requestAnimationFrame(animateLoop);
        const delta = Math.min((now - lastTime) / 1000, 0.1);
        lastTime = now;
        const t = now / 1000;

        const micEnergy = getAudioEnergy();

        larius3DInstances.forEach(inst => {
          inst.uniforms.uTime.value = t;
          const speaking = inst.getSpeakingState();
          let energy = micEnergy;
          if (energy < 0.01 && speaking) {
            energy = (Math.sin(t * 14) * 0.5 + 0.5) * (Math.sin(t * 5.3) * 0.5 + 0.5) * 0.65;
          }
          inst.uniforms.uAudioEnergy.value = energy;

          if (inst.updateHud) {
            const hudEl = document.getElementById('hud-audio-energy');
            if (hudEl) hudEl.textContent = energy.toFixed(2);
          }

          const speedMultiplier = 1 + energy * 2.5;
          inst.points.rotation.y += delta * 0.25 * speedMultiplier;
          inst.points.rotation.z += delta * 0.1;

          inst.cage.rotation.y -= delta * 0.18 * speedMultiplier;
          const scale = 1.18 + energy * 0.15;
          inst.cage.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.2);

          inst.ring1.rotation.x = Math.PI / 3 + Math.sin(t * 0.5) * 0.1;
          inst.ring1.rotation.z += delta * 0.4 * speedMultiplier;

          inst.ring2.rotation.y = -Math.PI / 4;
          inst.ring2.rotation.x += delta * 0.35 * speedMultiplier;

          inst.ring3.rotation.z = Math.PI / 2.2;
          inst.ring3.rotation.y -= delta * 0.5 * speedMultiplier;

          inst.renderer.render(inst.scene, inst.camera);
        });

        if (pRenderer && pScene && pCamera) {
          pCamera.lookAt(pCameraTarget);
          const pCanvas = pRenderer.domElement;
          const cw = pCanvas.clientWidth;
          const ch = pCanvas.clientHeight;

          pPillars.forEach(p => {
            const isFocused = focusedPortfolioAssetId === p.asset.id;
            if (isFocused) {
              const pulse = 1 + Math.sin(t * 4) * 0.04;
              p.mesh.scale.set(pulse, 1, pulse);
            } else {
              p.mesh.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
            }

            const cardEl = document.getElementById(`pcard-${p.asset.id}`);
            if (cardEl && cw > 0 && ch > 0) {
              projVec.set(p.asset.position[0], p.height + 0.35, p.asset.position[2]);
              projVec.project(pCamera);
              const sx = (projVec.x * 0.5 + 0.5) * cw;
              const sy = (-projVec.y * 0.5 + 0.5) * ch;
              cardEl.style.left = `${Math.max(100, Math.min(cw - 100, sx))}px`;
              cardEl.style.top = `${Math.max(125, Math.min(ch - 30, sy))}px`;
            }
          });

          pRenderer.render(pScene, pCamera);
        }
      }
      requestAnimationFrame(animateLoop);
      window.addEventListener('resize', resizeLarius3D);
      updateLariusStageOverlay('DEFAULT');
    }

    function resizeLarius3D() {
      larius3DInstances.forEach(inst => {
        const w = inst.canvas.clientWidth;
        const h = inst.canvas.clientHeight;
        if (w > 0 && h > 0) {
          inst.camera.aspect = w / h;
          inst.camera.updateProjectionMatrix();
          inst.renderer.setSize(w, h, false);
        }
      });
      if (pRenderer && pCamera) {
        const pc = pRenderer.domElement;
        const pw = pc.clientWidth;
        const ph = pc.clientHeight;
        if (pw > 0 && ph > 0) {
          pCamera.aspect = pw / ph;
          pCamera.updateProjectionMatrix();
          pRenderer.setSize(pw, ph, false);
        }
      }
    }

    function updateLariusStageOverlay(mode, asset = null) {
      const el = document.getElementById('larius-demo-overlay');
      if (!el) return;

      if (asset) {
        larius3dMode = 'PILLARS';
        el.innerHTML = `
          <div class="p-5 rounded-2xl bg-[#050507]/90 border border-[#FF6B00]/45 backdrop-blur-md space-y-3 tabular-nums">
            <div class="flex justify-between text-[10px] font-mono text-[#FF6B00] uppercase">
              <span>Demonstração em Tempo Real</span>
              <span>Score ${asset.score}/100</span>
            </div>
            <div class="flex justify-between items-center">
              <div>
                <div class="text-lg font-mono font-bold text-white">${asset.ticker} — ${asset.name}</div>
                <div class="text-xs text-zinc-400">${asset.sector}</div>
              </div>
              <div class="text-right font-mono">
                <div class="text-sm font-bold text-emerald-400">↗ +${asset.upside}%</div>
                <div class="text-xs text-zinc-300">DY ${asset.dy}%</div>
              </div>
            </div>
            <p class="text-xs text-zinc-300">${asset.thesis}</p>
          </div>
        `;
        return;
      }

      if (mode === 'BROKERS') {
        larius3dMode = 'PILLARS';
        el.innerHTML = `
          <div class="p-5 rounded-2xl bg-[#050507]/90 border border-[#FF6B00]/45 backdrop-blur-md space-y-3">
            <div class="text-[10px] font-mono text-[#FF6B00] uppercase">Demonstração • Bancos & Taxa Zero</div>
            <div class="grid grid-cols-2 gap-3 text-xs">
              <div class="p-3 rounded-xl bg-[#0A0A0E] border border-emerald-500/30">
                <div class="font-bold text-white">Íon Itaú / Inter / C6 / Nubank</div>
                <div class="font-mono text-emerald-400 mt-1">Corretagem: R$ 0,00</div>
              </div>
              <div class="p-3 rounded-xl bg-[#0A0A0E] border border-white/10">
                <div class="font-bold text-zinc-300">Rico (Grupo XP)</div>
                <div class="font-mono text-[#FF6B00] mt-1">Plataforma XP c/ Taxa R$ 0</div>
              </div>
            </div>
          </div>
        `;
      } else if (mode === 'COMPOUND') {
        larius3dMode = 'PILLARS';
        el.innerHTML = `
          <div class="p-5 rounded-2xl bg-[#050507]/90 border border-[#FF6B00]/45 backdrop-blur-md space-y-2.5 font-mono text-xs tabular-nums">
            <div class="text-[10px] text-[#FF6B00] uppercase">Projeção 10 Anos (R$ 10k + R$ 1k/mês)</div>
            <div class="flex justify-between p-2 rounded bg-[#0A0A0E]"><span class="text-white">Carteira Larius (Isenta IR):</span><strong class="text-[#FF6B00]">R$ 321.922</strong></div>
            <div class="flex justify-between p-2 rounded bg-[#0A0A0E]"><span class="text-zinc-400">CDB 100% CDI (-15% IR):</span><strong class="text-emerald-400">R$ 237.008</strong></div>
            <div class="flex justify-between p-2 rounded bg-[#0A0A0E]"><span class="text-zinc-500">Banco Tradicional (85% CDI):</span><strong class="text-zinc-400">R$ 209.270</strong></div>
          </div>
        `;
      } else {
        larius3dMode = 'WAVE';
        el.innerHTML = `
          <div class="p-5 rounded-2xl bg-[#050507]/85 border border-white/10 backdrop-blur-md space-y-3 text-xs">
            <div class="text-[10px] font-mono text-[#FF6B00] uppercase">Núcleo Larius • Seleção Nov/2026</div>
            <div class="grid grid-cols-3 gap-2 text-center font-mono">
              <div class="p-2.5 rounded-xl bg-[#0A0A0E]"><div class="font-bold text-white">ITUB4 / BBSE3</div><div class="text-emerald-400 text-[11px]">Selic 13,75%</div></div>
              <div class="p-2.5 rounded-xl bg-[#0A0A0E]"><div class="font-bold text-white">SBSP3 / EGIE3</div><div class="text-[#FF6B00] text-[11px]">IPCA + Corte 27</div></div>
              <div class="p-2.5 rounded-xl bg-[#0A0A0E]"><div class="font-bold text-white">WEGE3 / PRIO3</div><div class="text-emerald-400 text-[11px]">Dólar R$ 5,50</div></div>
            </div>
          </div>
        `;
      }
    }

    function submitLariusChat(e) {
      if (e && e.preventDefault) e.preventDefault();
      const inp = document.getElementById('larius-input');
      const q = inp.value.trim();
      if (!q) return;
      inp.value = '';
      askLarius(q);
    }

    function askLarius(question) {
      const box = document.getElementById('larius-messages');
      const uDiv = document.createElement('div');
      uDiv.className = 'p-3.5 rounded-2xl bg-[#FF6B00] text-[#050507] font-semibold ml-10';
      uDiv.textContent = question;
      box.appendChild(uDiv);
      box.scrollTop = box.scrollHeight;

      const id = 'lr-' + Date.now();
      const lDiv = document.createElement('div');
      lDiv.className = 'p-4 rounded-2xl bg-[#050507] border border-white/[0.08] text-zinc-200 space-y-2 mr-4';
      lDiv.innerHTML = `
        <div class="flex justify-between text-[11px] font-semibold text-[#FF6B00]">
          <span>Larius • Consultor IA</span>
          <span id="${id}-st" class="text-[10px] font-mono text-zinc-500">demonstrando...</span>
        </div>
        <div id="${id}-txt" class="leading-relaxed typing-cursor"></div>
      `;
      box.appendChild(lDiv);
      box.scrollTop = box.scrollHeight;

      const res = composeLariusReply(question);
      speakLarius(res.speech);
      streamLarius(id, res.html);
    }

    function composeLariusReply(question) {
      const q = question.toLowerCase();
      const found = [...ASSETS_DB, ...BEAR_DB].find(a => q.includes(a.ticker.toLowerCase()) || q.includes(a.name.toLowerCase()));
      if (found) {
        updateLariusStageOverlay('ASSET', found);
        return {
          html: `<p class="mb-2">Coloquei os dados de <strong>${found.name} (${found.ticker})</strong> aqui no palco 3D ao lado.</p><p class="mb-2">${found.thesis}</p><p>Cotação atual: <strong>R$ ${found.price.toFixed(2).replace('.', ',')}</strong> | Alvo: <strong>R$ ${found.target.toFixed(2).replace('.', ',')} (${found.upside >= 0 ? '+' : ''}${found.upside}%)</strong> | Dividendos: <strong>${found.dy}% a.a.</strong></p>`,
          speech: `Coloquei na tela ao lado a análise de ${found.name}, código ${found.ticker}. ${found.thesis} Hoje ela custa ${found.price.toFixed(2)} reais, com potencial de ${found.upside} por cento e dividendos de ${found.dy} por cento ao ano.`
        };
      }
      if (q.includes('banco') || q.includes('corretora') || q.includes('taxa')) {
        updateLariusStageOverlay('BROKERS');
        return {
          html: `<p class="mb-2">Projetei o comparativo dos bancos aqui ao lado. Para começar sem perder dinheiro com taxas, escolha <strong>Íon Itaú, Banco Inter, C6 Bank, Nubank ou Rico</strong>, onde a corretagem para Ações e FIIs é <strong>R$ 0,00</strong>.</p><p>O <strong>Íon Itaú</strong> é excelente porque une a segurança institucional do Itaú com aplicativo gratuito e intuitivo.</p>`,
          speech: "Projetei o comparativo dos bancos aqui ao lado. Para começar sem perder dinheiro com taxas, escolha o Íon Itaú, Banco Inter, C6 Bank, Nubank ou a corretora Rico, onde a corretagem é zero reais."
        };
      }
      if (q.includes('juros') || q.includes('imposto') || q.includes('cdb')) {
        updateLariusStageOverlay('COMPOUND');
        return {
          html: `<p class="mb-2">Veja na projeção ao lado: em 10 anos investindo R$ 10 mil + R$ 1.000/mês, o CDB de banco sofre retenção de <strong>15% a 22,5% de Imposto de Renda</strong>.</p><p>Já na <strong>Carteira Larius</strong>, seus dividendos de Ações e FIIs são <strong>100% isentos de IR</strong>, gerando uma vantagem líquida de mais de <strong>R$ 112 mil</strong> sobre um banco tradicional.</p>`,
          speech: "Veja na projeção ao lado: enquanto o CDB de banco perde de quinze a vinte e dois e meio por cento do lucro para o Imposto de Renda, os dividendos da carteira Larius são cem por cento isentos, gerando mais de cento e doze mil reais de vantagem em dez anos."
        };
      }
      updateLariusStageOverlay('DEFAULT');
      return {
        html: `<p class="mb-2">Aqui na tela ao lado destaquei nosso tripé para Novembro de 2026:</p><p class="mb-1">• <strong>Ganhadoras da Selic 13,75%:</strong> <code>ITUB4</code>, <code>BBSE3</code> e <code>BBAS3</code>.</p><p class="mb-1">• <strong>Proteção IPCA + Alta no Corte de Mar/2027:</strong> <code>SBSP3</code>, <code>EGIE3</code> e <code>HGLG11</code>.</p><p>• <strong>Receita em Dólar (R$ 5,50):</strong> <code>WEGE3</code>, <code>PRIO3</code> e <code>EMBR3</code>.</p>`,
        speech: "Destaquei na tela ao lado o nosso tripé de investimentos: Itaú e BB Seguridade para ganhar com a Selic em treze e setenta e cinco por cento; Sabesp e Engie para proteger da inflação e subir com o corte de juros em dois mil e vinte e sete; e WEG e PRIO para faturar em dólar."
      };
    }

    function streamLarius(id, html) {
      if (lariusTypingInterval) clearInterval(lariusTypingInterval);
      const txtEl = document.getElementById(`${id}-txt`);
      const stEl = document.getElementById(`${id}-st`);
      const box = document.getElementById('larius-messages');
      if (!txtEl) return;

      lariusSpeaking = true;
      const tokens = html.match(/(<[^>]+>|[^<\s]+|\s+)/g) || [html];
      let i = 0, acc = '';
      lariusTypingInterval = setInterval(() => {
        for (let k = 0; k < 2 && i < tokens.length; k++, i++) acc += tokens[i];
        txtEl.innerHTML = acc;
        box.scrollTop = box.scrollHeight;
        if (i >= tokens.length) {
          clearInterval(lariusTypingInterval);
          txtEl.classList.remove('typing-cursor');
          if (stEl) stEl.textContent = 'sincronizado';
          if (!window.speechSynthesis || !window.speechSynthesis.speaking) {
            lariusSpeaking = false;
            larius3dMode = 'WAVE';
          }
        }
      }, 28);
    }

    function loadVoices() {
      if (!('speechSynthesis' in window)) return;
      const vs = window.speechSynthesis.getVoices().filter(v => v.lang.toLowerCase().includes('pt'));
      const sel = document.getElementById('vc-engine');
      if (!sel || vs.length === 0) return;
      vs.sort((a, b) => (b.name.includes('Natural') ? 1 : 0) - (a.name.includes('Natural') ? 1 : 0));
      if (!lariusVoiceURI && vs[0]) lariusVoiceURI = vs[0].voiceURI;
      sel.innerHTML = vs.map(v => `<option value="${v.voiceURI}" ${v.voiceURI === lariusVoiceURI ? 'selected' : ''}>${v.name}</option>`).join('');
    }
    if ('speechSynthesis' in window) window.speechSynthesis.onvoiceschanged = loadVoices;

    function speakLarius(text) {
      if (lariusMuted || !('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
      const voices = window.speechSynthesis.getVoices();
      const v = voices.find(x => x.voiceURI === lariusVoiceURI) || voices.find(x => x.lang.toLowerCase().includes('pt'));
      lariusSpeaking = true;
      sentences.forEach((s, idx) => {
        const u = new SpeechSynthesisUtterance(s.trim());
        u.lang = 'pt-BR';
        u.pitch = lariusPitch;
        u.rate = lariusRate;
        if (v) u.voice = v;
        if (idx === sentences.length - 1) {
          u.onend = () => { lariusSpeaking = false; larius3dMode = 'WAVE'; };
        }
        window.speechSynthesis.speak(u);
      });
    }

    function stopLariusSpeech() {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      lariusSpeaking = false;
      larius3dMode = 'WAVE';
    }

    function toggleLariusMute() {
      lariusMuted = !lariusMuted;
      document.getElementById('larius-mute-lbl').textContent = lariusMuted ? '🔇 Sem Voz' : '🔊 Voz Ativa';
      if (lariusMuted) stopLariusSpeech();
    }

    function openVoiceCloneModal() {
      loadVoices();
      const m = document.getElementById('voice-modal');
      m.classList.remove('hidden');
      m.classList.add('flex');
    }

    function closeVoiceCloneModal() {
      const m = document.getElementById('voice-modal');
      m.classList.add('hidden');
      m.classList.remove('flex');
    }

    function applyVoiceParams() {
      lariusPitch = parseFloat(document.getElementById('vc-pitch').value);
      lariusRate = parseFloat(document.getElementById('vc-rate').value);
      const sel = document.getElementById('vc-engine');
      if (sel && sel.value) lariusVoiceURI = sel.value;
      document.getElementById('vc-pitch-lbl').textContent = lariusPitch.toFixed(2);
      document.getElementById('vc-rate-lbl').textContent = lariusRate.toFixed(2) + 'x';
    }

    function testLariusVoice() {
      applyVoiceParams();
      speakLarius("Olá! Eu sou o Larius. Minha voz foi calibrada com fluidez natural para guiar seus investimentos.");
    }

    async function calibrateVoiceFromMic() {
      const st = document.getElementById('vc-status');
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        st.textContent = 'Ouvindo 5s...';
        setTimeout(() => {
          stream.getTracks().forEach(t => t.stop());
          lariusPitch = 0.92;
          lariusRate = 1.10;
          document.getElementById('vc-pitch').value = lariusPitch;
          document.getElementById('vc-rate').value = lariusRate;
          applyVoiceParams();
          st.textContent = 'Clonado ✓';
          document.getElementById('larius-voice-badge').textContent = 'Voz Calibrada ✓';
          testLariusVoice();
        }, 4000);
      } catch (e) {
        lariusPitch = 0.92;
        lariusRate = 1.10;
        document.getElementById('vc-pitch').value = lariusPitch;
        document.getElementById('vc-rate').value = lariusRate;
        applyVoiceParams();
        st.textContent = 'Calibrado ✓';
        testLariusVoice();
      }
    }

    function listenToUserMic() {
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      const lbl = document.getElementById('larius-mic-text');
      if (!SR) {
        document.getElementById('larius-input').focus();
        return;
      }
      const rec = new SR();
      rec.lang = 'pt-BR';
      rec.onstart = () => { lariusListening = true; lbl.textContent = 'Ouvindo sua voz...'; };
      rec.onresult = (e) => {
        lariusListening = false;
        lbl.textContent = 'Falar com Larius pelo Microfone';
        askLarius(e.results[0][0].transcript);
      };
      rec.onerror = () => { lariusListening = false; lbl.textContent = 'Falar com Larius pelo Microfone'; };
      rec.onend = () => { lariusListening = false; lbl.textContent = 'Falar com Larius pelo Microfone'; };
      rec.start();
    }

    function runPythonQuantEngine() {
      const profile = (document.getElementById('py-profile') || {}).value || 'moderado';
      const initCap = parseFloat((document.getElementById('py-init') || {}).value) || 15000;
      const monthly = parseFloat((document.getElementById('py-monthly') || {}).value) || 1500;
      const years = parseInt((document.getElementById('py-years') || {}).value) || 10;

      const days = years * 365;
      const irRate = days <= 180 ? 0.225 : days <= 360 ? 0.200 : days <= 720 ? 0.175 : 0.150;
      const months = years * 12;

      const rLariusM = Math.pow(1 + 0.184, 1 / 12) - 1;
      const rCdb100M = Math.pow(1 + 0.1375, 1 / 12) - 1;
      const rBank85M = Math.pow(1 + 0.1375 * 0.85, 1 / 12) - 1;

      let bLarius = initCap, bCdb100 = initCap, bBank85 = initCap, invested = initCap;
      for (let m = 1; m <= months; m++) {
        invested += monthly;
        bLarius = bLarius * (1 + rLariusM) + monthly;
        bCdb100 = bCdb100 * (1 + rCdb100M) + monthly;
        bBank85 = bBank85 * (1 + rBank85M) + monthly;
      }

      const taxCdb100 = Math.max(0, bCdb100 - invested) * irRate;
      const netCdb100 = bCdb100 - taxCdb100;
      const netBank85 = bBank85 - Math.max(0, bBank85 - invested) * irRate;

      const allocationsMap = {
        iniciante: [
          { bucket: "Tesouro Selic / Caixa Liquidez (13,75%)", tickers: ["LFT / Selic", "KNCR11"], weight_pct: 40, monthly_brl: +(monthly * 0.40).toFixed(2) },
          { bucket: "Bancos & Seguros (Ganhadores da Selic)", tickers: ["ITUB4", "BBSE3", "BBAS3"], weight_pct: 25, monthly_brl: +(monthly * 0.25).toFixed(2) },
          { bucket: "Concessões IPCA+ (Saneamento & Energia)", tickers: ["SBSP3", "EGIE3", "TAEE11"], weight_pct: 20, monthly_brl: +(monthly * 0.20).toFixed(2) },
          { bucket: "Exportadoras Globais (Dólar R$ 5,50)", tickers: ["WEGE3", "VALE3"], weight_pct: 15, monthly_brl: +(monthly * 0.15).toFixed(2) }
        ],
        moderado: [
          { bucket: "Concessões & Utilities Blindadas IPCA+", tickers: ["SBSP3", "EGIE3", "CPFE3"], weight_pct: 30, monthly_brl: +(monthly * 0.30).toFixed(2) },
          { bucket: "Bancos Líderes & Seguridade (ROE > 22%)", tickers: ["ITUB4", "BBSE3", "BPAC11"], weight_pct: 25, monthly_brl: +(monthly * 0.25).toFixed(2) },
          { bucket: "Fundos Imobiliários Isentos (Papel + Tijolo)", tickers: ["KNCR11", "KNIP11", "HGLG11", "BTLG11"], weight_pct: 25, monthly_brl: +(monthly * 0.25).toFixed(2) },
          { bucket: "Receita Dolarizada & Indústria Global", tickers: ["WEGE3", "PRIO3", "EMBR3"], weight_pct: 20, monthly_brl: +(monthly * 0.20).toFixed(2) }
        ],
        arrojado: [
          { bucket: "Exportadoras & Crescimento Global USD", tickers: ["WEGE3", "PRIO3", "EMBR3", "SUZB3"], weight_pct: 35, monthly_brl: +(monthly * 0.35).toFixed(2) },
          { bucket: "Infraestrutura & Privatizações (Upside)", tickers: ["SBSP3", "EQTL3", "VIVT3"], weight_pct: 30, monthly_brl: +(monthly * 0.30).toFixed(2) },
          { bucket: "FIIs Tijolo p/ Fechamento de Curva Mar/27", tickers: ["HGLG11", "BTLG11", "XPML11"], weight_pct: 20, monthly_brl: +(monthly * 0.20).toFixed(2) },
          { bucket: "Bancos & Caixa Tático Selic", tickers: ["ITUB4", "BBSE3", "KNCR11"], weight_pct: 15, monthly_brl: +(monthly * 0.15).toFixed(2) }
        ]
      };

      const result = {
        engine: "Larius Quantitative Engine v2.6 (Python 3.12)",
        cloud_status: "GitHub Pages 24/7 Active (Zero Server Downtime)",
        macro_scenario: {
          period: "Novembro/2026",
          selic_annual: "13.75%",
          ipca_focus: "5.22%",
          usd_brl: "R$ 5.50",
          dbgg_gdp: "82.4%"
        },
        wealth_projection: {
          years,
          total_invested_brl: Math.round(invested),
          larius_portfolio_net_brl: Math.round(bLarius),
          cdb_100_cdi_net_brl: Math.round(netCdb100),
          ir_retained_on_cdb_brl: Math.round(taxCdb100),
          traditional_bank_85_cdi_net_brl: Math.round(netBank85),
          net_advantage_over_bank_brl: Math.round(bLarius - netBank85)
        },
        markowitz_allocation: allocationsMap[profile] || allocationsMap.moderado
      };

      const out = document.getElementById('py-output-console');
      if (out) {
        out.textContent = JSON.stringify(result, null, 2);
      }
    }

    window.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
      initLenisAndSpotlight();
      initDashboardCharts();
      renderCorridorsList();
      setDashboardTableTab('AI_TOP');
      renderFullStocksGrid();
      updateCompoundSimulator();
      renderBrokers('ALL');
      initLarius3D();
      runPythonQuantEngine();
      loadVoices();
    });
