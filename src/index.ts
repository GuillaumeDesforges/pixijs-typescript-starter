import * as PIXI from 'pixi.js';

const load = (app: PIXI.Application) => {
    return new Promise((resolve) => {
        app.loader.add('assets/hello-world.png').load(() => {
            resolve();
        });
    });
};

const main = async () => {
    // Actual app
    let app = new PIXI.Application();

    // Display application properly
    document.body.style.margin = '0';
    app.renderer.view.style.position = 'absolute';
    app.renderer.view.style.display = 'block';

    // View size = windows
    app.renderer.resize(window.innerWidth, window.innerHeight);

    // Load assets
    await load(app);
    let sprite = new PIXI.Sprite(
        app.loader.resources['assets/hello-world.png'].texture
    );
    sprite.x = window.innerWidth / 2 - sprite.width / 2;
    sprite.y = window.innerHeight / 2 - sprite.height / 2;
    app.stage.addChild(sprite);

    // Handle window resizing
    window.addEventListener('resize', (e) => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
        sprite.x = window.innerWidth / 2 - sprite.width / 2;
        sprite.y = window.innerHeight / 2 - sprite.height / 2;
    });

    document.body.appendChild(app.view);

    let context = {
        velocity: { x: 1, y: 1},
        sprite
    };

    app.ticker.add(update, context);
};

// Cannot be an arrow function. Arrow functions cannot have a 'this' parameter.
function update(this: any, delta: number) {
    if (this.sprite.x <= 0 || this.sprite.x >= window.innerWidth - this.sprite.width) {
        this.velocity.x = -this.velocity.x;
    }
    if (this.sprite.y <= 0 || this.sprite.y >= window.innerHeight - this.sprite.height) {
        this.velocity.y = -this.velocity.y;
    }
    this.sprite.x += this.velocity.x;
    this.sprite.y += this.velocity.y;
};

main();
