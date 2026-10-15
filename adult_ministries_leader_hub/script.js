// SIMPLE SHARED-PASSWORD GATE
// Change this placeholder to your chosen shared password before publishing.
// IMPORTANT: This password is stored in public-facing JavaScript and can be discovered.
// Do not use this to protect confidential or sensitive information.
const SHARED_SITE_PASSWORD = "3030";

const passwordGate = document.getElementById("passwordGate");
const passwordForm = document.getElementById("passwordForm");
const sitePassword = document.getElementById("sitePassword");
const gateError = document.getElementById("gateError");
const gateSessionKey = "adultMinistriesHubUnlocked";

function unlockHub() {
  if (passwordGate) passwordGate.hidden = true;
  document.body.classList.remove("site-locked");
}

if (sessionStorage.getItem(gateSessionKey) === "yes") {
  unlockHub();
} else {
  document.body.classList.add("site-locked");
}

if (passwordForm) {
  passwordForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (sitePassword.value === SHARED_SITE_PASSWORD) {
      sessionStorage.setItem(gateSessionKey, "yes");
      gateError.hidden = true;
      unlockHub();
    } else {
      gateError.hidden = false;
      sitePassword.select();
    }
  });
}

const searchInput = document.getElementById('resourceSearch');
const cards = [...document.querySelectorAll('.resource-card')];
const filterButtons = [...document.querySelectorAll('.filter-chip')];
const resultCount = document.getElementById('resultCount');
const emptyState = document.getElementById('emptyState');
const toast = document.getElementById('toast');
let activeFilter = 'all';
let toastTimer;

function updateResources() {
  const query = searchInput.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const categoryMatch = activeFilter === 'all' || card.dataset.category === activeFilter;
    const searchable = `${card.dataset.search} ${card.innerText}`.toLowerCase();
    const queryMatch = !query || searchable.includes(query);
    const show = categoryMatch && queryMatch;
    card.hidden = !show;
    if (show) visible++;
  });
  resultCount.textContent = `${visible} resource area${visible === 1 ? '' : 's'}`;
  emptyState.hidden = visible !== 0;
}
searchInput.addEventListener('input', updateResources);
filterButtons.forEach(button => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  filterButtons.forEach(b => b.classList.toggle('active', b === button));
  updateResources();
}));

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}
document.querySelectorAll('[data-placeholder]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    showToast(`Add your real link for “${link.dataset.placeholder}” in index.html.`);
  });
});
document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.top-nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
