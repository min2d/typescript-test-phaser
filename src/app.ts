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
        var graphics = new MyGraphic(this.game,0,0);

    }
}

class MyGraphic extends Phaser.Graphics {
    constructor(game: Phaser.Game, x: number, y: number){
        super(game,x,y);
        
        // set a fill and line style
        this.beginFill(0xFF7733);
        this.lineStyle(2, 0xffffff, 1);
        
        // draw a shape
        this.moveTo(50,0);
        this.lineTo(100, 80);
        this.lineTo(50, 160);
        this.lineTo(0, 80);
        this.lineTo(50, 0);
        this.endFill();

        game.add.existing(this);
    }
}
