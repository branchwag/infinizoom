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
	}
}
