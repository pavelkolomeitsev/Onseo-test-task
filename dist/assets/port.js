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
exports.Port = void 0;
var PIXI = __importStar(require("pixi.js"));
var marina_1 = require("./marina");
var enums_1 = require("./enums");
var Port = /** @class */ (function () {
    function Port() {
        this.marinas = [];
        this.location = 0;
        for (var i = 0; i < 4; i++) {
            var marina = new marina_1.Marina(this.location, 0);
            this.marinas.push(marina);
            this.location += 170;
        }
        this.upperGate = new PIXI.Graphics();
        this.upperGate.y = 0;
        this.upperGate.x = enums_1.AppConsts.GATES_LOCATION_X;
        this.upperGate.beginFill(enums_1.AppConsts.MARINA_COLOR);
        this.upperGate.drawRect(0, 0, 20, window.innerHeight / 3);
        this.upperGate.endFill();
        this.lowerGate = new PIXI.Graphics();
        this.lowerGate.y = enums_1.AppConsts.LOWER_GATE_LOCATION_Y;
        this.lowerGate.x = enums_1.AppConsts.GATES_LOCATION_X;
        this.lowerGate.beginFill(enums_1.AppConsts.MARINA_COLOR);
        this.lowerGate.drawRect(0, 0, 20, window.innerHeight / 3);
        this.lowerGate.endFill();
    }
    return Port;
}());
exports.Port = Port;
