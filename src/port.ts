import * as PIXI from 'pixi.js';

import { Marina } from './marina';
import { AppConsts } from './enums';

export class Port {
    marinas: Marina[] = [];
    upperGate: PIXI.Graphics;
    lowerGate: PIXI.Graphics;
    private location: number = 0;

    constructor() {
        for (let i = 0; i < 4; i++) {
            const marina: Marina = new Marina(this.location, 0);
            this.marinas.push(marina);
            this.location += 170;
        }
        this.upperGate = new PIXI.Graphics();
        this.upperGate.y = 0;
        this.upperGate.x = AppConsts.GATES_LOCATION_X;
        this.upperGate.beginFill(AppConsts.MARINA_COLOR);
        this.upperGate.drawRect(0, 0, 20, window.innerHeight / 3);
        this.upperGate.endFill();
        this.lowerGate = new PIXI.Graphics();
        this.lowerGate.y = AppConsts.LOWER_GATE_LOCATION_Y;
        this.lowerGate.x = AppConsts.GATES_LOCATION_X;
        this.lowerGate.beginFill(AppConsts.MARINA_COLOR);
        this.lowerGate.drawRect(0, 0, 20, window.innerHeight / 3);
        this.lowerGate.endFill();
    }
}
