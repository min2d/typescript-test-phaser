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
    };
    return MyState;
}(Phaser.State));
//# sourceMappingURL=app.js.map