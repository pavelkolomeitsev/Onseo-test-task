"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.Marina = void 0;
var PIXI = __importStar(require("pixi.js"));
var enums_1 = require("./enums");
var Marina = /** @class */ (function (_super) {
    __extends(Marina, _super);
    function Marina(y, x) {
        var _this = _super.call(this) || this;
        _this.y = y;
        _this.x = x;
        _this.lineStyle(6, enums_1.AppConsts.MARINA_COLOR, 1);
        _this.drawRect(0, 0, 50, 150);
        _this.endFill();
        return _this;
    }
    Marina.prototype.makeFull = function () {
        this.beginFill(enums_1.AppConsts.MARINA_COLOR);
        this.drawRect(0, 0, 50, 150);
        this.endFill();
    };
    Marina.prototype.makeEmpty = function () {
        this.lineStyle(6, enums_1.AppConsts.MARINA_COLOR, 1);
        this.beginFill(enums_1.AppConsts.BACKGROUNDCOLOR);
        this.drawRect(0, 0, 50, 150);
        this.endFill();
    };
    return Marina;
}(PIXI.Graphics));
exports.Marina = Marina;
