function login() {
  const username = document.getElementById("username").value.trim();
  if (!username) return alert("Enter your name");

  const user = {
    name: username,
    wishlist: ["GTA V", "Forza Horizon 5"],
    purchased: ["Red Dead Redemption 2"]
  };

  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "index.html";
}

function logout() {
  localStorage.removeItem("user");
  window.location.reload();
}
