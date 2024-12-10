// Ensure script runs after the DOM loads
document.addEventListener("DOMContentLoaded", () => {
  const loveButton = document.getElementById("loveButton");

  loveButton.addEventListener("click", () => {
    const randomMessage = document.createElement("div");
    randomMessage.className = "random-message";
    randomMessage.textContent = "I love you";

    // Generate a random position within the window
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 50);

    randomMessage.style.left = `${x}px`;
    randomMessage.style.top = `${y}px`;
    randomMessage.style.position = "absolute";

    document.body.appendChild(randomMessage);
  });
});
