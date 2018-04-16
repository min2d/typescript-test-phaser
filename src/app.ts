/// <reference path="dts/phaser.d.ts" />
window.onload = () => {
    var game = new Game();
};
  
class Game extends Phaser.Game {

	constructor() {
		super(800, 450, Phaser.AUTO, 'content', null);
        this.state.add('MyState',MyState, false);
        this.state.start('MyState');
	}

}
class MyState extends Phaser.State {
    create(){
        console.log('test');
        this.game.stage.backgroundColor = "#dddddd";
    }
}
