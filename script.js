const powBtn = document.getElementById("powBtn");
const secretPanel = document.getElementById("secretPanel");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

function triggerAction(type) {
  comicExplosion();
  let msg = "";
  if (type === 'prank') msg = "🤡 Prank Level 100 Activated!";
  if (type === 'snack') msg = "🍕 All snacks confiscated by Kaalu!";
  if (type === 'swag') msg = "😎 Maximum Cousin Swag Loaded!";
  if (type === 'hero') msg = "🦸‍♂️ Superhero Mode: ON!";

  const toast = document.createElement("div");
  toast.textContent = msg;
  toast.style.position = "fixed";
  toast.style.bottom = "85px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.background = "#000";
  toast.style.color = "#ffde59";
  toast.style.padding = "10px 22px";
  toast.style.borderRadius = "999px";
  toast.style.border = "3px solid #fff";
  toast.style.fontFamily = "'Bangers', cursive";
  toast.style.fontSize = "20px";
  toast.style.zIndex = "200";
  toast.style.boxShadow = "5px 5px 0 #ff3131";
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2400);
}

function comicExplosion() {
  const words = ["BOOM!", "POW!", "KAALU!", "ZAP!", "KABOOM!", "HERO!", "🎂", "💥", "⚡"];
  for (let i = 0; i < 45; i++) {
    const p = document.createElement("div");
    p.className = "comic-particle";
    p.textContent = words[Math.floor(Math.random() * words.length)];
    p.style.color = ["#ff3131", "#00c2cb", "#ffde59", "#ff914d", "#ffffff"][Math.floor(Math.random() * 5)];
    p.style.left = "50vw";
    p.style.top = "45vh";

    document.body.appendChild(p);

    const x = (Math.random() * 2 - 1) * innerWidth * 0.8;
    const y = (Math.random() * 2 - 1) * innerHeight * 0.8;

    p.animate([
      { transform: "translate(-50%,-50%) scale(0.2) rotate(0deg)", opacity: 1 },
      { transform: `translate(${x}px,${y}px) scale(1.4) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ], {
      duration: 1000 + Math.random() * 800,
      easing: "cubic-bezier(.17,.89,.32,1.28)"
    }).onfinish = () => p.remove();
  }
}

powBtn.addEventListener("click", () => {
  secretPanel.classList.remove("hidden");
  secretPanel.scrollIntoView({ behavior: "smooth", block: "center" });
  music.play().then(() => { musicBtn.classList.add("playing"); }).catch(() => {});
  comicExplosion();
});

document.getElementById("confettiBtn").addEventListener("click", () => {
  comicExplosion();
});

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.classList.add("playing");
  } else {
    music.pause();
    musicBtn.classList.remove("playing");
  }
});
