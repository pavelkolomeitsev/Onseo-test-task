import { AppConsts } from './enums';
import { Application } from './application';
import { Ship } from './ship';
import { Port } from './port';
import { Animation } from './animation';

const app: Application = new Application({
    width: AppConsts.WIDTH,
    height: AppConsts.HEIGHT,
    backgroundColor: AppConsts.BACKGROUNDCOLOR
});

Application.appendToPage(app);

const ship: Ship = new Ship(AppConsts.FULL);
const ship2: Ship = new Ship(AppConsts.FULL);
const ship3: Ship = new Ship(AppConsts.FULL);
const ship4: Ship = new Ship(AppConsts.FULL);
const ship5: Ship = new Ship(AppConsts.EMPTY);
const ship6: Ship = new Ship(AppConsts.EMPTY);
const ship7: Ship = new Ship(AppConsts.EMPTY);
const ship8: Ship = new Ship(AppConsts.EMPTY);
const port: Port = new Port();
const animation = new Animation();

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
animation.routeFour(ship2, false, port.marinas[3], true, AppConsts.TIME_INTERVAL);
animation.routeTwo(ship3, false, port.marinas[1], true, AppConsts.TIME_INTERVAL * 2);
animation.routeOne(ship4, false, port.marinas[0], true, AppConsts.TIME_INTERVAL * 3);
animation.routeFour(ship5, true, port.marinas[3], false, AppConsts.TIME_INTERVAL * 4);
animation.routeTwo(ship6, true, port.marinas[1], false, AppConsts.TIME_INTERVAL * 5);
animation.routeThree(ship7, true, port.marinas[2], false, AppConsts.TIME_INTERVAL * 6);
animation.routeOne(ship8, true, port.marinas[0], false, AppConsts.TIME_INTERVAL * 7);

Animation.runMainLoop();