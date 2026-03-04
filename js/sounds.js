const fireSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'); 
const hitSound = new Audio('https://assets.mixkit.co/active_storage/sfx/1653/1653-preview.mp3'); 

function playFire() {
    fireSound.currentTime = 0;
    fireSound.volume = 0.1; // Thoda kam volume taaki kaan mein na chubhe
    fireSound.play().catch(e => console.log("Sound blocked by browser"));
}

function playHit() {
    hitSound.currentTime = 0;
    hitSound.volume = 0.2;
    hitSound.play().catch(e => console.log("Sound blocked by browser"));
}