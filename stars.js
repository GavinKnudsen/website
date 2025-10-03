const canvas = document.getElementById('stars-bg');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const STAR_COUNT = 120;
const stars = Array.from({length: STAR_COUNT}, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 1.5 + 0.5,
    twinkleSpeed: Math.random() * 0.02 + 0.01,
    twinklePhase: Math.random() * Math.PI * 2
}));

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        star.twinklePhase += star.twinkleSpeed;
        const alpha = 0.5 + 0.5 * Math.sin(star.twinklePhase);
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(drawStars);
}
drawStars();
