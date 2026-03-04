const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let lastTime = 0;
let score = 0;
let particles = [];
let bullets = [];
let targets = []; // Naya: Targets storage
let spawnTimer = 0;

const player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 15,
  speed: 4,
  angle: 0,
  color: "#00d4ff"
};

const keys = {};
let mouse = { x: 0, y: 0 };

window.addEventListener("keydown", e => keys[e.key.toLowerCase()] = true);
window.addEventListener("keyup", e => keys[e.key.toLowerCase()] = false);

canvas.addEventListener("mousemove", e => {
  playFire();
  const rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});

// Shooting logic
canvas.addEventListener("mousedown", () => {
  bullets.push({
    x: player.x,
    y: player.y,
    angle: player.angle,
    speed: 10
  });
});

// Naya: Target spawning function
function spawnTarget() {
  const size = Math.random() * 20 + 10;
  targets.push({
    x: Math.random() * (canvas.width - size),
    y: Math.random() * (canvas.height - size),
    size: size,
    color: "#ff0055",
    health: 1
  });
}

function update(timestamp) {
  // Delta time for smooth movement
  const delta = timestamp - lastTime;
  lastTime = timestamp;

  // Player Movement
  if (keys["w"]) player.y -= player.speed;
  if (keys["s"]) player.y += player.speed;
  if (keys["a"]) player.x -= player.speed;
  if (keys["d"]) player.x += player.speed;

  player.angle = Math.atan2(mouse.y - player.y, mouse.x - player.x);
  
  // Particles logic
  if (keys["w"] || keys["s"] || keys["a"] || keys["d"]) {
    particles.push({ x: player.x, y: player.y, size: Math.random() * 5, life: 1, color: player.color });
  }
  particles.forEach((p, i) => {
    p.life -= 0.02;
    if (p.life <= 0) particles.splice(i, 1);
  });

  // Bullets & Collision Detection
  bullets.forEach((b, bi) => {
    b.x += Math.cos(b.angle) * b.speed;
    b.y += Math.sin(b.angle) * b.speed;

    // Check collision with targets
    targets.forEach((t, ti) => {
      playHit();
      const dist = Math.hypot(b.x - t.x, b.y - t.y);
      if (dist < t.size) {
        // Hit!
        score += 10;
        document.getElementById("score").textContent = `Score: ${score}`;
        targets.splice(ti, 1); // Target remove
        // Explosion Particles generate karo
      for (let i = 0; i < 8; i++) {
        particles.push({
          x: t.x,
          y: t.y,
          size: Math.random() * 4,
          life: 1,
          color: "#ff0055", // Target ka color
          vX: (Math.random() - 0.5) * 5, // Random phailne ke liye
          vY: (Math.random() - 0.5) * 5
        });
      }
        bullets.splice(bi, 1); // Bullet remove
      }
    });

    if (b.x < 0 || b.x > canvas.width || b.y < 0 || b.y > canvas.height) bullets.splice(bi, 1);
  });

  // Spawn targets every 1.5 seconds
  spawnTimer += delta;
  if (spawnTimer > 1500) {
    spawnTarget();
    spawnTimer = 0;
  }
}

function draw() {
  
  ctx.fillStyle = "rgba(10, 10, 12, 0.3)"; 
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw Targets
  targets.forEach(t => {
    ctx.shadowBlur = 15;
    ctx.shadowColor = t.color;
    ctx.fillStyle = t.color;
    ctx.beginPath();
    ctx.rect(t.x - t.size/2, t.y - t.size/2, t.size, t.size); // Square targets
    ctx.fill();
    ctx.shadowBlur = 0;
  });

  // Particles
  particles.forEach(p => {
    p.x += p.vX || 0;
    p.y += p.vY || 0;
    ctx.globalAlpha = p.life;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;

  // Bullets
  bullets.forEach(b => {
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(b.x, b.y, 3, 0, Math.PI * 2);
    ctx.fill();
  });

  // Player
  ctx.save();
  ctx.translate(player.x, player.y);
  ctx.rotate(player.angle);
  ctx.shadowBlur = 20;
  ctx.shadowColor = player.color;
  ctx.fillStyle = player.color;
  ctx.beginPath();
  ctx.moveTo(20, 0);
  ctx.lineTo(-10, -10);
  ctx.lineTo(-10, 10);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function gameLoop(timestamp) {
  update(timestamp);
  draw();
  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);