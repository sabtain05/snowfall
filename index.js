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
    const maxSnowflakes = 150;

    for (let i = 0; i<maxSnowflakes; i++) {
        snowflakes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 3 + 1,
            speed: Math.random() * 2 + 1,
            wind: Math.random() * 1 - 0.5
        });
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();

        snowflakes.forEach(flake => {
            ctx.moveTo(flake.x, flake.y);
            ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, true);
        });

        ctx.fill();
        update();
    }

    function update() {
        snowflakes.forEach(flake => {
            flake.y += flake.speed;
            flake.x += flake.wind;

            if (flake.y > height) {
                flake.y = -flake.radius;
                flake.x = Math.random() * width;
            }
            if (flake.x > width) flake.x=0;
        })
    }
})