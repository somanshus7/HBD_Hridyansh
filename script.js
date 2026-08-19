const giftBtn = document.getElementById("giftBtn");
const surpriseSection = document.getElementById("surpriseSection");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const cakeZone = document.getElementById("cakeZone");
const flame = document.getElementById("flame");
const cakeText = document.getElementById("cakeText");

cakeZone.addEventListener("click", () => {
  flame.classList.add("off");
  cakeText.textContent = "🎉 YAY! YOU BLEW OUT THE CANDLE! MAKE A WISH! 🎂";
  cakeText.style.color = "#22c55e";
  popConfetti();
});

function playPower(type) {
  popConfetti();
  let msg = "";
  if (type === 'car') msg = "🏎️ VROOM VROOM! Super Speed unlocked!";
  if (type === 'dino') msg = "🦖 ROAR! Super Dino power activated!";
  if (type === 'magic') msg = "✨ ALAKAZAM! Magic Wand activated!";
  if (type === 'cake') msg = "🍫 YUM! Double Chocolate Cake unlocked!";

  const toast = document.createElement("div");
  toast.textContent = msg;
  toast.style.position = "fixed";
  toast.style.bottom = "80px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.background = "#0f172a";
  toast.style.color = "#ffbd59";
  toast.style.padding = "10px 20px";
  toast.style.borderRadius = "999px";
  toast.style.border = "3px solid #fff";
  toast.style.fontFamily = "'Fredoka', sans-serif";
  toast.style.fontSize = "18px";
  toast.style.fontWeight = "700";
  toast.style.zIndex = "200";
  toast.style.boxShadow = "4px 4px 0 #ff3131";
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2200);
}

function popConfetti() {
  const emojis = ["🎈", "🎁", "⭐", "🍰", "🏎️", "🍦", "🎉", "✨", "🍫"];
  for (let i = 0; i < 40; i++) {
    const p = document.createElement("div");
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    p.style.position = "fixed";
    p.style.fontSize = (20 + Math.random() * 20) + "px";
    p.style.left = "50vw";
    p.style.top = "45vh";
    p.style.zIndex = "100";
    p.style.pointerEvents = "none";

    document.body.appendChild(p);

    const x = (Math.random() * 2 - 1) * innerWidth * 0.7;
    const y = (Math.random() * 2 - 1) * innerHeight * 0.7;

    p.animate([
      { transform: "translate(-50%,-50%) scale(0.2)", opacity: 1 },
      { transform: `translate(${x}px,${y}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ], {
      duration: 1000 + Math.random() * 800,
      easing: "cubic-bezier(.17,.89,.32,1.28)"
    }).onfinish = () => p.remove();
  }
}

giftBtn.addEventListener("click", () => {
  surpriseSection.classList.remove("hidden");
  surpriseSection.scrollIntoView({ behavior: "smooth", block: "center" });
  music.play().then(() => { musicBtn.classList.add("playing"); }).catch(() => {});
  popConfetti();
});

document.getElementById("blastBtn").addEventListener("click", () => {
  popConfetti();
});

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
});
