// Custom cursor
const cursor = document.querySelector(".custom-cursor");
window.addEventListener("mousemove", e => {
  if (!cursor) return;
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// User Auth UI
const userArea = document.getElementById("userArea");
const user = JSON.parse(localStorage.getItem("user"));

if (user && userArea) {
  userArea.innerHTML = `
    <span>Hey, ${user.name}</span>
    <button onclick="logout()">Logout</button>
  `;
} else if (userArea) {
  userArea.innerHTML = `<a href="login.html">Login</a>`;
}

const dash = document.getElementById("dashboard");

if (user && dash) {
  dash.innerHTML = `
    <h2>Your Dashboard</h2>
    <h3>Wishlist</h3>
    <ul>${user.wishlist.map(g => `<li>${g}</li>`).join("")}</ul>

    <h3>Purchased Games</h3>
    <ul>${user.purchased.map(g => `<li>${g}</li>`).join("")}</ul>
  `;
}
