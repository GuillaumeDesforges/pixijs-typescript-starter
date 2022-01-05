import { Application, Container, Sprite } from 'pixi.js';

export class HelloWorld extends Container {
    app: Application;
    sprite: Sprite;
    state: { velocity: { x: number; y: number } };

    constructor(app: Application) {
        super();
        this.app = app;
        this.state = { velocity: { x: 1, y: 1 } };
        this.update = this.update.bind(this);

        this.sprite = new Sprite(
            app.loader.resources['assets/hello-world.png'].texture
        );
        this.sprite.x = window.innerWidth / 2 - this.sprite.width / 2;
        this.sprite.y = window.innerHeight / 2 - this.sprite.height / 2;
        this.addChild(this.sprite);

        // Handle window resizing
        window.addEventListener('resize', (e) => {
            this.sprite.x = window.innerWidth / 2 - this.sprite.width / 2;
            this.sprite.y = window.innerHeight / 2 - this.sprite.height / 2;
        });

        // Handle update
        app.ticker.add(this.update);
    }

    update(_: any, delta: number) {
        if (
            this.sprite.x <= 0 ||
            this.sprite.x >= window.innerWidth - this.sprite.width
        ) {
            this.state.velocity.x = -this.state.velocity.x;
        }
        if (
            this.sprite.y <= 0 ||
            this.sprite.y >= window.innerHeight - this.sprite.height
        ) {
            this.state.velocity.y = -this.state.velocity.y;
        }
        this.sprite.x += this.state.velocity.x;
        this.sprite.y += this.state.velocity.y;
    }
}
