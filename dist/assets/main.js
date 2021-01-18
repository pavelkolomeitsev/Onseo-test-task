"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
var application_1 = require("./application");
var ship_1 = require("./ship");
var port_1 = require("./port");
var animation_1 = require("./animation");
var app = new application_1.Application({
    width: enums_1.AppConsts.WIDTH,
    height: enums_1.AppConsts.HEIGHT,
    backgroundColor: enums_1.AppConsts.BACKGROUNDCOLOR
});
application_1.Application.appendToPage(app);
var ship = new ship_1.Ship(enums_1.AppConsts.FULL);
var ship2 = new ship_1.Ship(enums_1.AppConsts.FULL);
var ship3 = new ship_1.Ship(enums_1.AppConsts.FULL);
var ship4 = new ship_1.Ship(enums_1.AppConsts.FULL);
var ship5 = new ship_1.Ship(enums_1.AppConsts.EMPTY);
var ship6 = new ship_1.Ship(enums_1.AppConsts.EMPTY);
var ship7 = new ship_1.Ship(enums_1.AppConsts.EMPTY);
var ship8 = new ship_1.Ship(enums_1.AppConsts.EMPTY);
var port = new port_1.Port();
var animation = new animation_1.Animation();
app.addSprite(ship);
app.addSprite(ship2);
app.addSprite(ship3);
app.addSprite(ship4);
app.addSprite(ship5);
app.addSprite(ship6);
app.addSprite(ship7);
app.addSprite(ship8);
app.addSprite(port.marinas[0]);
app.addSprite(port.marinas[1]);
app.addSprite(port.marinas[2]);
app.addSprite(port.marinas[3]);
app.addSprite(port.upperGate);
app.addSprite(port.lowerGate);
animation.routeThree(ship, false, port.marinas[2], true, 500);
animation.routeFour(ship2, false, port.marinas[3], true, enums_1.AppConsts.TIME_INTERVAL);
animation.routeTwo(ship3, false, port.marinas[1], true, enums_1.AppConsts.TIME_INTERVAL * 2);
animation.routeOne(ship4, false, port.marinas[0], true, enums_1.AppConsts.TIME_INTERVAL * 3);
animation.routeFour(ship5, true, port.marinas[3], false, enums_1.AppConsts.TIME_INTERVAL * 4);
animation.routeTwo(ship6, true, port.marinas[1], false, enums_1.AppConsts.TIME_INTERVAL * 5);
animation.routeThree(ship7, true, port.marinas[2], false, enums_1.AppConsts.TIME_INTERVAL * 6);
animation.routeOne(ship8, true, port.marinas[0], false, enums_1.AppConsts.TIME_INTERVAL * 7);
animation_1.Animation.runMainLoop();
