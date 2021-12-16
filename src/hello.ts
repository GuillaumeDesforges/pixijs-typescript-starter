import { Container, Graphics } from "pixi.js";

export class Hello extends Container {

    constructor() {
        super();
        var background = new Graphics();
        background.beginFill(0x335577, 1);
        background.drawRect(
          0,
          0,
          256,
          256,
        );
        background.endFill();
        this.addChild(background);
    }

}