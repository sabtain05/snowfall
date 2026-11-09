(function () {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '999999';
    
    document.body.appendChild(canvas);

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    window.addEventListener('resize', () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    });

    const snowflakes = [];
    const maxSnowflakes = 120;
    const flakeChars = ['❄', '❅', '❆'];

    for (let i = 0; i < maxSnowflakes; i++) {
        let isCrystal = Math.random() > 0.4;
        snowflakes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: isCrystal ? Math.random() * 25 + 10 : Math.random() * 5 + 2,
            speed: Math.random() * 1 + 0.5,
            wind: Math.random() * 0.5 - 0.25,
            swing: Math.random() * 100,
            swingSpeed: Math.random() * 0.02 + 0.005,
            char: isCrystal ? flakeChars[Math.floor(Math.random() * flakeChars.length)] : null,
            opacity: isCrystal ? Math.random() * 0.6 + 0.4 : Math.random() * 0.3 + 0.1,
            isCrystal: isCrystal
        });
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        
        snowflakes.forEach(flake => {
            ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
            
            if (flake.isCrystal) {
                ctx.font = `${flake.size}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(flake.char, flake.x, flake.y);
            } else {
                ctx.beginPath();
                ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
                ctx.fill();
            }
        });
        
        update();
    }

    function update() {
        snowflakes.forEach(flake => {
            flake.y += flake.speed;
            flake.swing += flake.swingSpeed;
            flake.x += flake.wind + Math.sin(flake.swing) * 0.4;

            if (flake.y > height + 40) {
                flake.y = -40;
                flake.x = Math.random() * width;
            }
            if (flake.x > width + 40) flake.x = -40;
            if (flake.x < -40) flake.x = width + 40;
        });
        requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);
})();