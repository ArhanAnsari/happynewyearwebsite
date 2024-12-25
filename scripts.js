document.addEventListener("DOMContentLoaded", () => {
  const localTimeElem = document.getElementById("local-time");
  const utcTimeElem = document.getElementById("utc-time");
  const celebrateBtn = document.getElementById("celebrate-btn");
  const fireworksElem = document.getElementById("fireworks");
  const confettiCanvas = document.getElementById("confetti-canvas");

  const newYearTime = new Date(Date.UTC(2025, 0, 1, 0, 0, 0)); // Jan 1, 2025 (UTC)

  // Countdown function
  function updateCountdown() {
    const now = new Date();
    const timeDiff = newYearTime - now;

    if (timeDiff <= 0) {
      localTimeElem.textContent = "🎉 Happy New Year! 🎉";
      utcTimeElem.textContent = "🎆 Welcome to 2025! 🎆";
      return;
    }

    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);

    localTimeElem.textContent = `${hours}h ${minutes}m ${seconds}s`;
    utcTimeElem.textContent = new Date().toISOString().split("T")[1].split(".")[0];
  }

  setInterval(updateCountdown, 1000);

  // Celebration
  celebrateBtn.addEventListener("click", () => {
    fireworksElem.classList.remove("hidden");
    fireworksElem.innerHTML = "<h1>🎆 Happy New Year 2025! 🎆</h1>";
    setTimeout(() => fireworksElem.classList.add("hidden"), 5000);
    startConfetti();
  });

  // Confetti Effect
  function startConfetti() {
    const confetti = new ConfettiGenerator({ target: confettiCanvas.id });
    confetti.render();
    setTimeout(() => confetti.clear(), 5000); // Stop confetti after 5 seconds
  }
});
