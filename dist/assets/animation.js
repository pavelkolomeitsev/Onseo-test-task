"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animation = void 0;
var TWEEN = __importStar(require("@tweenjs/tween.js"));
var Animation = /** @class */ (function () {
    function Animation() {
    }
    Animation.prototype.routeOne = function (ship, loadShip, marina, loadMarina, startTime) {
        new TWEEN.Tween(ship.position)
            .to({ x: 250 }, 3000)
            .start(startTime)
            .onComplete(function () {
            new TWEEN.Tween(ship.position)
                .to({ y: 50 }, 1000)
                .start(startTime + 3000)
                .onComplete(function () {
                new TWEEN.Tween(ship.position)
                    .to({ x: 50 }, 1000)
                    .start(startTime + 3000 + 1000)
                    .onComplete(function () {
                    loadShip ? ship.makeFull() : ship.makeEmpty();
                    loadMarina ? marina.makeFull() : marina.makeEmpty();
                    new TWEEN.Tween(ship.position)
                        .to({ x: 250 }, 1000)
                        .start(startTime + 3000 + 1000 + 5000)
                        .onComplete(function () {
                        new TWEEN.Tween(ship.position)
                            .to({ y: window.innerHeight / 2 - 100 }, 1000)
                            .start(startTime + 3000 + 1000 + 5000 + 1000)
                            .onComplete(function () {
                            new TWEEN.Tween(ship.position)
                                .to({ x: window.innerWidth + 150 }, 3000)
                                .start(startTime + 3000 + 1000 + 5000 + 1000 + 1000);
                        });
                    });
                });
            });
        });
    };
    Animation.prototype.routeTwo = function (ship, loadShip, marina, loadMarina, startTime) {
        new TWEEN.Tween(ship.position)
            .to({ x: 250 }, 3000)
            .start(startTime)
            .onComplete(function () {
            new TWEEN.Tween(ship.position)
                .to({ y: window.innerHeight / 2 - 170 }, 1000)
                .start(startTime + 3000)
                .onComplete(function () {
                new TWEEN.Tween(ship.position)
                    .to({ x: 50 }, 1000)
                    .start(startTime + 3000 + 1000)
                    .onComplete(function () {
                    loadShip ? ship.makeFull() : ship.makeEmpty();
                    loadMarina ? marina.makeFull() : marina.makeEmpty();
                    new TWEEN.Tween(ship.position)
                        .to({ x: 250 }, 1000)
                        .start(startTime + 3000 + 1000 + 5000)
                        .onComplete(function () {
                        new TWEEN.Tween(ship.position)
                            .to({ y: window.innerHeight / 2 - 100 }, 1000)
                            .start(startTime + 3000 + 1000 + 5000 + 1000)
                            .onComplete(function () {
                            new TWEEN.Tween(ship.position)
                                .to({ x: window.innerWidth + 150 }, 3000)
                                .start(startTime + 3000 + 1000 + 5000 + 1000 + 1000);
                        });
                    });
                });
            });
        });
    };
    Animation.prototype.routeThree = function (ship, loadShip, marina, loadMarina, startTime) {
        new TWEEN.Tween(ship.position)
            .to({ x: 50 }, 3000)
            .start(startTime)
            .onComplete(function () {
            loadShip ? ship.makeFull() : ship.makeEmpty();
            loadMarina ? marina.makeFull() : marina.makeEmpty();
            new TWEEN.Tween(ship.position)
                .to({ x: 250 }, 1000)
                .start(startTime + 3000 + 4000)
                .onComplete(function () {
                new TWEEN.Tween(ship.position)
                    .to({ y: window.innerHeight / 2 - 100 }, 1000)
                    .start(startTime + 3000 + 4000 + 1000)
                    .onComplete(function () {
                    new TWEEN.Tween(ship.position)
                        .to({ x: window.innerWidth + 150 }, 3000)
                        .start(startTime + 3000 + 4000 + 1000 + 1000);
                });
            });
        });
    };
    Animation.prototype.routeFour = function (ship, loadShip, marina, loadMarina, startTime) {
        new TWEEN.Tween(ship.position)
            .to({ x: 250 }, 3000)
            .start(startTime)
            .onComplete(function () {
            new TWEEN.Tween(ship.position)
                .to({ y: window.innerHeight - 150 }, 1000)
                .start(startTime + 3000 + 1000)
                .onComplete(function () {
                new TWEEN.Tween(ship.position)
                    .to({ x: 50 }, 1000)
                    .start(startTime + 3000 + 1000 + 1000)
                    .onComplete(function () {
                    loadShip ? ship.makeFull() : ship.makeEmpty();
                    loadMarina ? marina.makeFull() : marina.makeEmpty();
                    new TWEEN.Tween(ship.position)
                        .to({ x: 250 }, 1000)
                        .start(startTime + 3000 + 1000 + 1000 + 5000)
                        .onComplete(function () {
                        new TWEEN.Tween(ship.position)
                            .to({ y: window.innerHeight / 2 - 100 }, 1000)
                            .start(startTime + 3000 + 1000 + 1000 + 5000 + 1000)
                            .onComplete(function () {
                            new TWEEN.Tween(ship.position)
                                .to({ x: window.innerWidth + 150 }, 3000)
                                .start(startTime + 3000 + 1000 + 1000 + 5000 + 1000 + 1000);
                        });
                    });
                });
            });
        });
    };
    Animation.runMainLoop = function () {
        function animate() {
            requestAnimationFrame(animate);
            TWEEN.update();
        }
        requestAnimationFrame(animate);
    };
    return Animation;
}());
exports.Animation = Animation;
