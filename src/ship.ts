import * as PIXI from 'pixi.js';

import { AppConsts } from './enums';
import { Loadable } from './interfaces';

export class Ship extends PIXI.Graphics implements Loadable{

    constructor(type: number) {
        super();
        this.x = AppConsts.SHIP_LOCATION_X;
        this.y = AppConsts.SHIP_LOCATION_Y;
        if (type === AppConsts.EMPTY) {
            this.lineStyle(4, AppConsts.EMPTY_SHIP_COLOR, 1);
        } else {
            this.beginFill(AppConsts.FULL_SHIP_COLOR);
        }
        this.drawRect(0, 0, 100, 50);
        this.endFill();
    }

    makeEmpty() {
        this.lineStyle(4, AppConsts.FULL_SHIP_COLOR, 1);
        this.beginFill(AppConsts.BACKGROUNDCOLOR);
        this.drawRect(0, 0, 100, 50);
        this.endFill();
    }

    makeFull() {
        this.beginFill(AppConsts.EMPTY_SHIP_COLOR);
        this.drawRect(0, 0, 100, 50);
        this.endFill();
    }
}