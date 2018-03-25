var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
window.onload = function () {
    var game = new Game();
};
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this, 800, 450, Phaser.AUTO, 'content', null) || this;
        _this.state.add('MyState', MyState, false);
        _this.state.start('MyState');
        return _this;
    }
    return Game;
}(Phaser.Game));
var MyState = (function (_super) {
    __extends(MyState, _super);
    function MyState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyState.prototype.create = function () {
        console.log('test');
        this.game.stage.backgroundColor = "#dddddd";
        var graphics = new MyGraphic(this.game, 750, 320);
        var graphics2 = new MyGraphic(this.game, 50, 320);
    };
    return MyState;
}(Phaser.State));
var MyGraphic = (function (_super) {
    __extends(MyGraphic, _super);
    function MyGraphic(game, x, y) {
        var _this = _super.call(this, game, x, y) || this;
        _this.xBase = 30;
        _this.yBase = 39;
        var color1 = 0xd46a6a;
        var color2 = 0xFFFFFF;
        _this.drawDiamond(6, color1);
        _this.drawDiamond(5.8, color2);
        _this.drawDiamond(5.6, color1);
        _this.drawDiamond(4.3, color2);
        _this.drawDiamond(4.2, color1);
        _this.drawDiamond(4.0, color2);
        game.add.existing(_this);
        return _this;
    }
    MyGraphic.prototype.drawDiamond = function (dia, col) {
        this.beginFill(col);
        this.moveTo(0, -1 * this.yBase * dia);
        this.lineTo(this.xBase * dia, 0);
        this.lineTo(0, this.yBase * dia);
        this.lineTo(-1 * this.xBase * dia, 0);
        this.lineTo(0, -1 * this.yBase * dia);
        this.endFill();
    };
    return MyGraphic;
}(Phaser.Graphics));
//# sourceMappingURL=app.js.map