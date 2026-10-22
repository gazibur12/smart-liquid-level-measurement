const $ = (selector) => document.querySelector(selector);
const slider = $("#levelSlider");
const maxHeight = 9.2;

function updateDemo(level) {
  const safeLevel = Math.max(0, Math.min(maxHeight, Number(level)));
  const percent = Math.round((safeLevel / maxHeight) * 100);
  const airGap = maxHeight - safeLevel;
  let status, led;
  if (percent >= 75) { status = "HIGH LEVEL"; led = "green"; }
  else if (percent >= 30) { status = "MEDIUM LEVEL"; led = "yellow"; }
  else { status = "LOW LEVEL"; led = "red"; }

  $("#sliderValue").textContent = safeLevel.toFixed(1);
  $("#demoLevel").textContent = safeLevel.toFixed(1);
  $("#demoPercent").textContent = `${percent}%`;
  $("#demoProgress").style.width = `${percent}%`;
  $("#demoStatus").textContent = status;
  $("#demoLed").className = `status-led ${led}`;
  $("#redLamp").classList.toggle("active", led === "red");
  $("#yellowLamp").classList.toggle("active", led === "yellow");
  $("#greenLamp").classList.toggle("active", led === "green");
  $("#heroLevel").textContent = safeLevel.toFixed(1);
  $("#heroPercent").textContent = `${percent}%`;
  $("#heroBar").style.width = `${percent}%`;
  $("#heroStatus").textContent = status;
  $("#heroLed").className = `status-led ${led}`;
  slider.value = safeLevel;
}
slider.addEventListener("input", (event) => updateDemo(event.target.value));
document.querySelectorAll("[data-level]").forEach((button) => {
  button.addEventListener("click", () => updateDemo(button.dataset.level));
});
updateDemo(slider.value);

const menuToggle = $(".menu-toggle");
const navLinks = $(".nav-links");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

const lightbox = $("#lightbox");
document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    $("#lightboxImage").src = item.dataset.image;
    $("#lightboxImage").alt = item.querySelector("img").alt;
    $("#lightboxCaption").textContent = item.dataset.caption;
    lightbox.classList.add("open");
  });
});
function closeLightbox() { lightbox.classList.remove("open"); }
$(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeLightbox(); });

const logic = `liquidLevel = containerHeight - distance;
fillPercentage = (liquidLevel / containerHeight) * 100.0;

if (fillPercentage >= 75) {
  greenLED = HIGH;
} else if (fillPercentage >= 30) {
  yellowLED = HIGH;
} else {
  redLED = HIGH;
}`;
$("#copyCode").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(logic);
    showToast("Logic copied to clipboard");
  } catch {
    const textArea = document.createElement("textarea");
    textArea.value = logic;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    showToast("Logic copied to clipboard");
  }
});
let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}