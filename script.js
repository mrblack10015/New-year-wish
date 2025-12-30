// TIMER
const newYear = new Date("Jan 1, 2026 00:00:00").getTime();
const countdown = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const diff = newYear - now;

  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  const m = Math.floor((diff % (1000*60*60)) / (1000*60));
  const s = Math.floor((diff % (1000*60)) / 1000);

  countdown.innerHTML = `${d}d : ${h}h : ${m}m : ${s}s ✨🎊`;
}, 1000);

// DEFAULT SENDER (Not shown on UI, only used as fallback internally)
let defaultSender = "";

// Always update UI from the actual input field
function updateSenderUI() {
  const sender = document.getElementById("nameInput").value.trim();
  if (sender) {
    document.getElementById("fromText").innerText = `From: ${sender}`;
  } else {
    document.getElementById("fromText").innerText = ""; // shows nothing instead of your name
  }
}

// Trigger dynamic update when user types
document.getElementById("nameInput").addEventListener("input", updateSenderUI);


// PREVIEW IMAGE
document.getElementById("fileInput").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if(file){
    const img = document.getElementById("previewImg");
    img.src = URL.createObjectURL(file);
    img.hidden = false;
  }
});

// Update sender name on page
document.getElementById("nameInput").addEventListener("input", () => {
  const sender = document.getElementById("nameInput").value.trim();
  document.getElementById("fromText").innerText = sender ? `From: ${sender}` : "";
});

/// Show sender name if it's present in URL
const urlParams = new URLSearchParams(window.location.search);
const senderFromURL = urlParams.get("sender");

if (senderFromURL) {
  document.getElementById("fromText").innerText = `From: ${senderFromURL}`;
}

// When user types name, update the page UI
document.getElementById("nameInput").addEventListener("input", () => {
  const sender = document.getElementById("nameInput").value.trim();
  document.getElementById("fromText").innerText = sender ? `From: ${sender}` : "";
});

// Send button → generate link with sender name + share
document.getElementById("sendBtn").addEventListener("click", () => {
  const sender = document.getElementById("nameInput").value.trim();

  if (!sender) {
    alert("Enter your name boss 😌");
    return;
  }

  // Create a sharable link containing the sender name
  const shareLink = location.href.split("?")[0] + `?sender=${encodeURIComponent(sender)}`;

  const message = `🎉 Happy New Year 2026! ✨\nFrom: ${sender}\nOpen my wish here: ${shareLink}`;

  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/?text=${encoded}`, "_blank");
});


// 100 QUOTES GENERATION
const quotesBox = document.getElementById("quotesSection");
const quotes = [
  "Wishing you a year full of joy and success!",
  "May this new year bring peace to your heart.",
  "Let every moment shine bright like fireworks!",
  "New beginnings, new dreams, new memories!",
  "Cheers to happiness, love, and growth!",
  "Turn the page to a fresh chapter!",
  "Spread love everywhere you go!",
  "Dream big and shine brighter!",
  "Make memories worth remembering!",
  "A year of blessings and magic awaits!",
  "Hope, love, and laughter for the year ahead!",
  "Let the countdown lead to happiness!",
  "Celebrate every small win!",
  "Smile, sparkle, repeat!",
  "A fresh start begins now!",
  "You deserve the best this year!",
  "Let happiness find you!",
  "Chase goals like a leader!",
  "Feel every moment with heart!",
  "Fireworks fade but memories stay!",
  "May your days be filled with meaning!",
  "Welcome 2026 with courage!",
  "Be unstoppable like time itself!",
  "Stay humble, stay strong!",
  "Lead your dreams forward!",
  "Let emotions flow into memories!",
  "Your heart deserves celebration!",
  "Spread smiles across the world!",
  "Celebrate life, celebrate love!",
  "Let the sky burst with hope!",
  "A wish is powerful when shared!",
  "Keep shining no matter what!",
  "Let success hug you tight!",
  "Let love stay forever!",
  "More smiles, less worries!",
  "Stay kind, stay real!",
  "Happiness looks good on you!",
  "Let dreams feel alive!",
  "Make your story legendary!",
  "Love louder than fireworks!",
  "Fill life with good people!",
  "Celebrate pure hearts!",
  "Turn seconds into memories!",
  "May laughter echo forever!",
  "Keep inspiring like a star!",
  "Rise like the new year sun!",
  "Sparkle starts within!",
  "Keep the vibe alive!",
  "Cheers to shared wishes!",
  "Be strong with emotions!",
  "Joy suits every language!",
  "Shine across borders!",
  "Leaders rise every year!",
  "Make moments priceless!",
  "Let memories scroll long!",
  "A wish that feels warm!",
  "More love, more power!",
  "A year that hugs your soul!",
  "A vibe worth sharing!",
  "Let positivity explode!",
  "Keep hope loud and clear!",
  "Happiness is the real win!",
  "New year, same pure heart!",
  "Be bold, be kind!",
  "Stay emotional, stay strong!",
  "Let your heart lead!",
  "Peace looks powerful!",
  "Grow without losing feelings!",
  "Share wishes like magic!",
  "Be a one-man show legend!",
  "Smile louder this year!",
  "Let moments be infinite!",
  "Time ticks, memories click!",
  "Be proud of your journey!",
  "Sparkle like neon nights!",
  "Make memories louder than sound!",
  "Love wins every timeline!",
  "Keep scrolling life upward!",
  "Joy doesn’t need translation!",
  "Make 2026 your masterpiece!",
  "Stay caring, stay unstoppable!",
  "Let the world feel your wish!",
  "Every heart needs a countdown!",
  "Celebrate attitude + heart!",
  "Spread wishes, not names!",
  "A leader sends the vibe!",
  "Memories upload, hearts download!",
  "A year of legendary moments!",
  "Hype fades, spirit stays!",
  "Keep love pure like code!",
  "Let emotions compile into memories!",
  "Stay top-tier in heart!",
  "Make 2026 feel personal!",
  "Bold wishes, smooth vibes!",
  "Let hearts connect like networks!",
  "Wish, share, repeat!",
  "Stay humble, shine global!",
  "Make your heart the headline!",
  "Confetti for every memory!",
  "Keep inspiring without backend!",
  "Let your wish travel worldwide!",
  "Pure heart, worldwide wish!"
];

for(let i=0;i<quotes.length;i++){
  quotesBox.innerHTML += `<div class="quote">✨ ${quotes[i]}</div>`;
}

// BACKGROUND SOUND
const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2993/2993-preview.mp3");
audio.loop = true;
audio.volume = 0.3;
audio.play();

// PARTICLES
const pBox = document.getElementById("particles");
for(let i=0;i<80;i++){
  const span = document.createElement("span");
  span.style.position="absolute";
  span.style.left=Math.random()*100+"vw";
  span.style.top=Math.random()*100+"vh";
  span.style.animation=`slideUp ${1+Math.random()*2}s infinite`;
  span.innerText="✨";
  pBox.appendChild(span);
}
