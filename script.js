const newYear = new Date("Jan 1, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const gap = newYear - now;

  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((gap / (1000 * 60)) % 60);
  const seconds = Math.floor((gap / 1000) % 60);

  document.getElementById("countdown").innerHTML =
    `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s`;

}, 1000);

function showLove() {
  document.getElementById("final-msg").innerHTML =
    "I choose you — today, tomorrow & always ❤️✨";
}
