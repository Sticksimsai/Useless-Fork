const yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();


const banner = document.getElementById('statusBanner');
const toggle = document.getElementById('maintenanceToggle');
const spinBtn = document.getElementById('spin');
const mv = document.getElementById('fork3d');
const mint = document.getElementById('mintBtn');
const forkBtn = document.getElementById('forkBtn');


// Random maintenance, like a proper meme chain
if (banner && Math.random() < 0.25) banner.classList.remove('hidden');
if (toggle && banner) toggle.addEventListener('click', () => banner.classList.toggle('hidden'));
if (spinBtn && mv) {
spinBtn.addEventListener('click', () => {
const cur = parseFloat(mv.getAttribute('rotation-per-second') || '0.2');
const next = Math.min(cur + 0.2, 3);
mv.setAttribute('rotation-per-second', String(next));
});
}


// Fake mint button
if (mint) {
mint.addEventListener('click', (e) => {
e.preventDefault();
alert('Mint failed: $SPRK RPC congestion on Solana. Please try again during a non-existent window.');
});
}


// Fork random repo
if (forkBtn) {
forkBtn.addEventListener('click', (e) => {
e.preventDefault();
const picks = [
'https://github.com/trending',
'https://github.com/explore',
'https://github.com/torvalds/linux',
'https://github.com/vuejs/vue',
'https://github.com/facebook/react',
'https://github.com/twbs/bootstrap'
];
const url = picks[Math.floor(Math.random()*picks.length)];
window.open(url, '_blank');
});
}


// Dashboard fakery
const price = document.getElementById('price');
const mcap = document.getElementById('mcap');
const liq = document.getElementById('liquidity');
const holders = document.getElementById('holders');
const forks = document.getElementById('forks');


function randomize() {
if (price) price.textContent = '$' + (Math.random() * 0.001).toFixed(6);
if (mcap) mcap.textContent = ['Imaginary','Conceptual','Unfathomable','Schrödinger'][Math.floor(Math.random()*4)];
if (liq) liq.textContent = ['A puddle','A teaspoon','A droplet','A mirage'][Math.floor(Math.random()*4)];
if (holders) holders.textContent = String(2 + Math.floor(Math.random()*5));
if (forks) forks.textContent = String(50 + Math.floor(Math.random()*500));
}
randomize();
setInterval(randomize, 3000);
