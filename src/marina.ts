import * as PIXI from 'pixi.js';

import { AppConsts } from './enums';
import { Loadable } from './interfaces';

export class Marina extends PIXI.Graphics implements Loadable {
    
    constructor(y: number, x: number) {
        super();
        this.y = y;
        this.x = x;
        this.lineStyle(6, AppConsts.MARINA_COLOR, 1);
        this.drawRect(0, 0, 50, 150);
        this.endFill();
    }

    makeFull() {
        this.beginFill(AppConsts.MARINA_COLOR);
        this.drawRect(0, 0, 50, 150);
        this.endFill();
    }

    makeEmpty() {
        this.lineStyle(6, AppConsts.MARINA_COLOR, 1);
        this.beginFill(AppConsts.BACKGROUNDCOLOR);
        this.drawRect(0, 0, 50, 150);
        this.endFill();
    }
}