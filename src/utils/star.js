export default class Star {
    constructor(context, canvas) {
        this.context= context;
        this.canvas= canvas;
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.radius = Math.random() * 2;
    }

    draw() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.context.fillStyle = 'white';
        this.context.fill();
    }
}