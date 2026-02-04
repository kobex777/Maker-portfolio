import { useEffect, useRef } from 'react';

export const GalaxyBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];

        const STAR_COUNT = 300;
        const SPEED = 0.05;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        class Star {
            x: number;
            y: number;
            size: number;
            opacity: number;
            speedX: number;
            speedY: number;
            twinkleSpeed: number;
            twinkleDirection: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.size = Math.random() < 0.9 ? Math.random() * 1.5 : Math.random() * 3 + 1;
                this.opacity = Math.random() * 0.5 + 0.3;
                this.speedX = (Math.random() - 0.5) * SPEED;
                this.speedY = (Math.random() - 0.5) * SPEED;
                this.twinkleSpeed = Math.random() * 0.02 + 0.005;
                this.twinkleDirection = Math.random() < 0.5 ? 1 : -1;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0) this.x = canvas!.width;
                if (this.x > canvas!.width) this.x = 0;
                if (this.y < 0) this.y = canvas!.height;
                if (this.y > canvas!.height) this.y = 0;

                this.opacity += this.twinkleSpeed * this.twinkleDirection;
                if (this.opacity > 1 || this.opacity < 0.3) {
                    this.twinkleDirection *= -1;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.fill();
            }
        }

        const initStars = () => {
            stars = [];
            for (let i = 0; i < STAR_COUNT; i++) {
                stars.push(new Star());
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                star.update();
                star.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
        />
    );
};
