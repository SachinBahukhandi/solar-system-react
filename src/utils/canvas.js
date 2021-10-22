import Planet from "./planet";
import Star from "./star";
export default class canvas {
    constructor(cvs, context) {
        this.cvs = cvs;
        this.context = context;
        this.planets = [];

        //making the canvas full width and height
        this.cvs.width = window.innerWidth;
        this.cvs.height = window.innerHeight;
    }
    colorPlanets(){
        
    }
    
    getPlanetForOptions(radius, velocity, orbitRadius, color) {
        return new Planet(
            this.context,
            this.cvs.width / 2,
            this.cvs.height / 2,
            radius,
            color,
            velocity / 1000,
            orbitRadius
        );
    }
    init() {
        this.planets = [];
        this.stars=[];

        // for (let i = 0; i < 400; i++) {
        //     // planets.push()
        // }
        this.planets.push(this.getPlanetForOptions(35, 0, 0, 'yellow')); // sun
        this.planets.push(this.getPlanetForOptions(5, 6, 65, 'gray')); // mercury
        this.planets.push(this.getPlanetForOptions(10, 5, 90, 'orange')); // venus
        this.planets.push(this.getPlanetForOptions(15, 4, 125, 'blue')); // earth
        this.planets.push(this.getPlanetForOptions(20, 3.5, 175, 'red')); // mars
        this.planets.push(this.getPlanetForOptions(25, 3, 225, 'orange')); // jupiter
        this.planets.push(this.getPlanetForOptions(20, 2.25, 275, 'yellow')); // saturn
        this.planets.push(this.getPlanetForOptions(15, 2, 325, 'blue')); // uranus
        this.planets.push(this.getPlanetForOptions(25, 1.5, 375, 'purple')); // neptune
        this.planets.push(this.getPlanetForOptions(7, 1, 450, 'gray')); // pluto

        for (let i = 0; i < 400; i++) {
            this.stars.push(new Star(this.context, this.cvs));
        }
    }

    // Animation Loop


    animate() {
        requestAnimationFrame(() => this.animate());


        this.context.clearRect(0, 0, this.cvs.width, this.cvs.height);
        this.context.fillStyle = 'rgb(0, 0, 0)';
        this.context.fillRect(0, 0, this.cvs.width, this.cvs.height);
        this.stars.forEach(star => {
            star.draw();
        });
        this.planets.forEach(planet => {
            planet.update();
        });

    }


}