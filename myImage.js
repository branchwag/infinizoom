class MyImage {
	constructor(width = 1920, height = 1080) {
		this.canvas = document.createElement("canvas");
		this.canvas.width = width;
		this.canvas.height = height;
		this.ctx = this.canvas.getContext("2d");

		this.#drawRandomBackground();
	}

	#drawRandomBackground() {
		const { width, height } = this.canvas;
		const hue = Math.random() * 360;
		this.ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
		this.ctx.fillRect(0, 0, width, height);

		this.ctx.fillStyle = `hsl(${(hue + 180) % 360}, 100%, 50%)`;
		for (let x = width / 6; x < width; x += width / 3) {
			for (let y = height / 6; y < height; y += height / 3) {
				const radius = 100;
				this.ctx.beginPath();
				this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
				this.ctx.fill();
			}
		}
	}

	addTo(parent) {
		parent.appendChild(this.canvas);
	}

	addClass(className) {
		this.canvas.classList.add(className);
	}
}
