// components/CanvasBackground.tsx

import { useEffect, useRef } from 'react';

interface Particle {
	x: number;
	y: number;
	radius: number;
	color: string;
	speedX: number;
	speedY: number;
	update: () => void;
	draw: () => void;
}

const CanvasBackground: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		// Particle class
		class ParticleClass implements Particle {
			x: number;
			y: number;
			radius: number;
			color: string;
			speedX: number;
			speedY: number;

			constructor(x: number, y: number, radius: number, color: string) {
				this.x = x;
				this.y = y;
				this.radius = radius;
				this.color = color;
				this.speedX = Math.random() * 4 - 2; // Random speed between -2 and 2
				this.speedY = Math.random() * 4 - 2; // Random speed between -2 and 2
			}

			// Update particle position
			update() {
				this.x += this.speedX;
				this.y += this.speedY;

				if (!canvas) return;

				// Bounce off the walls
				if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
					this.speedX = -this.speedX;
				}
				if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
					this.speedY = -this.speedY;
				}
			}

			// Draw particle without blur
			draw() {
				if (!ctx) return;
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
				ctx.fillStyle = this.color;
				ctx.fill();
			}
		}

		// Create particles
		const createParticles = () => {
			const colorArray = [
				'#ff6b6b',
				'#6bff6b',
				'#6b6bff',
				'#ffdb6b',
				'#db6bff',
				'#ff69b4',
				'#00ffff',
			];

			// Make particles large (radius range increased)
			const radius = Math.random() * 100 + 100; // Random radius between 30 and 70 (make the balls bigger)
			const color = colorArray[Math.floor(Math.random() * colorArray.length)];
			const x = Math.random() * canvas.width;
			const y = Math.random() * canvas.height;

			particles.push(new ParticleClass(x, y, radius, color));
		};

		let particles: Particle[] = [];
		const maxParticles = 50; // You can reduce the number of particles if needed to avoid performance issues

		// Animation loop
		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
			if (particles.length < maxParticles) {
				createParticles(); // Create new particles until we reach max
			}
			particles.forEach((particle) => {
				particle.update();
				particle.draw();
			});
			requestAnimationFrame(animate); // Keep animating
		};

		resizeCanvas(); // Initial resize

		animate(); // Start animation

		// Resize canvas on window resize
		window.addEventListener('resize', resizeCanvas);

		// Cleanup on unmount
		return () => {
			window.removeEventListener('resize', resizeCanvas);
		};
	}, []);

	return <canvas ref={canvasRef} />;
};

export default CanvasBackground;
