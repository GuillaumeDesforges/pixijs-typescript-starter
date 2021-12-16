import { Container, Graphics } from "pixi.js";

export class HelloFolder extends Container {

    constructor() {
        super();
        var background = new Graphics();
        background.beginFill(0x775533, 1);
        background.drawRect(
          256,
          256,
          256,
          256,
        );
        background.endFill();
        this.addChild(background);
    }

}