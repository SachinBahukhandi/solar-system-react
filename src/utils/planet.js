export default class Planet {
    constructor(context, x, y, radius, color, velocity, orbitRadius) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
        this.orbitRadius = orbitRadius;
        this.startingPos = {
            x,
            y
        }
        this.radian = 0;
        //moon
        this.moon = {
            x: this.x + this.orbitRadius + this.radius,
            y,
            radian: 0,
            velocity: (Math.random() + 0.1) / 30
        };
    }

    draw() {
        // Planet Path
        this.context.beginPath();
        this.context.lineWidth = 2;
        this.context.arc(
            this.startingPos.x,
            this.startingPos.y,
            this.orbitRadius,
            0,
            Math.PI * 2,
            false
        );
        this.context.strokeStyle = 'rgba(255, 255, 255, 0.35)';
        this.context.stroke();
        this.context.closePath();

        //Planet
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.context.fillStyle = this.color;
        this.context.fill();
        this.context.closePath();

        // Moon (not sun)
        if (this.velocity > 0) {
            this.context.beginPath();
            this.context.arc(this.moon.x, this.moon.y, 2, 0, Math.PI * 2, false);
            this.context.fillStyle = 'gray';
            this.context.fill();
        }
    }

    update() {
        this.draw();

        // Update the x and y by the velocity
        this.radian += this.velocity; // increase our angle every animation frame
        // Get the new x based on our new angle and radius
        this.x = this.startingPos.x + Math.cos(this.radian) * this.orbitRadius;
        // Get the new y based on our new angle and radius
        this.y = this.startingPos.y + Math.sin(this.radian) * this.orbitRadius;

        this.moon.radian += this.moon.velocity;
        this.moon.x = this.x + Math.cos(this.moon.radian) * (this.radius + 5);
        this.moon.y = this.y + Math.sin(this.moon.radian) * (this.radius + 5);
    }
}
