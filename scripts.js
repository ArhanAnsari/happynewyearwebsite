document.addEventListener("DOMContentLoaded", () => {
  const localTimeElem = document.getElementById("local-time");
  const utcTimeElem = document.getElementById("utc-time");
  const celebrateBtn = document.getElementById("celebrate-btn");
  const fireworksElem = document.getElementById("fireworks");
  const confettiCanvas = document.getElementById("confetti-canvas");

  // Set the New Year's time
  const newYearTime = new Date(Date.UTC(2025, 0, 1, 0, 0, 0)); // January 1, 2025 (UTC)

  // Helper function to format the time as a string
  function formatTime(days, hours, minutes, seconds) {
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  // Countdown function
  function updateCountdown() {
    const now = new Date();
    const localTimeDiff = newYearTime.getTime() - now.getTime(); // Local time difference
    const utcNow = new Date(now.toISOString()); // Convert local time to UTC
    const utcTimeDiff = newYearTime.getTime() - utcNow.getTime(); // UTC time difference

    // Calculate local time countdown
    const localDays = Math.floor(localTimeDiff / (1000 * 60 * 60 * 24));
    const localHours = Math.floor((localTimeDiff / (1000 * 60 * 60)) % 24);
    const localMinutes = Math.floor((localTimeDiff / (1000 * 60)) % 60);
    const localSeconds = Math.floor((localTimeDiff / 1000) % 60);

    // Calculate UTC time countdown
    const utcDays = Math.floor(utcTimeDiff / (1000 * 60 * 60 * 24));
    const utcHours = Math.floor((utcTimeDiff / (1000 * 60 * 60)) % 24);
    const utcMinutes = Math.floor((utcTimeDiff / (1000 * 60)) % 60);
    const utcSeconds = Math.floor((utcTimeDiff / 1000) % 60);

    // Update local time display
    if (localTimeDiff <= 0) {
      localTimeElem.textContent = "🎉 Happy New Year! 🎉";
    } else {
      localTimeElem.textContent = formatTime(localDays, localHours, localMinutes, localSeconds);
    }

    // Update UTC time display
    if (utcTimeDiff <= 0) {
      utcTimeElem.textContent = "🎆 Welcome to 2025! 🎆";
    } else {
      utcTimeElem.textContent = formatTime(utcDays, utcHours, utcMinutes, utcSeconds);
    }
  }

  // Celebration button functionality
  celebrateBtn.addEventListener("click", () => {
    fireworksElem.classList.add("show");
    fireworksElem.innerHTML = "<h1>🎆 Happy New Year 2025! 🎆</h1>";
    startConfetti();
    setTimeout(() => fireworksElem.classList.remove("show"), 5000);
  });

  // Confetti animation
  function startConfetti() {
    const duration = 5 * 1000; // 5 seconds
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }

  // Initialize countdown updates
  setInterval(updateCountdown, 1000);
});
