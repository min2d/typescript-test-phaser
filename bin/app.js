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
        var graphics = new MyGraphic(this.game, 0, 0);
    };
    return MyState;
}(Phaser.State));
var MyGraphic = (function (_super) {
    __extends(MyGraphic, _super);
    function MyGraphic(game, x, y) {
        var _this = _super.call(this, game, x, y) || this;
        _this.beginFill(0xFF7733);
        _this.lineStyle(2, 0xffffff, 1);
        _this.moveTo(50, 0);
        _this.lineTo(100, 80);
        _this.lineTo(50, 160);
        _this.lineTo(0, 80);
        _this.lineTo(50, 0);
        _this.endFill();
        game.add.existing(_this);
        return _this;
    }
    return MyGraphic;
}(Phaser.Graphics));
//# sourceMappingURL=app.js.map