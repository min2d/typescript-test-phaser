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
        var graphics = new MyGraphic(this.game,750,320);
        var graphics2 = new MyGraphic(this.game, 50,320);

    }
}

class MyGraphic extends Phaser.Graphics {
    xBase = 30;
    yBase = 39;

    constructor(game: Phaser.Game, x: number, y: number){
        super(game,x,y);
        
        // set a fill and line style
        // this.beginFill(0xFF7733);
        //this.lineStyle(2, 0xffffff, 1);
        
        // draw a shape
        var color1 = 0xd46a6a;
        var color2 = 0xFFFFFF;
        this.drawDiamond(6,color1);
        this.drawDiamond(5.8,color2);
        this.drawDiamond(5.6,color1);
        this.drawDiamond(4.3,color2);
        this.drawDiamond(4.2,color1);
        this.drawDiamond(4.0,color2);
        // this.drawDiamond(3.8,color1);
 

        game.add.existing(this);
    }

    drawDiamond(dia: number, col:number){
        this.beginFill(col);
        this.moveTo(0,-1*this.yBase*dia);
        this.lineTo(this.xBase*dia, 0);
        this.lineTo(0, this.yBase*dia);
        this.lineTo(-1*this.xBase*dia, 0);
        this.lineTo(0, -1*this.yBase*dia);
        this.endFill();
    }
}
