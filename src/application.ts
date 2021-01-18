import * as PIXI from 'pixi.js';

export class Application extends PIXI.Application{
    constructor(obj: Object) {
        super(obj);
    }

    addSprite(sprite: PIXI.DisplayObject) {
        this.stage.addChild(sprite);
    }

    static appendToPage(app: Application) {
        document.body.appendChild(app.view);
    }
}