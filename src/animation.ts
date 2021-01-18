import * as TWEEN from '@tweenjs/tween.js';

import { Ship } from './ship';
import { Marina } from './marina';

export class Animation{

    routeOne(ship: Ship, loadShip: boolean, marina: Marina, loadMarina: boolean, startTime: number) {
        new TWEEN.Tween(ship.position)
            .to({ x: 250 }, 3000)
            .start(startTime)
            .onComplete(() => {
                new TWEEN.Tween(ship.position)
                    .to({ y: 50 }, 1000)
                    .start(startTime + 3000)
                    .onComplete(() => {
                        new TWEEN.Tween(ship.position)
                            .to({ x: 50 }, 1000)
                            .start(startTime + 3000 + 1000)
                            .onComplete(() => {
                                loadShip ? ship.makeFull() : ship.makeEmpty();
                                loadMarina ? marina.makeFull() : marina.makeEmpty();
                                new TWEEN.Tween(ship.position)
                                    .to({ x: 250 }, 1000)
                                    .start(startTime + 3000 + 1000 + 5000)
                                    .onComplete(() => {
                                        new TWEEN.Tween(ship.position)
                                            .to({ y: window.innerHeight / 2 - 100 }, 1000)
                                            .start(startTime + 3000 + 1000 + 5000 + 1000)
                                            .onComplete(() => {
                                                new TWEEN.Tween(ship.position)
                                                    .to({ x: window.innerWidth + 150 }, 3000)
                                                    .start(startTime + 3000 + 1000 + 5000 + 1000 + 1000)
                                            })
                                    })
                            })
                    })
            });
    }
    
    routeTwo(ship: Ship, loadShip: boolean, marina: Marina, loadMarina: boolean, startTime: number) {
        new TWEEN.Tween(ship.position)
            .to({ x: 250 }, 3000)
            .start(startTime)
            .onComplete(() => {
                new TWEEN.Tween(ship.position)
                    .to({ y: window.innerHeight / 2 - 170 }, 1000)
                    .start(startTime + 3000)
                    .onComplete(() => {
                        new TWEEN.Tween(ship.position)
                            .to({ x: 50 }, 1000)
                            .start(startTime + 3000 + 1000)
                            .onComplete(() => {
                                loadShip ? ship.makeFull() : ship.makeEmpty();
                                loadMarina ? marina.makeFull() : marina.makeEmpty();
                                new TWEEN.Tween(ship.position)
                                    .to({ x: 250 }, 1000)
                                    .start(startTime + 3000 + 1000 + 5000)
                                    .onComplete(() => {
                                        new TWEEN.Tween(ship.position)
                                            .to({ y: window.innerHeight / 2 - 100 }, 1000)
                                            .start(startTime + 3000 + 1000 + 5000 + 1000)
                                            .onComplete(() => {
                                                new TWEEN.Tween(ship.position)
                                                    .to({ x: window.innerWidth + 150 }, 3000)
                                                    .start(startTime + 3000 + 1000 + 5000 + 1000 + 1000)
                                            })
                                    })
                            })
                    })
            });
    }
    
    routeThree(ship: Ship, loadShip: boolean, marina: Marina, loadMarina: boolean, startTime: number) {
        new TWEEN.Tween(ship.position)
            .to({ x: 50 }, 3000)
            .start(startTime)
            .onComplete(() => {
                loadShip ? ship.makeFull() : ship.makeEmpty();
                loadMarina ? marina.makeFull() : marina.makeEmpty();
                new TWEEN.Tween(ship.position)
                    .to({ x: 250 }, 1000)
                    .start(startTime + 3000 + 4000)
                    .onComplete(() => {
                        new TWEEN.Tween(ship.position)
                            .to({ y: window.innerHeight / 2 - 100 }, 1000)
                            .start(startTime + 3000 + 4000 + 1000)
                            .onComplete(() => {
                                new TWEEN.Tween(ship.position)
                                    .to({ x: window.innerWidth + 150 }, 3000)
                                    .start(startTime + 3000 + 4000 + 1000 + 1000)
                            })
                    })
            });
    }
    
    routeFour(ship: Ship, loadShip: boolean, marina: Marina, loadMarina: boolean, startTime: number) {
        new TWEEN.Tween(ship.position)
            .to({ x: 250 }, 3000)
            .start(startTime)
            .onComplete(() => {
                new TWEEN.Tween(ship.position)
                    .to({ y: window.innerHeight - 150 }, 1000)
                    .start(startTime + 3000 + 1000)
                    .onComplete(() => {
                        new TWEEN.Tween(ship.position)
                            .to({ x: 50 }, 1000)
                            .start(startTime + 3000 + 1000 + 1000)
                            .onComplete(() => {
                                loadShip ? ship.makeFull() : ship.makeEmpty();
                                loadMarina ? marina.makeFull() : marina.makeEmpty();
                                new TWEEN.Tween(ship.position)
                                    .to({ x: 250 }, 1000)
                                    .start(startTime + 3000 + 1000 + 1000 + 5000)
                                    .onComplete(() => {
                                        new TWEEN.Tween(ship.position)
                                            .to({ y: window.innerHeight / 2 - 100 }, 1000)
                                            .start(startTime + 3000 + 1000 + 1000 + 5000 + 1000)
                                            .onComplete(() => {
                                                new TWEEN.Tween(ship.position)
                                                    .to({ x: window.innerWidth + 150 }, 3000)
                                                    .start(startTime + 3000 + 1000 + 1000 + 5000 + 1000 + 1000)
                                            })
                                    })
                            })
                    })
            });
    }

    static runMainLoop() {
        function animate() {
            requestAnimationFrame(animate);
            TWEEN.update();
        }
        requestAnimationFrame(animate);
    }
}