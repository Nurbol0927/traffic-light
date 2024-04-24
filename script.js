const lights = document.querySelectorAll('.light');
let currentLight = 0;
function switchLight() {
    lights.forEach(light => light.classList.remove('active'));
    lights[currentLight].classList.add('active');
    currentLight = (currentLight + 1) % lights.length;
    setTimeout(switchLight, getTimeout(currentLight));
}
function getTimeout(index) {   
    return index === 1 ? 3000 : 3000;
}
document.addEventListener('DOMContentLoaded', switchLight);
